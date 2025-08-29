import prisma from "../config/prisma";
import { Clase, CreateClaseRequest, UpdateClaseRequest } from "../types/clase";

export async function getClasesByActividad(actividadId: number): Promise<Clase[]> {
  return prisma.clase.findMany({
    where: { actividadId },
    orderBy: { diaSemana: "asc" },
  });
}

export async function getClaseById(id: number): Promise<Clase> {
  const clase = await prisma.clase.findUnique({ where: { id } });
  if (!clase) throw new Error("Clase no encontrada");
  return clase;
}

export async function createClase(actividadId: number, data: CreateClaseRequest): Promise<Clase> {
  return prisma.clase.create({
    data: {
      ...data,
      actividadId,
      activo: data.activo ?? true,
    },
  });
}

export async function updateClase(id: number, data: UpdateClaseRequest): Promise<Clase> {
  return prisma.clase.update({
    where: { id },
    data,
  });
}

export async function deleteClase(id: number): Promise<void> {
  await prisma.clase.delete({ where: { id } });
}
