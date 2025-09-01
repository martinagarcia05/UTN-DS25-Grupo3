import prisma from "../config/prisma";
import { Actividad, CreateActividadRequest, UpdateActividadRequest } from "../types/actividad";

export async function getAllActividades(): Promise<Actividad[]> {
  return prisma.actividad.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getActividadById(id: number): Promise<Actividad> {
  const actividad = await prisma.actividad.findUnique({ where: { id } });
  if (!actividad) throw new Error("Actividad no encontrada");
  return actividad;
}

export async function createActividad(data: CreateActividadRequest): Promise<Actividad> {
  return prisma.actividad.create({
    data: {
      nombre: data.nombre,
      monto: data.monto,
      activo: data.activo ?? true,
    },
  });
}

export async function updateActividad(id: number, data: UpdateActividadRequest): Promise<Actividad> {
  return prisma.actividad.update({
    where: { id },
    data,
  });
}

export async function deleteActividad(id: number): Promise<void> {
  await prisma.actividad.delete({ where: { id } });
}
