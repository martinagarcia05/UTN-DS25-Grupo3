"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEventos = getAllEventos;
exports.getEventoById = getEventoById;
exports.createEvento = createEvento;
exports.updateEvento = updateEvento;
exports.registrarVenta = registrarVenta;
exports.deleteEvento = deleteEvento;
// service/eventos.ts
const evento_1 = require("../types/evento");
const prisma_1 = __importDefault(require("../config/prisma"));
// Obtener todos los eventos
async function getAllEventos() {
    const eventos = await prisma_1.default.evento.findMany({
        orderBy: { fecha: "asc" },
        include: { entradas: { include: { socio: true } } },
    });
    const eventosMapped= eventos.map(evento => {
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
// Obtener un evento por ID
async function getEventoById(id) {
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

  const entradas = eventoRaw.entradas.map(e => ({
    id: e.id,
    eventoId: e.eventoId,
    socioId: e.socioId,
    cantidad: e.cantidad,
    precioUnitario: e.precioUnitario,
    total: e.total,
    formaDePago: e.formaDePago,
    comprobanteUrl: e.comprobanteUrl || null,
    createdAt: e.createdAt,
    fechaCompra: e.fechaCompra, 
    socio: e.socio,
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
  

  const evento = {
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
async function createEvento(eventoData) {
    const created = await prisma_1.default.evento.create({
        data: {
            nombre: eventoData.nombre,
            fecha: new Date(eventoData.fecha),
            horaInicio: eventoData.horaInicio,
            horaFin: eventoData.horaFin,
            capacidad: eventoData.capacidad,
            precioEntrada: eventoData.precioEntrada,
            ubicacion: eventoData.ubicacion,
            descripcion: eventoData.descripcion,
            createdAt: new Date(),
        },
        include: { entradas: { include: { socio: true } } },
    });
      const entradasMapped = created.entradas.map((e) => ({
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
    const response = {
        evento: { ...created, entradas: entradasMapped },
        message: "Evento created successfully",
      };
    
    return response;
}

// Actualizar un evento
async function updateEvento(id, updateData) {
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
      } catch (e) {
        if (e.code === "P2025") {
          throw Object.assign(new Error("Evento no encontrado"), { statusCode: 404 });
        }
        throw e;
      }
}

async function registrarVenta(req, EventoResponse, { eventoId, cantidada, socioId, formaDePago, comprobanteUrl},
  res,
  next) {
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
async function deleteEvento(id) {
    await prisma_1.default.evento.delete({ where: { id } });
}
//# sourceMappingURL=evento.service.js.map