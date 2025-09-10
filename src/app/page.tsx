import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-14">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Dicas de apostas inteligentes.
          <span className="block text-primary mt-2">Grátis todos os dias + VIP para quem quer vantagem.</span>
        </h1>
        <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
          Futebol, ténis, basquetebol e mais. Metodologia disciplinada por unidades, foco em valor esperado,
          comunicação clara e resultados transparentes.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/assinar" className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-glow">
            Tornar-me VIP
          </Link>
          <Link href="/dicas" className="rounded-lg border border-border/60 px-6 py-3 hover:border-primary/40">
            Ver dicas gratuitas
          </Link>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Prova de Resultados</h3>
          <p className="text-sm text-foreground/70">
            Transparência total: unidades por mês, taxa de acerto, amostra e metodologia de cálculo.
          </p>
          <Link className="text-primary text-sm mt-4 inline-block hover:underline" href="/prova">
            Ver resultados →
          </Link>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Alertas Rápidos</h3>
          <p className="text-sm text-foreground/70">
            VIP recebe notificações por e-mail e Telegram assim que publicamos novas dicas.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Metodologia</h3>
          <p className="text-sm text-foreground/70">
            Gestão por unidades, comparação de linhas (CLV), e disciplina de banca.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Últimas Dicas Gratuitas</h2>
          <Link href="/dicas" className="text-sm text-primary hover:underline">Todas as dicas →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card p-6">
            <h4 className="font-semibold">Futebol — Mercado: Handicap Asiático</h4>
            <p className="text-sm text-foreground/70 mt-2">Odds 1.95 • Stake 1.5u • Casa: Pinnacle • Hoje 20:00</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold">Ténis — Over Jogos</h4>
            <p className="text-sm text-foreground/70 mt-2">Odds 1.87 • Stake 1u • Casa: Bet365 • Amanhã 14:30</p>
          </div>
          <div className="card p-6">
            <h4 className="font-semibold">NBA — Tripla</h4>
            <p className="text-sm text-foreground/70 mt-2">Odds 2.10 • Stake 0.75u • Casa: DraftKings • Hoje 01:00</p>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <div className="card p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold">Pronto para elevar a tua estratégia?</h3>
          <p className="text-foreground/80 mt-3">
            Junta-te ao VIP e recebe as nossas melhores entradas com prioridade e contexto.
          </p>
          <Link href="/assinar" className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-glow">
            Assinar VIP
          </Link>
        </div>
      </section>
    </div>
  );
}