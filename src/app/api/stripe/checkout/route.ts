import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { priceId, successUrl, cancelUrl } = await req.json();

  let user = await prisma.user.findUnique({ where: { email: session.user.email } });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Ensure Stripe customer
  let sub = await prisma.subscription.findFirst({ where: { userId: user.id } });
  let customerId = sub?.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email || undefined,
      name: user.name || undefined,
      metadata: { userId: user.id }
    });
    customerId = customer.id;
    sub = await prisma.subscription.create({
      data: {
        userId: user.id,
        stripeCustomerId: customerId,
        status: "inactive"
      }
    });
  }

  const checkout = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=1`,
    cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/assinar?cancel=1`,
    allow_promotion_codes: true,
    locale: "pt",
    subscription_data: {
      metadata: { userId: user.id }
    },
    metadata: { userId: user.id }
  });

  return NextResponse.json({ url: checkout.url });
}