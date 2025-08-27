import path from 'path';

const prismaPath = path.resolve(__dirname, '../../generated/prisma');
const { PrismaClient } = require(prismaPath);

// Patrón singleton
const prisma = (global as any).prisma || new PrismaClient({
  log: ["query", "warn", "error"],
});

if (process.env.NODE_ENV !== 'production') {
  (global as any).prisma = prisma;
}

export default prisma;
