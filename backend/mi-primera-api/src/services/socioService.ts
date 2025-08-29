import { GetSocioResponse } from '../types/Socio';  
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
interface ActualizarSocioRequest {
  fechaNacimiento?: string;
  [key: string]: any;
}

interface Socio {
  id: number;
  [key: string]: any;
}
const socios: Socio[] = [];


const isValidDateFormat = (date: string): boolean => {  //funcion que valida la fecha 
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;  //compruebo el formato
  if (!regex.test(date)) return false;  
  const [, day, month, year] = date.match(regex)!.map(Number);  
  const dateObj = new Date(year, month - 1, day);  
  return dateObj.getDate() === day && dateObj.getMonth() === month - 1 && dateObj.getFullYear() === year;  
};

export async function updateSocio(id: number, updateData: ActualizarSocioRequest): Promise<Socio> {  // funcion para actualizar un socio usando la interface actualizarSocioRequest
  const socioIndex = socios.findIndex(s => s.id === id); 
  if (socioIndex === -1) {  
    const error = new Error('Socio no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  if (updateData.fechaNacimiento && !isValidDateFormat(updateData.fechaNacimiento)) {  // si esta mal la fecha, da error 400
    const error = new Error('Formato de fecha inválido');
    (error as any).statusCode = 400;
    throw error;
  }
  socios[socioIndex] = { ...socios[socioIndex], ...updateData };  // Actualiza el socio mezclando datos existentes con nuevos
  return socios[socioIndex];  // devuelve el socio actualizado
}

export async function updateSocioByDni(dni: number, datos: ActualizarSocioRequest) {
  return prisma.socio.update({
    where: { dni },
    data: datos,
  });
}

