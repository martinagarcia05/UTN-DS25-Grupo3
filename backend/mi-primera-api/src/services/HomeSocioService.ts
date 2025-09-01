import { GetSocioResponse, GetEstadoCuota, GetAccesosResponse, Acceso } from '../types/HomeSocioTypes';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function getSocioById(id: number): Promise<GetSocioResponse | null> {
  // Usa `findUnique` porque es la forma más rápida y correcta de buscar por un ID (clave primaria).
  const socio = await prisma.socio.findUnique({
    where: { id },
  });
  // Devuelve el socio encontrado o null si no existe.
  return socio as GetSocioResponse | null;
}


// --- Las siguientes funciones aún usan datos de prueba y necesitan ser migradas a Prisma ---
// Por ahora, las dejamos como están para no romper otras partes de la app.

function tienePagosVencidos(id: number): boolean {
  // TODO: Esta lógica debe ser reemplazada por una consulta a la base de datos.
  return true; // Devolvemos true como ejemplo
}

export async function getEstadoCuota(id: number): Promise<GetEstadoCuota> {
  const socio = await prisma.socio.findUnique({
    where: { id },
    include: { cuotas: true }
  });

  if (!socio) {
    throw Object.assign(new Error('Socio no encontrado'), { statusCode: 404 });
  }

  const cuota = socio.cuotas[0]; // Suponiendo que solo hay una cuota por socio
  if (!cuota) {
    throw Object.assign(new Error('Cuota no encontrada'), { statusCode: 404 });
  }

  return {
    cuotaAlDia: cuota.estado === 'AL_DIA',
    fechaVencimiento: cuota.fechaVencimiento,
    montoAdeudado: cuota.montoAdeudado
  };
}

export async function getAccesos(id: number): Promise<GetAccesosResponse> {
  // TODO: Esta lógica debe ser reemplazada por una consulta a la base de datos.
  const pagosVencidos = tienePagosVencidos(id);
  const accesos: Acceso[] = [
    { nombre: 'Reservar Cancha', habilitado: !pagosVencidos, motivo: pagosVencidos ? 'Cuota vencida' : undefined },
    { nombre: 'Mis entradas', habilitado: !pagosVencidos, motivo: pagosVencidos ? 'Cuota vencida' : undefined },
    { nombre: 'Modificar perfil', habilitado: true },
    { nombre: 'Pagar cuota', habilitado: true }
  ];
  return { accesos };
}

