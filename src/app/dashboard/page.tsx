import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  const role = (session?.user as any)?.role ?? "USER";

  if (!session) {
    return (
      <div className="py-14">
        <h1 className="text-2xl font-bold">Precisas de iniciar sessão</h1>
        <p className="mt-2 text-foreground/80">Acede com o teu e-mail ou Google.</p>
        <Link href="/entrar" className="mt-4 inline-block text-sm text-primary hover:underline">Entrar →</Link>
      </div>
    );
  }

  if (role !== "VIP") {
    return (
      <div className="py-14">
        <h1 className="text-2xl font-bold">Área VIP</h1>
        <p className="mt-2 text-foreground/80">Torna-te membro VIP para ver todas as dicas e receber alertas.</p>
        <Link href="/assinar" className="mt-4 inline-block text-sm text-primary hover:underline">Assinar VIP →</Link>
      </div>
    );
  }

  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold">Painel do Membro</h1>
      <p className="text-foreground/80 mt-2">As tuas dicas de hoje, histórico e preferências.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="font-semibold">Dicas de Hoje</h3>
          <p className="text-sm text-foreground/70 mt-2">Em breve: listagem dinâmica.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Histórico</h3>
          <p className="text-sm text-foreground/70 mt-2">Consulta todas as tuas picks VIP.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Definições</h3>
          <ul className="text-sm text-foreground/80 mt-2 list-disc pl-5 space-y-1">
            <li>Notificações por E-mail</li>
            <li>Notificações por Telegram</li>
            <li>Faturação e Subscrição</li>
          </ul>
        </div>
      </div>
    </div>
  );
}