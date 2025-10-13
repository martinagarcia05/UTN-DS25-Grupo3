import { PrismaClient, $Enums } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const ADMIN_EMAIL = 'milimartilutomivalen@gmail.com';
const ADMIN_PASSWORD_TEMPORAL = 'administrador123';
const ROL_ADMIN = 'ADMIN';
const ROL_DEFAULT = 'ADMINISTRATIVO';

async function crearOSetearUnicoAdmin() {
  try {
    //hasheo la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD_TEMPORAL, salt);
    const adminUser = await prisma.$transaction(async (tx) => {
      //pongo a todos los admin como administrativos
      const { count: demotedCount } = await tx.usuario.updateMany({
        where: { rol: ROL_ADMIN },
        data: { rol: ROL_DEFAULT },
      });

      if (demotedCount > 0) {
        console.log(`- ${demotedCount} administrador(es) previos han sido degradados a ${ROL_DEFAULT}.`);
      }

      // crear al usuario si no existe, o actualizarlo si ya existe.
      const user = await tx.usuario.upsert({
        where: { email: ADMIN_EMAIL },
        // si el usuario ya existe, solo nos aseguramos de que tenga el rol de ADMIN.
        update: {
          rol: ROL_ADMIN,
        },
        // Si el usuario NO existe, lo crea con los datos especificados.
        create: {
          email: ADMIN_EMAIL,
          password: hashedPassword,
          rol: ROL_ADMIN,
        },
      });

      return user;
    });



  } catch (error) {
    console.error('\n❌ Error durante el proceso:', error instanceof Error ? error.message : error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

crearOSetearUnicoAdmin();