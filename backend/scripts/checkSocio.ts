import { PrismaClient } from '@prisma/client';
(async () => {
  const p = new PrismaClient();
  try {
    console.log(await p.socio.findFirst({ where: { dni: 45895295 } }));
  } catch (e) {
    console.error(e);
  } finally {
    await p.$disconnect();
  }
})();