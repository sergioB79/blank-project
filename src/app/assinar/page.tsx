"use client";

import { useState } from "react";

const plans = [
  {
    id: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY!,
    name: "Mensal",
    price: "29€ / mês",
    note: "Cancela quando quiseres"
  },
  {
    id: process.env.NEXT_PUBLIC_STRIPE_PRICE_QUARTERLY!,
    name: "Trimestral",
    price: "75€ / trimestre",
    note: "15% desconto"
  }
];

export default function AssinarPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const checkout = async (priceId: string) => {
    setLoading(priceId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId })
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Erro ao iniciar checkout");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold">Acesso VIP</h1>
      <p className="text-foreground/80 mt-2">
        Recebe as melhores entradas com prioridade, contexto e notificações por e-mail e Telegram.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {plans.map((p) => (
          <div key={p.name} className="card p-6">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-foreground/80">{p.price}</p>
            <p className="text-sm text-foreground/60">{p.note}</p>
            <button
              onClick={() => checkout(p.id)}
              disabled={!p.id || loading === p.id}
              className="mt-5 w-full rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:shadow-glow disabled:opacity-50"
            >
              {loading === p.id ? "A processar..." : "Assinar"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <form method="post" action="/api/stripe/portal">
          <button
            className="text-sm text-primary hover:underline"
            type="submit"
          >
            Gerir a minha subscrição →
          </button>
        </form>
      </div>
    </div>
  );
}