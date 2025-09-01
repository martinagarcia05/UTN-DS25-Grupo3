"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCuotas = getCuotas;
exports.enviarComprobante = enviarComprobante;
const cuota_1 = require("../types/cuota");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let cuotas = [
    { socioId: 1, cuotaId: 1, nroCuota: 1, mes: 'Julio 2025', vencimiento: '10/07/2025', monto: 1000, estado: 'Aprobada' },
    { socioId: 1, cuotaId: 2, nroCuota: 2, mes: 'Agosto 2025', vencimiento: '10/08/2025', monto: 1000, estado: 'Vencida' },
    { socioId: 1, cuotaId: 3, nroCuota: 3, mes: 'Septiembre 2025', vencimiento: '10/09/2025', monto: 1000, estado: 'En revisión' }
];
async function getCuotas(id, request) {
    let filteredCuotas = cuotas.filter(c => c.socioId === id);
    if (request.mes) {
        filteredCuotas = filteredCuotas.filter(c => c.mes === request.mes);
    }
    filteredCuotas.sort((a, b) => new Date(a.vencimiento).getTime() - new Date(b.vencimiento).getTime());
    return {
        cuotas: filteredCuotas.map(c => ({ nroCuota: c.nroCuota, mes: c.mes, vencimiento: c.vencimiento, monto: c.monto, estado: c.estado })),
        message: filteredCuotas.length > 0 ? undefined : 'No se encontraron cuotas'
    };
}
async function enviarComprobante(cuotaId, request) {
    const cuotaIndex = cuotas.findIndex(c => c.cuotaId === cuotaId);
    if (cuotaIndex === -1) {
        const error = new Error('Cuota no encontrada');
        error.statusCode = 404;
        throw error;
    }
    const file = request.comprobante;
    if (!file.originalname?.match(/\.(jpg|jpeg|png|pdf)$/i)) {
        const error = new Error('Formato de archivo inválido (solo JPG, PNG, PDF)');
        error.statusCode = 400;
        throw error;
    }
    if (file.size && file.size > 5 * 1024 * 1024) {
        const error = new Error('Archivo demasiado grande (máximo 5MB)');
        error.statusCode = 400;
        throw error;
    }
    const uploadDir = path_1.default.join(__dirname, '../../uploads');
    if (!fs_1.default.existsSync(uploadDir))
        fs_1.default.mkdirSync(uploadDir);
    const filePath = path_1.default.join(uploadDir, file.originalname || 'comprobante');
    if (file.buffer) {
        fs_1.default.writeFileSync(filePath, file.buffer);
    }
    const comprobanteUrl = `/uploads/${file.originalname || 'comprobante'}`;
    cuotas[cuotaIndex].comprobanteUrl = comprobanteUrl;
    cuotas[cuotaIndex].estado = 'En revisión';
    return { success: true };
}
//# sourceMappingURL=cuotaService.js.map