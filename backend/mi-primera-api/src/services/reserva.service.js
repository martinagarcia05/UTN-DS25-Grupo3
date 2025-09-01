"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTurnos = obtenerTurnos;
exports.registrarReserva = registrarReserva;
exports.cancelarReserva = cancelarReserva;
// src/services/reserva.service.ts
const reserva_model_1 = require("../models/reserva.model"); //-> RESERVA.MODEL.TS ESTA VACIO
const reserva_types_1 = require("../types/reserva.types");
const crypto_1 = require("crypto");
// Obtener turnos disponibles (devuelve todas las reservas)
function obtenerTurnos() {
    return reserva_model_1.reservas;
}
// Crear una nueva reserva
function registrarReserva(data) {
    const nuevaReserva = { id: (0, crypto_1.randomUUID)(), ...data };
    reserva_model_1.reservas.push(nuevaReserva);
    return nuevaReserva;
}
// Cancelar una reserva
function cancelarReserva(id) {
    const index = reserva_model_1.reservas.findIndex(r => r.id === id);
    if (index !== -1) {
        reserva_model_1.reservas.splice(index, 1);
        return true;
    }
    return false;
}
//# sourceMappingURL=reserva.service.js.map