import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { prisma } from "./prisma";

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  providers: [
    // Magic link email - requires EMAIL_SERVER and EMAIL_FROM
    Email({
      from: process.env.EMAIL_FROM,
      server: process.env.EMAIL_SERVER
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: "/entrar"
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // attach role for gating
        // @ts-expect-error custom
        session.user.role = user.role;
        // @ts-expect-error custom
        session.user.id = user.id;
      }
      return session;
    }
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);