import { Evento, CreateEventoRequest, UpdateEventoRequest, EventoResponse } from "../types/evento";
import prisma from "../config/prisma";
<<<<<<< HEAD
import { Entrada, CreateEntradaRequest } from "../types/entradas"
import { FormaDePago } from "../../../../generated/prisma";


export async function getAllEventos(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
    include: { entradas: { include: { socio: true } } },
    orderBy: { fecha: "asc" },
  });

  const eventosMapped: Evento[] = eventos.map((evento: Evento) => {
=======
import { Entrada } from "../types/entradas";
import { FormaDePago } from "../generated/prisma";

// Obtener todos los eventos
export async function getAllEventos(): Promise<Evento[]> {
  const eventos = await prisma.evento.findMany({
    include: { entradas: { include: { socio: true, evento:true } } },
    orderBy: { fecha: "asc" },
  });

  return eventos.map(evento => {
>>>>>>> develop
    const entradasVendidas = evento.entradas.reduce((sum, e) => sum + e.cantidad, 0);
    const montoTotal = evento.entradas.reduce((sum, e) => sum + e.total, 0);

    return {
      ...evento,
<<<<<<< HEAD
      entradas: evento.entradas.map(entrada => ({
        ...entrada,
        evento: { ...evento, entradas: [] },
      })),
=======
>>>>>>> develop
      entradasVendidas,
      montoTotal,
    };
  });
<<<<<<< HEAD

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
  
=======
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
>>>>>>> develop
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
<<<<<<< HEAD
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


=======
    include: { entradas: { include: { socio: true, evento:true } } },
  });

  return {
    evento: created,
    message: "Evento creado correctamente",
  };
}

>>>>>>> develop
// Actualizar un evento
export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<EventoResponse> {
  try {
    const updated = await prisma.evento.update({
      where: { id },
      data: updateData,
<<<<<<< HEAD
      include: {
        entradas: {
          include: {
            socio: true,
            evento: true, 
          },
        },
      },
    });

=======
      include: { entradas: { include: { socio: true, evento: true } } },
    });
>>>>>>> develop
    return {
      evento: updated,
      message: "Evento actualizado correctamente",
    };
  } catch (e: any) {
<<<<<<< HEAD
    if (e.code === "P2025") {
      throw Object.assign(new Error("Evento no encontrado"), { statusCode: 404 });
    }
=======
    if (e.code === "P2025") throw Object.assign(new Error("Evento no encontrado"), { statusCode: 404 });
>>>>>>> develop
    throw e;
  }
}

<<<<<<< HEAD
// Registrar una venta de entradas
=======
// Registrar venta de entradas
>>>>>>> develop
export async function registrarVenta(
  eventoId: number,
  cantidad: number,
  formaDePago: FormaDePago,
  socioId?: number,
  comprobanteUrl?: string
): Promise<Entrada> {
<<<<<<< HEAD
  // Obtener el evento
  const eventoResp = await getEventoById(eventoId);
  const evento = eventoResp.evento; // ahora es tipo Evento

  if (socioId) {
    const socioExiste = await prisma.socio.findUnique({ where: { id: Number(socioId) } });
    if (!socioExiste) {
      throw new Error("El socioId proporcionado no existe");
    }
  }
  
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
=======
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

>>>>>>> develop
  if (entradasVendidas + cantidad > evento.capacidad) {
    throw new Error("No hay suficientes entradas disponibles");
  }

  if (formaDePago === "CBU" && !comprobanteUrl) {
<<<<<<< HEAD
    throw new Error("Debe adjuntar comprobante para pagos por transferencia.");
=======
    throw new Error("Debe adjuntar comprobante para pagos por transferencia");
>>>>>>> develop
  }

  // Crear la entrada
  const nuevaEntrada = await prisma.entrada.create({
    data: {
<<<<<<< HEAD
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
=======
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
>>>>>>> develop
export async function deleteEvento(id: number): Promise<void> {
  await prisma.evento.delete({ where: { id } });
}
