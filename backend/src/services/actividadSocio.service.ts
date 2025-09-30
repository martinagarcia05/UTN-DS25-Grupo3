import prisma from "../config/prisma";
import { ActividadSocio } from "../types/ActividadSocio";
import { Profesor } from "../types/profesor";
import { Actividad } from "../types/actividad";
import { CreateActividadSocioRequest, UpdateActividadSocioRequest } from "../types/ActividadSocio";


// Función para mapear actividadSocio
function mapActividadSocioPrisma(as: any): ActividadSocio {
  return {
    id: as.id,
    actividadId: as.actividadId,
    socioId: as.socioId,
    actividad: as.actividad ? {
        id: as.actividad.id,
        nombre: as.actividad.nombre,
        monto: as.actividad.monto,
        activo: as.actividad.activo,
        createdAt: as.actividad.createdAt ?? new Date(),  
      }
    : undefined, 
    socio: as.Socio
      ? {
          id: as.Socio.id,
          nombre: as.Socio.nombre,
          apellido: as.Socio.apellido,
          email: as.Socio.email,
          fechaNacimiento: as.Socio.fechaNacimiento,
          pais: as.Socio.pais,
          sexo: as.Socio.sexo,
          fotoCarnet: as.Socio.fotoCarnet,
          dni: as.Socio.dni,
          usuarioId: as.Socio.usuarioId,
        }
      : undefined,
  };
}

// Obtener todos
export async function getAllActividadSocio(): Promise<ActividadSocio[]> {
  const registros = await prisma.actividadSocio.findMany({
    include: {
      actividad: true,
      Socio: true,
    },
  });

  return registros.map(mapActividadSocioPrisma);
}

// Obtener socios por actividad
export async function getSociosPorActividad(actividadId: number): Promise<ActividadSocio[]> {
  const registros = await prisma.actividadSocio.findMany({
    where: { actividadId },
    include: {
      Socio: true,
      actividad: true,
    },
  });
  return registros.map(mapActividadSocioPrisma);
}

export async function getActividadesPorSocio(socioId: number): Promise<Actividad[]> {
  const registros = await prisma.actividadSocio.findMany({
    where: { socioId },
    include: {
      actividad: true,
    },
  });
  
  return registros
    .filter(registro => registro.actividad) // Filtrar registros sin actividad
    .map(registro => ({
      id: registro.actividad!.id,
      nombre: registro.actividad!.nombre,
      monto: registro.actividad!.monto,
      activo: registro.actividad!.activo,
      createdAt: registro.actividad!.createdAt ?? new Date(), // Manejar posible null
    }));
}   

// Obtener por ID
export async function getActividadSocioById(id: number): Promise<ActividadSocio> {
  const registro = await prisma.actividadSocio.findUnique({
    where: { id },
    include: {
      actividad: true,
      Socio: true,
    },
  });

  if (!registro) throw new Error("Registro no encontrado");
  return mapActividadSocioPrisma(registro);
}

// Crear
export async function createActividadSocio(data: CreateActividadSocioRequest): Promise<ActividadSocio> {
  const created = await prisma.actividadSocio.create({
    data: {
      actividadId: data.actividadId,
      socioId: data.socioId,
    },
    include: { actividad: true, Socio: true },
  });

  return mapActividadSocioPrisma(created);
}

// Actualizar
export async function updateActividadSocio(id: number, data: UpdateActividadSocioRequest): Promise<ActividadSocio> {
  const updated = await prisma.actividadSocio.update({
    where: { id },
    data: {
      ...(data.actividadId !== undefined ? { actividadId: data.actividadId } : {}),
      ...(data.socioId !== undefined ? { socioId: data.socioId } : {}),
    },
    include: { actividad: true, Socio: true },
  });

  return mapActividadSocioPrisma(updated);
}

// Eliminar
export async function deleteActividadSocio(id: number): Promise<void> {
  await prisma.actividadSocio.delete({ where: { id } });
}
