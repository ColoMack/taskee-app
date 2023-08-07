// this is a best practise to use when using prisma with nextjs 13 to avoid hot-reloading errors

import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;