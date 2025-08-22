import { Evento, CreateEventoRequest, UpdateEventoRequest } from "../types/evento";
import { Entrada } from "../types/entradas";
import prisma from "../config/prisma";

// Calcular entradas vendidas
function calcularEntradasVendidas(evento: { entradas: Entrada[] }): number {
  return evento.entradas.reduce((total, e) => total + e.cantidad, 0);
}

// Obtener todos los eventos
export async function getAllEvento(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
    orderBy: { id: "asc" },
    include: { entradas: { include: { socio: true } } },
  });

  return eventos.map((evento) => ({
    ...evento,
    entradasVendidas: calcularEntradasVendidas(evento),
  }));
}

// Obtener un evento por ID
export async function getEventoById(id: number): Promise<Evento> {
  const evento = await prisma.evento.findUnique({
    where: { id },
    include: { entradas: { include: { socio: true } } },
  });

  if (!evento) {
    const error = new Error("Evento not found");
    (error as any).statusCode = 404;
    throw error;
  }

  return {
    ...evento,
    entradasVendidas: calcularEntradasVendidas(evento),
  };
}

// Crear un nuevo evento
export async function createEvento(eventoData: CreateEventoRequest): Promise<Evento> {
  const created = await prisma.evento.create({
    data: {
      nombre: eventoData.nombre,
      fecha: new Date(eventoData.fecha),
      horaInicio: eventoData.horaInicio,
      horaFin: eventoData.horaFin,
      capacidad: eventoData.capacidad,
      precioEntrada: eventoData.precioEntrada,
      descripcion: eventoData.descripcion,
      ubicacion: eventoData.ubicacion,
      estado: "activo",
      montoTotal: 0,
      createdAt: new Date(),
    },
    include: { entradas: true }, // ya no necesitamos mapear socios aquí
  });

  return {
    ...created,
    entradasVendidas: 0,
  };
}

// Actualizar un evento
export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<Evento> {
  try {
    const updated = await prisma.evento.update({
      where: { id },
      data: {
        ...(updateData.nombre !== undefined ? { nombre: updateData.nombre } : {}),
        ...(updateData.fecha !== undefined ? { fecha: new Date(updateData.fecha) } : {}),
        ...(updateData.horaInicio !== undefined ? { horaInicio: updateData.horaInicio } : {}),
        ...(updateData.horaFin !== undefined ? { horaFin: updateData.horaFin } : {}),
        ...(updateData.capacidad !== undefined ? { capacidad: updateData.capacidad } : {}),
        ...(updateData.precioEntrada !== undefined ? { precioEntrada: updateData.precioEntrada } : {}),
        ...(updateData.descripcion !== undefined ? { descripcion: updateData.descripcion } : {}),
        ...(updateData.ubicacion !== undefined ? { ubicacion: updateData.ubicacion } : {}),
      },
      include: { entradas: true },
    });

    return {
      ...updated,
      entradasVendidas: calcularEntradasVendidas(updated),
    };
  } catch (e: any) {
    if (e.code === "P2025") {
      const error = new Error("Evento not found");
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}

// Eliminar evento
export async function deleteEvento(id: number): Promise<void> {
  await prisma.evento.delete({ where: { id } });
}
