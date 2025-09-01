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
exports.getAllEvento = getAllEvento;
exports.getEventoById = getEventoById;
exports.createEvento = createEvento;
exports.updateEvento = updateEvento;
exports.registrarVenta = registrarVenta;
exports.deleteEvento = deleteEvento;
const evento_1 = require("../types/evento");
const Socio_1 = require("../types/Socio");
const express_1 = require("express");
const eventoService = __importStar(require("../services/evento.service"));
async function getAllEvento(req, res, next) {
    try {
        const eventos = await eventoService.getAllEventos();
        res.json({
            eventos,
            total: eventos.length
        });
    }
    catch (error) {
        console.error('Error en getAllEvento:', error);
        next(error);
    }
}
async function getEventoById(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }
        const evento = await eventoService.getEventoById(id);
        res.json({
            evento,
            message: "Evento retrieved successfully",
        });
    }
    catch (error) {
        next(error);
    }
}
async function createEvento(req, res, next) {
    try {
        const newEvento = await eventoService.createEvento(req.body);
        res.status(201).json({
            evento: newEvento,
            message: 'Evento created successfully'
        });
    }
    catch (error) {
        next(error);
    }
}
async function updateEvento(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }
        const updatedEvento = await eventoService.updateEvento(id, req.body);
        res.status(200).json({
            evento: updatedEvento,
            message: 'Evento updated successfully'
        });
    }
    catch (error) {
        next(error);
    }
}
async function registrarVenta(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id))
            return res.status(400).json({ message: 'ID inválido' });
        const { cantidad, socioId } = req.body;
        if (!cantidad || !socioId) {
            return res.status(400).json({ message: 'Cantidad y socioId son requeridos' });
        }
        const venta = await eventoService.registrarVenta(id, cantidad, socioId);
        res.json({
            evento: venta,
            message: 'Venta registrada exitosamente'
        });
    }
    catch (error) {
        console.error('Error en registrarVenta:', error);
        next(error);
    }
}
async function deleteEvento(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }
        await eventoService.deleteEvento(id);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=eventos.controller.js.map