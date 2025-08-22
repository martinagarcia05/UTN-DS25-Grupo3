import { Entrada, CreateEntradaRequest, UpdateEntradaRequest } from "../types/entradas";
import prisma from "../config/prisma";

// Obtener todas las entradas
export async function getAllEntradas(): Promise<Entrada[]> {
  const entradas = await prisma.entrada.findMany({
    orderBy: { id: "asc" },
    include: { socio: true }, // trae los socios
  });

  return entradas; 
}

// Obtener una entrada por ID
export async function getEntradaById(id: number): Promise<Entrada> {
  const entrada = await prisma.entrada.findUnique({
    where: { id },
    include: { socio: true },
  });

  if (!entrada) {
    const error = new Error("Entrada not found");
    (error as any).statusCode = 404;
    throw error;
  }

  return entrada; 
}

// Crear una entrada nueva
export async function createEntrada(entradaData: CreateEntradaRequest): Promise<Entrada> {
  const created = await prisma.entrada.create({
    data: {
      eventoId: entradaData.eventoId,
      cantidad: entradaData.cantidad,
      precioUnitario: entradaData.precioUnitario ?? 0,
      total: entradaData.total ?? (entradaData.cantidad * (entradaData.precioUnitario ?? 0)),
      estado: entradaData.estado ?? "ACTIVA",
      fechaCompra: entradaData.fechaCompra ?? new Date(),
      socioId: entradaData.socio.id,
      createdAt: new Date(),
    },
    include: { socio: true },
  });

  return created;
}

// Actualizar una entrada
export async function updateEntrada(id: number, updateData: UpdateEntradaRequest): Promise<Entrada> {
  try {
    const updated = await prisma.entrada.update({
      where: { id },
      data: {
        ...(updateData.eventoId !== undefined ? { eventoId: updateData.eventoId } : {}),
        ...(updateData.cantidad !== undefined ? { cantidad: updateData.cantidad } : {}),
        ...(updateData.precioUnitario !== undefined ? { precioUnitario: updateData.precioUnitario } : {}),
        ...(updateData.total !== undefined ? { total: updateData.total } : {}),
        ...(updateData.estado !== undefined ? { estado: updateData.estado } : {}),
        ...(updateData.fechaCompra !== undefined ? { fechaCompra: updateData.fechaCompra } : {}),
        ...(updateData.socio !== undefined ? { socioId: updateData.socio.id } : {}),
      },
      include: { socio: true },
    });

    return updated;
  } catch (e: any) {
    if (e.code === "P2025") {
      const error = new Error("Entrada not found");
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

// Eliminar una entrada
export async function deleteEntrada(id: number): Promise<void> {
  await prisma.entrada.delete({ where: { id } });
}
