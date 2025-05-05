import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        phoneNumber: { label: "Phone Number", type: "text" },
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        const { name, phoneNumber, email } = credentials;

        // 🔒 Server-side validation
        if (
          !email ||
          !phoneNumber ||
          !name ||
          !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
          !/^\d{10}$/.test(phoneNumber)
        ) {
          return null;
        }

        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          user = await prisma.user.create({
            data: { email, name, phoneNumber },
          });
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
