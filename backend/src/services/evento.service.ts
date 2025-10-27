import { Evento, CreateEventoRequest, UpdateEventoRequest, EventoResponse } from "../types/evento";
import prisma from "../config/prisma";
import { Entrada } from "../types/entradas";
import { FormaDePago } from "@prisma/client";

// Obtener todos los eventos
export async function getAllEventos(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
    include: {
      actividad: true,
      cancha: true,
      entradas: { include: { socio: true, evento: true } },
    },
    orderBy: { fecha: "asc" },
  });

  return eventos.map((evento: Evento) => {
    const entradas = evento.entradas ?? []; 

    const entradasVendidas = entradas.reduce(
      (sum: number, e) => sum + e.cantidad,
      0
    );

    const montoTotal = entradas.reduce(
      (sum: number, e) => sum + e.total,
      0
    );

    return {
      ...evento,
      entradasVendidas,
      montoTotal,
    };
  });
}





// Obtener evento por ID
export async function getEventoById(id: number): Promise<EventoResponse> {
  const eventoRaw = await prisma.evento.findUnique({
    where: { id },
    include: {
      actividad: true,  // 🔹 nuevo
      cancha: true,     // 🔹 nuevo
      entradas: { include: { socio: true, evento: true } },
    },
  });

  if (!eventoRaw) throw new Error("Evento no encontrado");

  return {
    evento: eventoRaw,
    message: "Evento encontrado",
  };
}

// Crear un evento
export async function createEvento(eventoData: CreateEventoRequest): Promise<EventoResponse> {
  const created = await prisma.evento.create({
    data: {
      nombre: eventoData.nombre,
      fecha: new Date(eventoData.fecha),
      horaInicio: eventoData.horaInicio,
      horaFin: eventoData.horaFin,
      capacidad: eventoData.capacidad,
      precioEntrada: eventoData.precioEntrada,
      actividadId: eventoData.actividadId, // 🔹 nuevo
      canchaId: eventoData.canchaId,       // 🔹 nuevo
      descripcion: eventoData.descripcion,
    },
    include: {
      actividad: true,
      cancha: true,
      entradas: { include: { socio: true, evento: true } },
    },
  });

  return {
    evento: created,
    message: "Evento creado correctamente",
  };
}

// Actualizar un evento
export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<EventoResponse> {
  try {
    const updated = await prisma.evento.update({
      where: { id },
      data: {
        nombre: updateData.nombre,
        fecha: updateData.fecha ? new Date(updateData.fecha) : undefined,
        horaInicio: updateData.horaInicio,
        horaFin: updateData.horaFin,
        capacidad: updateData.capacidad,
        precioEntrada: updateData.precioEntrada,
        actividadId: updateData.actividadId,
        canchaId: updateData.canchaId,
        descripcion: updateData.descripcion,
      },
      include: {
        actividad: true,
        cancha: true,
        entradas: { include: { socio: true, evento: true } },
      },
    });
    return {
      evento: updated,
      message: "Evento actualizado correctamente",
    };
  } catch (e: any) {
    if (e.code === "P2025") throw Object.assign(new Error("Evento no encontrado"), { statusCode: 404 });
    throw e;
  }
}

// Registrar venta de entradas (sin cambios)
export async function registrarVenta(
  eventoId: number,
  cantidad: number,
  formaDePago: FormaDePago,
  socioId?: number,
  comprobanteUrl?: string | null
): Promise<Entrada> {
  const eventoResp = await getEventoById(eventoId);
  const evento = eventoResp.evento;

  if (socioId) {
    const socioExiste = await prisma.socio.findUnique({ where: { id: socioId } });
    if (!socioExiste) throw new Error("El socioId proporcionado no existe");
  }

  const totalVendidas = await prisma.entrada.aggregate({
    _sum: { cantidad: true },
    where: { eventoId },
  });
  const entradasVendidas = totalVendidas._sum.cantidad || 0;

  if (entradasVendidas + cantidad > evento.capacidad) {
    throw new Error("No hay suficientes entradas disponibles");
  }

  if (formaDePago === "CBU" && !comprobanteUrl) {
    throw new Error("Debe adjuntar comprobante para pagos por transferencia");
  }

  const nuevaEntrada = await prisma.entrada.create({
    data: {
      eventoId,
      cantidad,
      precioUnitario: evento.precioEntrada,
      total: evento.precioEntrada * cantidad,
      fechaCompra: new Date(),
      formaDePago,
      comprobanteUrl: comprobanteUrl || null,
      ...(socioId && { socioId }),
    },
    include: { socio: true, evento: true },
  });

  return nuevaEntrada;
}

// Eliminar evento
export async function deleteEvento(id: number): Promise<void> {
  await prisma.evento.delete({ where: { id } });
}
