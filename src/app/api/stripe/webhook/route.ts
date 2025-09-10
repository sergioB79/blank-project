import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export const config = {
  api: {
    bodyParser: false
  }
};

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new NextResponse("Missing signature", { status: 400 });

  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "customer.subscription.updated":
      case "customer.subscription.created": {
        const sub = event.data.object as any;
        const customerId = sub.customer as string;

        // find local subscription
        const local = await prisma.subscription.findFirst({
          where: { stripeCustomerId: customerId }
        });
        if (!local) break;

        await prisma.subscription.update({
          where: { id: local.id },
          data: {
            stripeSubId: sub.id,
            status: sub.status,
            currentPeriodEnd: new Date(sub.current_period_end * 1000),
            plan: sub.items?.data?.[0]?.price?.id ?? undefined
          }
        });

        // grant VIP role if active
        if (sub.status === "active" || sub.status === "trialing") {
          await prisma.user.update({ where: { id: local.userId }, data: { role: "VIP" } });
        } else {
          await prisma.user.update({ where: { id: local.userId }, data: { role: "USER" } });
        }
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object as any;
        const customerId = sub.customer as string;
        const local = await prisma.subscription.findFirst({
          where: { stripeCustomerId: customerId }
        });
        if (local) {
          await prisma.subscription.update({
            where: { id: local.id },
            data: { status: "canceled" }
          });
          await prisma.user.update({ where: { id: local.userId }, data: { role: "USER" } });
        }
        break;
      }
    }
  } catch (e) {
    console.error(e);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }

  return NextResponse.json({ received: true });
}