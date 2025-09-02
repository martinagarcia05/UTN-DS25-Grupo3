import { Entrada, CreateEntradaRequest, UpdateEntradaRequest } from "../types/entradas";
import prisma from "../config/prisma";
import { getEventoById } from "./evento.service";

// Obtener todas las entradas
export async function getAllEntradas(): Promise<Entrada[]> {
  return prisma.entrada.findMany({
    orderBy: { id: "asc" },
    include: { socio: true, evento: true },
  });
}

// Obtener una entrada por ID
export async function getEntradaById(id: number): Promise<Entrada> {
  const entrada = await prisma.entrada.findUnique({
    where: { id },
    include: { socio: true, evento: true },
  });

  if (!entrada) {
    throw Object.assign(new Error("Entrada not found"), { statusCode: 404 });
  }

  return entrada;
}

// Crear una entrada
export async function createEntrada(entradaData: CreateEntradaRequest): Promise<Entrada> {
  const eventoResp = await getEventoById(entradaData.eventoId);
  const evento = eventoResp.evento;

  const entradasVendidas = evento.entradas.reduce((sum, e) => sum + e.cantidad, 0);

  if (entradasVendidas + entradaData.cantidad > evento.capacidad) {
    throw new Error("No hay suficientes entradas disponibles");
  }

  const total = entradaData.cantidad * evento.precioEntrada;

  return prisma.entrada.create({
    data: {
      eventoId: entradaData.eventoId,
      cantidad: entradaData.cantidad,
      precioUnitario: evento.precioEntrada,
      total,
      fechaCompra: new Date(),
      socioId: entradaData.socioId,
      formaDePago: entradaData.formaDePago,
      comprobanteUrl: entradaData.comprobanteUrl,
      createdAt: new Date(),
    },
    include: { socio: true, evento: true },
  });
}

// Actualizar una entrada
export async function updateEntrada(
  id: number,
  updateData: UpdateEntradaRequest
): Promise<Entrada> {
  try {
    return prisma.entrada.update({
      where: { id },
      data: updateData,
      include: { socio: true, evento: true },
    });
  } catch (e: any) {
    if (e.code === "P2025") {
      throw Object.assign(new Error("Entrada not found"), { statusCode: 404 });
    }
    throw e;
  }
}

// Eliminar una entrada
export async function deleteEntrada(id: number): Promise<void> {
  await prisma.entrada.delete({ where: { id } });
}

// Obtener entradas por ID de socio
export async function getEntradasBySocioId(socioId: number): Promise<Entrada[]> {
  return prisma.entrada.findMany({
    where: { socioId },
    orderBy: { id: "asc" },
    include: { socio: true, evento: true },
  });
}
