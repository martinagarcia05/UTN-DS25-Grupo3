import { crearAdminUnico } from './services/registro.service';

async function init() {
  try {
    await crearAdminUnico('admin@email.com', 'Admin123');
    console.log('Admin creado o ya existente');
    process.exit(0);
  } catch (error) {
    console.error('Error creando admin:', error);
    process.exit(1);
  }
}

init();
