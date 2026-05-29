import "server-only"

import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@/lib/generated/prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

const connectionString = process.env.DATABASE_URL
export const hasDatabaseUrl = Boolean(connectionString)

export const prisma = hasDatabaseUrl
  ? globalForPrisma.prisma ??
    new PrismaClient({
      adapter: new PrismaPg({
        connectionString: connectionString as string,
      }),
      log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    })
  : null

if (process.env.NODE_ENV !== "production" && prisma) {
  globalForPrisma.prisma = prisma
}
