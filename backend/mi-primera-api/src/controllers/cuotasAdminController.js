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
exports.list = list;
exports.getDetalle = getDetalle;
exports.patchEstado = patchEstado;
const express_1 = require("express");
const svc = __importStar(require("../services/cuotasAdminService"));
async function list(req, res, next) {
    try {
        res.json(await svc.listaCuotas({ estado: req.query.estado, nombre: req.query.nombre }));
    }
    catch (e) {
        next(e);
    }
}
async function getDetalle(req, res, next) {
    try {
        res.json(await svc.getCuotaDetalle(parseInt(req.params.id, 10)));
    }
    catch (e) {
        next(e);
    }
}
async function patchEstado(req, res, next) {
    try {
        // suponiendo que auth pone el usuario en req.user
        const adminName = req.user?.name || 'Admin';
        res.json(await svc.updateEstadoCuota(parseInt(req.params.id, 10), req.body, adminName));
    }
    catch (e) {
        next(e);
    }
}
//# sourceMappingURL=cuotasAdminController.js.map