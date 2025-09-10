export default function DicasPage() {
  // Placeholder - in MVP next iteration we will load MDX tips with filters
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold">Dicas Gratuitas</h1>
      <p className="text-foreground/80 mt-2">
        Seleção diária de picks gratuitas. Para acesso completo e alertas em tempo real, considera o VIP.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-semibold">Futebol — Ambas Marcam</h3>
          <p className="text-sm text-foreground/70 mt-2">Odds 1.80 • Stake 1u • Casa: Betano • Hoje 21:00</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Ténis — Handicap +3.5</h3>
          <p className="text-sm text-foreground/70 mt-2">Odds 1.95 • Stake 1.25u • Casa: Pinnacle • Amanhã 10:00</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">NBA — Over 221.5</h3>
          <p className="text-sm text-foreground/70 mt-2">Odds 1.90 • Stake 1u • Casa: Bet365 • Hoje 00:30</p>
        </div>
      </div>
    </div>
  );
}