import { ActualizarSocioRequest, Socio, GetSocioResponse } from '../types/Socio';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const socios: Socio[] = [];

const validarFormatoFecha = (date: string): boolean => {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!regex.test(date)) return false;
  const [, day, month, year] = date.match(regex)!.map(Number);
  const dateObj = new Date(year, month - 1, day);
  return dateObj.getDate() === day && dateObj.getMonth() === month - 1 && dateObj.getFullYear() === year;
};

export async function updateSocio(id: number, updateData: ActualizarSocioRequest): Promise<Socio> {
  const socioIndex = socios.findIndex(s => s.id === id);
  if (socioIndex === -1) {
    const error = new Error('Socio no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  if (updateData.fechaNacimiento && !validarFormatoFecha(updateData.fechaNacimiento)) {
    const error = new Error('Formato de fecha inválido');
    (error as any).statusCode = 400;
    throw error;
  }
  socios[socioIndex] = {
    ...socios[socioIndex],
    ...updateData,
    fechaNacimiento: updateData.fechaNacimiento
      ? (typeof updateData.fechaNacimiento === 'string'
          ? new Date(updateData.fechaNacimiento.split('/').reverse().join('-'))
          : updateData.fechaNacimiento)
      : socios[socioIndex].fechaNacimiento
  };
  return socios[socioIndex];
}

export async function updateSocioByDni(dni: number, datos: ActualizarSocioRequest): Promise<GetSocioResponse> {
  // Normalizar y validar fecha antes de enviar a Prisma si viene en DD/MM/YYYY
  const dataToUpdate: any = { ...datos };

  // Permitir cambio de DNI: convertir a número y validar
  if ('dni' in dataToUpdate) {
    const nuevoDni = Number(dataToUpdate.dni);
    if (Number.isNaN(nuevoDni) || nuevoDni <= 0) {
      const error = new Error('DNI inválido');
      (error as any).statusCode = 400;
      throw error;
    }
    dataToUpdate.dni = nuevoDni;
  }

  if (dataToUpdate.fechaNacimiento && typeof dataToUpdate.fechaNacimiento === 'string') {
    if (!validarFormatoFecha(dataToUpdate.fechaNacimiento)) {
      const error = new Error('Formato de fecha inválido (debe ser DD/MM/YYYY)');
      (error as any).statusCode = 400;
      throw error;
    }
    const [, dayStr, monthStr, yearStr] = dataToUpdate.fechaNacimiento.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)!;
    dataToUpdate.fechaNacimiento = new Date(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
  }

  const updated = await prisma.socio.update({
    where: { dni },
    data: dataToUpdate,
  });

  return updated as GetSocioResponse;
}

export async function getSocioByDni(dni: number): Promise<{ id: number } | null> {
  return prisma.socio.findFirst({
    where: { dni },
    select: { id: true }
  });
}

// Obtener socio completo por id
export async function getSocioById(id: number): Promise<GetSocioResponse | null> {
  const socio = await prisma.socio.findUnique({
    where: { id },
      select: {
      id: true,
      nombre: true,
      apellido: true,
      email: true,
      fechaNacimiento: true,
      pais: true,
      sexo: true,
      fotoCarnet: true,
      dni: true,
      usuarioId: true
    }
  });

  return socio ?? null; 
}
