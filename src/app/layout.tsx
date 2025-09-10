import "./globals.css";
import { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Betting Brain — Dicas de Apostas Inteligentes",
  description: "Dicas gratuitas e VIP para futebol, ténis, basquetebol e muito mais. Disciplina, unidades e transparência.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "Betting Brain",
    description: "Dicas gratuitas e VIP para futebol, ténis, basquetebol e muito mais.",
    url: "/",
    siteName: "Betting Brain",
    locale: "pt_PT",
    type: "website"
  }
};

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border/40 bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-primary">
          <span className={`${space.className} text-lg`}>Betting Brain</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/dicas" className="hover:text-primary">Dicas Gratuitas</Link>
          <Link href="/prova" className="hover:text-primary">Prova de Resultados</Link>
          <Link href="/vip" className="hover:text-primary">VIP</Link>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/entrar" className="text-sm text-foreground/80 hover:text-primary">Entrar</Link>
          <Link href="/assinar" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:shadow-glow">
            Tornar-me VIP
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 mt-16">
      <div className="container py-10 text-sm text-foreground/70">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>&copy; {new Date().getFullYear()} Betting Brain. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/legal/termos" className="hover:text-primary">Termos</Link>
            <Link href="/legal/privacidade" className="hover:text-primary">Privacidade</Link>
            <Link href="/legal/responsavel" className="hover:text-primary">Jogo Responsável</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT" className="dark">
      <body className={inter.className}>
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}