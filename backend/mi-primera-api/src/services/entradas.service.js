"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEntradas = getAllEntradas;
exports.getEntradaById = getEntradaById;
exports.createEntrada = createEntrada;
exports.updateEntrada = updateEntrada;
exports.deleteEntrada = deleteEntrada;
exports.getEntradasBySocioId = getEntradasBySocioId;
const entradas_1 = require("../types/entradas");
const prisma_1 = __importDefault(require("../config/prisma"));
const evento_service_1 = require("./evento.service");
// Obtener todas las entradas
async function getAllEntradas() {
    const entradas = await prisma_1.default.entrada.findMany({
        orderBy: { id: "asc" },
        include: { socio: true, evento: true },
    });
    return entradas;
}
// Obtener una entrada por ID
async function getEntradaById(id) {
    const entrada = await prisma_1.default.entrada.findUnique({
        where: { id },
        include: { socio: true },
    });
    if (!entrada)
        throw Object.assign(new Error("Entrada not found"), { statusCode: 404 });
    return entrada;
}
// Crear una entrada
async function createEntrada(entradaData) {
    const evento = await (0, evento_service_1.getEventoById)(entradaData.eventoId);
    if (evento.entradasVendidas + entradaData.cantidad > evento.capacidad) {
        throw new Error("No hay suficientes entradas disponibles");
    }
    const total = entradaData.cantidad * evento.precioEntrada;
    const created = await prisma_1.default.entrada.create({
        data: {
            eventoId: entradaData.eventoId,
            cantidad: entradaData.cantidad,
            precioUnitario: evento.precioEntrada,
            total: total,
            fechaCompra: new Date(),
            socioId: entradaData.socioId,
            ubicacion: evento.ubicacion,
            createdAt: new Date(),
        },
        include: { socio: true },
    });
    return created;
}
// Actualizar una entrada
async function updateEntrada(id, updateData) {
    try {
        const updated = await prisma_1.default.entrada.update({
            where: { id },
            data: updateData,
            include: { socio: true },
        });
        return updated;
    }
    catch (e) {
        if (e.code === "P2025")
            throw Object.assign(new Error("Entrada not found"), { statusCode: 404 });
        throw e;
    }
}
// Eliminar una entrada
async function deleteEntrada(id) {
    await prisma_1.default.entrada.delete({ where: { id } });
}
//Obtener entradas por ID de socio
async function getEntradasBySocioId(socioId) {
    const entradas = await prisma_1.default.entrada.findMany({
        where: { socioId },
        orderBy: { id: "asc" },
        include: { socio: true, evento: true },
    });
    return entradas;
}
//# sourceMappingURL=entradas.service.js.map