"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCuotas = getCuotas;
exports.enviarComprobante = enviarComprobante;
const express_1 = require("express");
const cuotaService_1 = require("../services/cuotaService");
const cuota_1 = require("../types/cuota");
async function getCuotas(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const cuotas = await (0, cuotaService_1.getCuotas)(id, req.query);
        res.json(cuotas);
    }
    catch (error) {
        next(error);
    }
}
async function enviarComprobante(req, res, next) {
    try {
        const cuotaId = parseInt(req.params.cuotaId);
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No se proporcionó archivo' });
        }
        const response = await (0, cuotaService_1.enviarComprobante)(cuotaId, { comprobante: req.file });
        res.json(response);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=cuotaController.js.map