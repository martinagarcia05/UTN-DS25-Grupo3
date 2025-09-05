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

export async function deleteSocioByDni(dni: number) {
  try {
    const socioEliminado = await prisma.socio.delete({
      where: {
        dni: dni,
      },
    });
    return socioEliminado;
  } catch (error) {
    console.error(`Error al eliminar socio con DNI ${dni}:`, error);
    throw new Error('No se pudo eliminar el socio o no fue encontrado.');
  }
}
