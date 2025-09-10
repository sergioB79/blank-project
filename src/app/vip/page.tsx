import Link from "next/link";

export default function VipPage() {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold">Programa VIP</h1>
      <p className="text-foreground/80 mt-2">
        Recebe as nossas melhores entradas, com prioridade e contexto detalhado. Notificações por e-mail e Telegram.
      </p>
      <div className="card p-6 mt-6">
        <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-2">
          <li>Alertas imediatos (e-mail + Telegram)</li>
          <li>Mais picks com maior edge</li>
          <li>Resumo diário e histórico detalhado</li>
          <li>Gestão por unidades e disciplina</li>
        </ul>
        <Link href="/assinar" className="mt-6 inline-block rounded-lg bg-primary px-5 py-2 font-semibold text-primary-foreground hover:shadow-glow">
          Assinar agora
        </Link>
      </div>
    </div>
  );
}