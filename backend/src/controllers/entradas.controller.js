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
exports.getAllEntradas = getAllEntradas;
exports.getEntradaById = getEntradaById;
exports.createEntrada = createEntrada;
exports.updateEntrada = updateEntrada;
const entradas_1 = require("../types/entradas");
const express_1 = require("express");
const entradaService = __importStar(require("../services/entradas.service"));
const path_1 = require("path");
async function getAllEntradas(req, res) {
    try {
        const { socioId } = req.query;
        if (socioId) {
            const entradas = await entradaService.getEntradasBySocioId(Number(socioId));
            return res.json({ entradas });
        }
        const entradas = await entradaService.getAllEntradas();
        res.json({ entradas });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function getEntradaById(req, res, next) {
    try {
        const { id } = req.params;
        const entradaId = parseInt(id);
        if (isNaN(entradaId)) {
            const error = new Error("ID parameter is invalid");
            error.statusCode = 400;
            throw error;
        }
        const entrada = await entradaService.getEntradaById(entradaId);
        res.json({
            entrada,
            message: "Entrada retrieved successfully",
        });
    }
    catch (error) {
        next(error);
    }
}
async function createEntrada(req, res, next) {
    try {
        const newEntrada = await entradaService.createEntrada(req.body);
        res.status(201).json({
            entrada: newEntrada,
            message: 'Entrada created successfully'
        });
    }
    catch (error) {
        next(error);
    }
}
async function updateEntrada(req, res, next) {
    try {
        const { id } = req.params;
        const updatedEntrada = await entradaService.getEntradaById(parseInt(id));
        res.json({
            entrada: updatedEntrada,
            message: 'Entrada updated successfully'
        });
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=entradas.controller.js.map