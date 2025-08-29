import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

import { db } from "@/server/db";
import { env } from "@/env";
// import sendLoginNotification from "../send/route";

/**
 * Module augmentation for `next-auth` types. Allows extending session and user.
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      roleId: string | null;
      isActive: boolean | null;
    } & DefaultSession["user"];
  }

  interface User {
    roleId?: string;
    isActive?: boolean;
    hashedPassword?: string; // optional, for TypeScript completeness if used
  }
}

/**
 * NextAuth config including Google OAuth and Credentials provider
 */
export const authConfig = {
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;

        // Find user by email
        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.hashedPassword) return null;

        // Verify password hash
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword as string
        );
        if (!isValid) return null;

        // Return user object for session
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          roleId: user.roleId ?? undefined,
          isActive: user.isActive ?? undefined,
        };
      },
    }),
  ],

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    error: "/error",
    signIn: "/",
    signOut: "/",
  },

  callbacks: {
    signIn({ user }) {
      if (user.isActive === false) return false; // block inactive users
      return true;
    },

     jwt: async ({ token, user }) => {
        if (user) {
          token.isActive = user.isActive;
          token.sub = user.id;
        }
        return token;
      },

    session: async ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          roleId: session.user.roleId,
          isActive: session.user.isActive,
        },
      };
    },
  },
} satisfies NextAuthConfig;
