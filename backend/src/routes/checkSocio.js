// Crear archivo: backend\mi-primera-api\scripts\checkSocio.ts
const { PrismaClient } = require('@prisma/client'); // usar require para evitar TS strict
(async () => {
  const p = new PrismaClient();
  try {
    const r = await p.socio.findFirst({ where: { dni: 45895295 } });
    console.log(r);
  } catch (err) {
    console.error(err);
  } finally {
    await p.$disconnect();
  }
})();