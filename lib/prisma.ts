// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Use globalThis to persist Prisma client during development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Optional: logs all SQL queries to the console
  });

// Avoid creating new PrismaClient on every hot reload in development
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
