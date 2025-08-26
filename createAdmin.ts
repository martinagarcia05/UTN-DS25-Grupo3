
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();



async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.usuario.create({
    data: {
      email: 'admin@admin.com',
      password: hashedPassword,
      rol: 'ADMIN'
    }
  });

  console.log('Admin creado:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
