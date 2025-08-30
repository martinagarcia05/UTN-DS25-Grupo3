import prisma from "../config/prisma";
import { Actividad, CreateActividadRequest, UpdateActividadRequest } from "../types/actividad";
import { Clase } from "../types/clase";

//agregado porque sino tiraba error 
function mapClasePrismaToClase(clase: any): Clase {
  return {
    id: clase.id,
    diaSemana: clase.diaSemana,
    horaInicio: clase.horaInicio,
    horaFin: clase.horaFin,
    activo: clase.activo,
    actividadId: clase.actividadId,
    profesorId: clase.profesorId ?? undefined,
    createdAt: clase.createdAt,
    profesor: clase.profesor ? { 
      id: clase.profesor.id,
      nombre: clase.profesor.nombre,
      apellido: clase.profesor.apellido,
      email: clase.profesor.email,
      activo: clase.profesor.activo,
      createdAt: clase.profesor.createdAt
    } : undefined,
  };
}

function mapActividadPrismaToActividad(actividad: any): Actividad {
  return {
    id: actividad.id,
    nombre: actividad.nombre,
    monto: actividad.monto,
    activo: actividad.activo,
    createdAt: actividad.createdAt,
    clases: actividad.clases?.map(mapClasePrismaToClase) ?? [],
  };
}

export async function getAllActividades(): Promise<Actividad[]> {
  const actividades = await prisma.actividad.findMany({
    orderBy: { createdAt: "desc" },
    include: { clases: { include: { profesor: true } } },
  });
  return actividades.map(mapActividadPrismaToActividad);
}

export async function getActividadById(id: number): Promise<Actividad> {
  const actividad = await prisma.actividad.findUnique({
    where: { id },
    include: { clases: { include: { profesor: true } } },
  });
  if (!actividad) throw new Error("Actividad no encontrada");
  return mapActividadPrismaToActividad(actividad);
}

export async function createActividad(data: CreateActividadRequest): Promise<Actividad> {
  const actividad = await prisma.actividad.create({ data });
  return mapActividadPrismaToActividad({ ...actividad, clases: [] });
}

export async function updateActividad(id: number, data: UpdateActividadRequest): Promise<Actividad> {
  const actividad = await prisma.actividad.update({
    where: { id },
    data,
    include: { clases: { include: { profesor: true } } },
  });
  return mapActividadPrismaToActividad(actividad);
}

export async function deleteActividad(id: number): Promise<void> {
  await prisma.actividad.delete({ where: { id } });
}
