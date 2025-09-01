<<<<<<< HEAD
// service/eventos.ts
import { Evento, CreateEventoRequest, UpdateEventoRequest } from "../types/evento";
import prisma from "../config/prisma";
=======
import { Evento, CreateEventoRequest, UpdateEventoRequest, EventoResponse } from "../types/evento";
import prisma from "../config/prisma";
import { Entrada } from "../types/entradas";
import { FormaDePago } from "../generated/prisma";
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

// Obtener todos los eventos
export async function getAllEventos(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
<<<<<<< HEAD
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
=======
    include: { entradas: { include: { socio: true, evento:true } } },
    orderBy: { fecha: "asc" },
  });

  return eventos.map(evento => {
    const entradasVendidas = evento.entradas.reduce((sum, e) => sum + e.cantidad, 0);
    const montoTotal = evento.entradas.reduce((sum, e) => sum + e.total, 0);

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
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
      horaInicio: eventoData.horaInicio,
      horaFin: eventoData.horaFin,
      capacidad: eventoData.capacidad,
      precioEntrada: eventoData.precioEntrada,
      ubicacion: eventoData.ubicacion,
      descripcion: eventoData.descripcion,
<<<<<<< HEAD
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
=======
    },
    include: { entradas: { include: { socio: true, evento:true } } },
  });

  return {
    evento: created,
    message: "Evento creado correctamente",
  };
}

// Actualizar un evento
export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<EventoResponse> {
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
  try {
    const updated = await prisma.evento.update({
      where: { id },
      data: updateData,
<<<<<<< HEAD
      include: { entradas: { include: { socio: true } } },
    });

    updated.entradasVendidas = updated.entradas.reduce((acc, e) => acc + e.cantidad, 0);
    updated.montoTotal = updated.entradas.reduce((acc, e) => acc + e.total, 0);

    return updated;
  } catch (e: any) {
    if (e.code === "P2025") throw Object.assign(new Error("Evento not found"), { statusCode: 404 });
=======
      include: { entradas: { include: { socio: true, evento: true } } },
    });
    return {
      evento: updated,
      message: "Evento actualizado correctamente",
    };
  } catch (e: any) {
    if (e.code === "P2025") throw Object.assign(new Error("Evento no encontrado"), { statusCode: 404 });
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    throw e;
  }
}

<<<<<<< HEAD
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
=======
// Registrar venta de entradas
export async function registrarVenta(
  eventoId: number,
  cantidad: number,
  formaDePago: FormaDePago,
  socioId?: number,
  comprobanteUrl?: string
): Promise<Entrada> {
  // Obtener el evento (ya validado que existe)
  const eventoResp = await getEventoById(eventoId);
  const evento = eventoResp.evento;

  // Validación de negocio: socio existente
  if (socioId) {
    const socioExiste = await prisma.socio.findUnique({ where: { id: socioId } });
    if (!socioExiste) throw new Error("El socioId proporcionado no existe");
  }

  // Calcular entradas vendidas
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

  // Crear la entrada
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
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
export async function deleteEvento(id: number): Promise<void> {
  await prisma.evento.delete({ where: { id } });
}
