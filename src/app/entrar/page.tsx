"use client";

import { useState } from "react";

export default function EntrarPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="py-14 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">Entrar</h1>
      <p className="text-sm text-foreground/70 mt-2">
        Enviaremos um link mágico para o teu e-mail. Também podes usar Google.
      </p>

      <form
        className="mt-6 card p-6 space-y-4"
        method="post"
        action="/api/auth/signin/email"
      >
        <label className="block text-sm">
          E-mail
          <input
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-lg bg-background border border-border/60 px-3 py-2 outline-none focus:border-primary/60"
            placeholder="tu@email.com"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground hover:shadow-glow"
        >
          Enviar link mágico
        </button>
      </form>

      <div className="text-center mt-6">
        <a
          className="text-sm text-primary hover:underline"
          href="/api/auth/signin/google"
        >
          Entrar com Google →
        </a>
      </div>
    </div>
  );
}