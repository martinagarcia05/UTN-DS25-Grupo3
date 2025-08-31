import { ClaseSocio } from "../types/claseSocio";
import prisma from "../config/prisma";

export async function getAllClaseSocio(): Promise<ClaseSocio[]> {
  const registros = await prisma.claseSocio.findMany({
    include: { clase: true, socio: true },
  });

  return registros;
}

export async function getClaseSocioById(id: number): Promise<ClaseSocio> {
  const registro = await prisma.claseSocio.findUnique({
    where: { id },
    include: { clase: true, socio: true },
  });

  if (!registro) {
    const error = new Error("Registro no encontrado");
    (error as any).statusCode = 404;
    throw error;
  }
  return registro;
}

export async function createClaseSocio(data: Omit<ClaseSocio, "id">): Promise<ClaseSocio> {
  const created = await prisma.claseSocio.create({
    data,
    include: { clase: true, socio: true },
  });

  return created;
}

export async function deleteClaseSocio(id: number): Promise<void> {
  await prisma.claseSocio.delete({ where: { id } });
}
