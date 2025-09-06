// <<<<<<< HEAD
// import path from 'path';


// const prismaPath = path.resolve(__dirname, '../../../../generated/prisma');
// console.log('Prisma path:', prismaPath);
// console.log('Current dirname:', __dirname);
// const { PrismaClient } = require(prismaPath);
// =======

import { PrismaClient } from "../../generated/prisma";
//>>>>>>> develop

const prisma = new PrismaClient({
  log: ["query", "warn", "error"],
});

export default prisma;

