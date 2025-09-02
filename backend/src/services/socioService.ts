import { ActualizarSocioRequest, GetSocioResponse } from '../types/Socio';  
import prisma from '../config/prisma';  

export async function getSocioByDni(dni: number): Promise<{ id: number } | null> {
  return prisma.socio.findFirst({
    where: { dni },
    select: {
      id: true,
    }
  });
}


// de la funcion de lu, obtengo los datos del socio que coincida con el dni
export async function getSocioCompletoByDni(dni: number): Promise<GetSocioResponse | null> {
  const socioIdResult = await getSocioByDni(dni);
  if (!socioIdResult) {
    return null;  // deberia devolver 404
  }
  return prisma.socio.findUnique({
    where: { id: socioIdResult.id },
    select: {
      id: true,
      nombre: true,
      apellido: true,
      dni: true,
      email: true,
      fechaNacimiento: true,
      pais: true,
      sexo: true,
      fotoCarnet: true,
      usuarioId: true,
    }
  });
}


// let socios: Socio[] = [  //simulo la base de datos
//   { id: 1, nombre: 'Mili', apellido: 'Crespo', dni: '12345678', email: 'mili@crespo.com', fechaNacimiento: '15/05/1990', pais: 'Argentina', sexo: 'femenino', fotoCarnet: '/uploads/mili.jpg' }
// ];

// const isValidDateFormat = (date: string): boolean => {  //funcion que valida la fecha 
//   const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;  //compruebo el formato
//   if (!regex.test(date)) return false;  
//   const [, day, month, year] = date.match(regex)!.map(Number);  
//   const dateObj = new Date(year, month - 1, day);  
//   return dateObj.getDate() === day && dateObj.getMonth() === month - 1 && dateObj.getFullYear() === year;  
// };

// export async function updateSocio(id: number, updateData: ActualizarSocioRequest): Promise<Socio> {  // funcion para actualizar un socio usando la interface actualizarSocioRequest
//   const socioIndex = socios.findIndex(s => s.id === id); 
//   if (socioIndex === -1) {  
//     const error = new Error('Socio no encontrado');
//     (error as any).statusCode = 404;
//     throw error;
//   }
//   if (updateData.fechaNacimiento && !isValidDateFormat(updateData.fechaNacimiento)) {  // si esta mal la fecha, da error 400
//     const error = new Error('Formato de fecha inválido');
//     (error as any).statusCode = 400;
//     throw error;
//   }
//   socios[socioIndex] = { ...socios[socioIndex], ...updateData };  // Actualiza el socio mezclando datos existentes con nuevos
//   return socios[socioIndex];  // devuelve el socio actualizado
// }

