export default function ProvaPage() {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold">Prova de Resultados</h1>
      <p className="text-foreground/80 mt-2">
        Transparência acima de tudo. Publicamos unidades ganhas/perdidas por mês, taxa de acerto, e metodologia.
      </p>

      <div className="card p-6 mt-8">
        <h3 className="font-semibold">Metodologia</h3>
        <ul className="list-disc pl-5 text-sm text-foreground/80 mt-3 space-y-2">
          <li>Unidades como métrica principal (não valor em €).</li>
          <li>Odds registadas no momento da publicação; void quando a linha desaparece antes do início.</li>
          <li>Fecho de linha (CLV) monitorizado como indicador de valor.</li>
          <li>Resultados finais verificados por fontes públicas.</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-semibold">Unidades por Mês</h3>
          <p className="text-sm text-foreground/70 mt-2">Gráfico disponível em breve.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Resumo</h3>
          <p className="text-sm text-foreground/70 mt-2">
            Win rate, yield, número de picks e desportos cobertos.
          </p>
        </div>
      </div>
    </div>
  );
}