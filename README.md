# Betting Brain

Dicas gratuitas e VIP para futebol, ténis, basquetebol e mais. Next.js 14 + Tailwind + NextAuth + Stripe + Prisma.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Auth: NextAuth (link mágico por e-mail + Google)
- Pagamentos: Stripe (Checkout + Customer Portal via webhooks)
- DB: Postgres + Prisma

## Arranque

1) Clonar e instalar
```bash
pnpm i   # ou npm i / yarn
```

2) Configurar variáveis de ambiente
- Copia `.env.example` para `.env.local` e preenche:
  - DATABASE_URL
  - NEXTAUTH_SECRET (gera com: `openssl rand -base64 32`)
  - EMAIL_SERVER e EMAIL_FROM (SMTP)
  - GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET (opcional)
  - STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET
  - NEXT_PUBLIC_STRIPE_PRICE_MONTHLY / NEXT_PUBLIC_STRIPE_PRICE_QUARTERLY

3) Base de dados
```bash
pnpm prisma migrate dev --name init
```

4) Stripe Webhook (em desenvolvimento)
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
# coloca a chave gerada em STRIPE_WEBHOOK_SECRET
```

5) Desenvolvimento
```bash
pnpm dev
```

6) Produção
```bash
pnpm build && pnpm start
```

## Páginas

- `/` Home
- `/dicas` Dicas gratuitas
- `/vip` Landing VIP
- `/assinar` Checkout + gestão de plano
- `/prova` Prova de resultados
- `/entrar` Autenticação (e-mail/Google)
- `/dashboard` Área VIP (gating por role)
- `/legal/*` Termos, Privacidade, Jogo Responsável

## Notas

- O webhook da Stripe atribui/remover o role `VIP` ao utilizador conforme o estado da subscrição.
- O e-mail magic link requer SMTP funcional em `EMAIL_SERVER`.
- Em iteração seguinte: CMS/MDX para dicas, filtros por desporto, bot Telegram e gráficos reais.