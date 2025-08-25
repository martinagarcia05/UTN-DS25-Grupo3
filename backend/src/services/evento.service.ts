// service/eventos.ts
import { Evento, CreateEventoRequest, UpdateEventoRequest } from "../types/evento";
import prisma from "../config/prisma";

// Obtener todos los eventos
export async function getAllEventos(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
    orderBy: { fecha: "asc" },
    include: { entradas: { include: { socio: true } } },
  });

  // Calcular entradasVendidas y montoTotal para cada evento
  return eventos.map(evento => ({
    ...evento,
    entradasVendidas: evento.entradas.reduce((acc, e) => acc + e.cantidad, 0),
    montoTotal: evento.entradas.reduce((acc, e) => acc + e.total, 0),
  }));
}

// Obtener un evento por ID
export async function getEventoById(id: number): Promise<Evento> {
  const evento = await prisma.evento.findUnique({
    where: { id },
    include: { entradas: { include: { socio: true } } },
  });

  if (!evento) throw Object.assign(new Error("Evento not found"), { statusCode: 404 });

  evento.entradasVendidas = evento.entradas.reduce((acc, e) => acc + e.cantidad, 0);
  evento.montoTotal = evento.entradas.reduce((acc, e) => acc + e.total, 0);

  return evento;
}

// Crear un evento
export async function createEvento(eventoData: CreateEventoRequest): Promise<Evento> {
  const created = await prisma.evento.create({
    data: {
      nombre: eventoData.nombre,
      fecha: new Date (eventoData.fecha),
      horaInicio: eventoData.horaInicio,
      horaFin: eventoData.horaFin,
      capacidad: eventoData.capacidad,
      precioEntrada: eventoData.precioEntrada,
      ubicacion: eventoData.ubicacion,
      descripcion: eventoData.descripcion,
      estado: "ACTIVO",
      createdAt: new Date(),
    },
    include: { entradas: { include: { socio: true } } },
  });

  created.entradasVendidas = 0;
  created.montoTotal = 0;

  return created;
}

// Actualizar un evento
export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<Evento> {
  try {
    const updated = await prisma.evento.update({
      where: { id },
      data: updateData,
      include: { entradas: { include: { socio: true } } },
    });

    updated.entradasVendidas = updated.entradas.reduce((acc, e) => acc + e.cantidad, 0);
    updated.montoTotal = updated.entradas.reduce((acc, e) => acc + e.total, 0);

    return updated;
  } catch (e: any) {
    if (e.code === "P2025") throw Object.assign(new Error("Evento not found"), { statusCode: 404 });
    throw e;
  }
}

export async function registrarVenta(
  id: number,
  cantidad: number,
  socioId: number
): Promise<Evento> {
  const evento = await getEventoById(id);
  
  if (evento.entradasVendidas + cantidad > evento.capacidad) {
    throw Object.assign(new Error("No hay suficiente capacidad para esta venta"), { statusCode: 400 });
  }

  const nuevaEntrada = await prisma.entrada.create({
    data: {
      eventoId: id,
      cantidad,
      precioUnitario: evento.precioEntrada,
      total: cantidad * evento.precioEntrada,
      estado: "ACTIVA",
      fechaCompra: new Date(),
      socioId,
      ubicacion: evento.ubicacion

    },
    include: { socio: true },
  });

  return getEventoById(id);
}

// Eliminar un evento
export async function deleteEvento(id: number): Promise<void> {
  await prisma.evento.delete({ where: { id } });
}
