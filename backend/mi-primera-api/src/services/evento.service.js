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
    // Calcular entradasVendidas y montoTotal para cada evento
    return eventos.map(evento => ({
        ...evento,
        entradasVendidas: evento.entradas.reduce((acc, e) => acc + e.cantidad, 0),
        montoTotal: evento.entradas.reduce((acc, e) => acc + e.total, 0),
    }));
}
// Obtener un evento por ID
async function getEventoById(id) {
    const evento = await prisma_1.default.evento.findUnique({
        where: { id },
        include: { entradas: { include: { socio: true } } },
    });
    if (!evento)
        throw Object.assign(new Error("Evento not found"), { statusCode: 404 });
    evento.entradasVendidas = evento.entradas.reduce((acc, e) => acc + e.cantidad, 0);
    evento.montoTotal = evento.entradas.reduce((acc, e) => acc + e.total, 0);
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
    created.entradasVendidas = 0;
    created.montoTotal = 0;
    return created;
}
// Actualizar un evento
async function updateEvento(id, updateData) {
    try {
        const updated = await prisma_1.default.evento.update({
            where: { id },
            data: updateData,
            include: { entradas: { include: { socio: true } } },
        });
        updated.entradasVendidas = updated.entradas.reduce((acc, e) => acc + e.cantidad, 0);
        updated.montoTotal = updated.entradas.reduce((acc, e) => acc + e.total, 0);
        return updated;
    }
    catch (e) {
        if (e.code === "P2025")
            throw Object.assign(new Error("Evento not found"), { statusCode: 404 });
        throw e;
    }
}
async function registrarVenta(id, cantidad, socioId) {
    const evento = await getEventoById(id);
    if (evento.entradasVendidas + cantidad > evento.capacidad) {
        throw Object.assign(new Error("No hay suficiente capacidad para esta venta"), { statusCode: 400 });
    }
    const nuevaEntrada = await prisma_1.default.entrada.create({
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
async function deleteEvento(id) {
    await prisma_1.default.evento.delete({ where: { id } });
}
//# sourceMappingURL=evento.service.js.map