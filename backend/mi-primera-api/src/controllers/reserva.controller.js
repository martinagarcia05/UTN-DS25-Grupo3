"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTurnos = obtenerTurnos;
exports.registrarReserva = registrarReserva;
exports.cancelarReserva = cancelarReserva;
const express_1 = require("express");
const reservaService = __importStar(require("../services/reserva.service"));
// READ - obtener turnos disponibles
function obtenerTurnos(req, res) {
    res.json(reservaService.obtenerTurnos());
}
// CREATE - registrar una reserva
function registrarReserva(req, res) {
    const nuevaReserva = reservaService.registrarReserva(req.body);
    res.status(201).json(nuevaReserva);
}
// DELETE - cancelar una reserva
function cancelarReserva(req, res) {
    const { id } = req.params;
    const ok = reservaService.cancelarReserva(id);
    if (ok) {
        res.json({ mensaje: "Reserva cancelada con éxito" });
    }
    else {
        res.status(404).json({ error: "Reserva no encontrada" });
    }
}
//# sourceMappingURL=reserva.controller.js.map