<<<<<<< HEAD
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
=======

import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  log: ["query", "warn", "error"],
});

export default prisma;

>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
