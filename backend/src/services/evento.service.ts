import { Evento, CreateEventoRequest, UpdateEventoRequest, EventoResponse } from "../types/evento";
import prisma from "../config/prisma";
import { Entrada, CreateEntradaRequest } from "../types/entradas"
import { FormaDePago } from "../../generated/prisma";


export async function getAllEventos(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
    include: { entradas: { include: { socio: true } } },
    orderBy: { fecha: "asc" },
  });

  const eventosMapped: Evento[] = eventos.map((evento: Evento) => {
    const entradasVendidas = evento.entradas.reduce((sum, e) => sum + e.cantidad, 0);
    const montoTotal = evento.entradas.reduce((sum, e) => sum + e.total, 0);

    return {
      ...evento,
      entradas: evento.entradas.map(entrada => ({
        ...entrada,
        evento: { ...evento, entradas: [] },
      })),
      entradasVendidas,
      montoTotal,
    };
  });

  return eventosMapped;
}

export async function getEventoById(id: number): Promise<EventoResponse> {
  const eventoId = Number(id);
  if (isNaN(eventoId)) throw new Error('ID inválido');

  const eventoRaw = await prisma.evento.findUnique({
    where: { id: eventoId },
    include: {
      entradas: {
        include: {
          socio: true, // para obtener datos del socio
        },
      },
    },
  });

  if (!eventoRaw) {
    throw new Error('Evento no encontrado');
  }

  const entradas: Entrada[] = eventoRaw.entradas.map((e:any) => ({
    id: e.id,
    eventoId: e.eventoId,
    socioId: e.socioId,
    cantidad: e.cantidad,
    precioUnitario: e.precioUnitario,
    total: e.total,
    formaDePago: e.formaDePago,
    comprobanteUrl: e.comprobanteUrl || null,
    createdAt: e.createdAt,
    fechaCompra: e.fechaCompra, // <-- agregado
    socio: e.socio, // puede ser null
    evento: {
      id: eventoRaw.id,
      nombre: eventoRaw.nombre,
      fecha: eventoRaw.fecha,
      horaInicio: eventoRaw.horaInicio,
      horaFin: eventoRaw.horaFin,
      capacidad: eventoRaw.capacidad,
      precioEntrada: eventoRaw.precioEntrada,
      ubicacion: eventoRaw.ubicacion,
      descripcion: eventoRaw.descripcion,
      createdAt: eventoRaw.createdAt,
    },
  }));
  

  const evento: EventoResponse = {
    evento: {
      id: eventoRaw.id,
      nombre: eventoRaw.nombre,
      fecha: eventoRaw.fecha,
      horaInicio: eventoRaw.horaInicio,
      horaFin: eventoRaw.horaFin,
      capacidad: eventoRaw.capacidad,
      precioEntrada: eventoRaw.precioEntrada,
      ubicacion: eventoRaw.ubicacion,
      descripcion: eventoRaw.descripcion,
      createdAt: eventoRaw.createdAt,
      entradas, // agregamos las entradas correctamente tipadas
    },
    message: 'Evento encontrado',
  };

  return evento;
}


// Crear un evento
export async function createEvento(
  eventoData: CreateEventoRequest
): Promise<EventoResponse> {
  
  const created = await prisma.evento.create({
    data: {
      nombre: eventoData.nombre,
      fecha: new Date(eventoData.fecha),
      horaInicio: eventoData.horaInicio,
      horaFin: eventoData.horaFin,
      capacidad: eventoData.capacidad,
      precioEntrada: eventoData.precioEntrada,
      ubicacion: eventoData.ubicacion,
      descripcion: eventoData.descripcion,
    },
    include: { entradas: { include: { socio: true } } },
  });

  // Mapear entradas para que respeten tu type
  const entradasMapped = created.entradas.map((e: Entrada) => ({
    ...e,
    comprobanteUrl: e.comprobanteUrl ?? undefined,
    formaDepago: e.formaDePago, // renombramos
    evento: {
      id: created.id,
      nombre: created.nombre,
      fecha: created.fecha,
      horaInicio: created.horaInicio,
      horaFin: created.horaFin,
      capacidad: created.capacidad,
      precioEntrada: created.precioEntrada,
      ubicacion: created.ubicacion,
      descripcion: created.descripcion,
      entradas: [], 
      createdAt: created.createdAt,
    },
  }));

  const response: EventoResponse = {
    evento: { ...created, entradas: entradasMapped },
    message: "Evento created successfully",
  };

  return response;
}


// Actualizar un evento
export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<EventoResponse> {
  try {
    const updated = await prisma.evento.update({
      where: { id },
      data: updateData,
      include: {
        entradas: {
          include: {
            socio: true,
            evento: true, 
          },
        },
      },
    });

    return {
      evento: updated,
      message: "Evento actualizado correctamente",
    };
  } catch (e: any) {
    if (e.code === "P2025") {
      throw Object.assign(new Error("Evento no encontrado"), { statusCode: 404 });
    }
    throw e;
  }
}

// Registrar una venta de entradas
export async function registrarVenta(
  eventoId: number,
  cantidad: number,
  formaDePago: FormaDePago,
  socioId?: number,
  comprobanteUrl?: string
): Promise<Entrada> {
  // Obtener el evento
  const eventoResp = await getEventoById(eventoId);
  const evento = eventoResp.evento; // ahora es tipo Evento

  // Calcular entradas vendidas actuales
  const totalVendidas = await prisma.entrada.aggregate({
    _sum: {
      cantidad: true,
    },
    where: {
      eventoId: Number(evento.id), // <-- convertir a número
    },
  });
  
  const entradasVendidas = totalVendidas._sum.cantidad || 0;

  // Verificar disponibilidad
  if (entradasVendidas + cantidad > evento.capacidad) {
    throw new Error("No hay suficientes entradas disponibles");
  }

  if (formaDePago === "CBU" && !comprobanteUrl) {
    throw new Error("Debe adjuntar comprobante para pagos por transferencia.");
  }

  // Crear la entrada
  const nuevaEntrada = await prisma.entrada.create({
    data: {
      eventoId: Number(evento.id),       // convertir a número
      cantidad: Number(cantidad),        // convertir a número
      precioUnitario: evento.precioEntrada,    // ya es number
      total: evento.precioEntrada * Number(cantidad),
      fechaCompra: new Date(),           // fecha actual
      formaDePago: formaDePago,          // string válido
      comprobanteUrl: comprobanteUrl || null,
      ...(socioId && { socioId: Number(socioId) })
    },
    include: {
      socio: true,
      evento: true
    }
  });
  return nuevaEntrada;
}

// Eliminar un evento
export async function deleteEvento(id: number): Promise<void> {
  await prisma.evento.delete({ where: { id } });
}
