"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuotas = void 0;
exports.listaCuotas = listaCuotas;
exports.getCuotaDetalle = getCuotaDetalle;
exports.updateEstadoCuota = updateEstadoCuota;
const cuotasAdminTypes_1 = require("../types/cuotasAdminTypes");
const ESTADOS = ['Aprobada', 'Pendiente', 'Rechazada'];
// MOCKS (luego reemplazár por DB)
exports.cuotas = [
    // id, socioNombre, estado, mes, monto, comprobanteUrl?, fechaCarga?
    { id: 1, socioNombre: 'Usuario 1', estado: 'Aprobada', mes: 'Junio', monto: 12000, comprobanteUrl: 'https://...', fechaCarga: '12/06/2025' },
    { id: 2, socioNombre: 'Usuario 2', estado: 'Rechazada', mes: 'Julio', monto: 12000 },
    { id: 3, socioNombre: 'Usuario 3', estado: 'Pendiente', mes: 'Julio', monto: 12000 },
    { id: 4, socioNombre: 'Usuario 4', estado: 'Aprobada', mes: 'Mayo', monto: 11000, comprobanteUrl: 'https://...', fechaCarga: '29/05/2025' },
];
function toDDMMYYYY(d = new Date()) {
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yy = d.getFullYear();
    return `${dd}/${mm}/${yy}`;
}
function isEstadoAdmin(x) {
    return ESTADOS.includes(x);
}
async function listaCuotas(query) {
    const { estado, nombre } = query;
    let filtered = [...exports.cuotas];
    if (estado && estado !== 'Todas') {
        filtered = filtered.filter(c => c.estado === estado);
    }
    if (nombre && nombre.trim()) {
        const q = nombre.trim().toLowerCase();
        filtered = filtered.filter(c => c.socioNombre.toLowerCase().includes(q));
    }
    const items = filtered.map(c => ({
        id: c.id,
        socioNombre: c.socioNombre,
        estado: c.estado,
        comprobanteUrl: c.comprobanteUrl,
        avatar: Boolean(c.comprobanteUrl)
    }));
    return { cuotas: items };
}
async function getCuotaDetalle(id) {
    const c = exports.cuotas.find(x => x.id === id);
    if (!c) {
        return { id, socioNombre: '', mes: '', monto: 0, estado: 'Pendiente', message: 'Cuota no encontrada' };
    }
    return {
        id: c.id,
        socioNombre: c.socioNombre,
        mes: c.mes,
        monto: c.monto,
        estado: c.estado,
        comprobanteUrl: c.comprobanteUrl,
        fechaCarga: c.fechaCarga
    };
}
async function updateEstadoCuota(id, body, adminName) {
    const c = exports.cuotas.find(x => x.id === id);
    if (!c) {
        throw Object.assign(new Error('Cuota no encontrada'), { statusCode: 404 });
    }
    // Validar estados permitidos (Aprobada|Rechazada)
    c.estado = body.estado;
    return {
        id: c.id,
        estado: c.estado,
        fechaCambio: toDDMMYYYY(new Date()),
        cambiadoPor: adminName
    };
}
//# sourceMappingURL=cuotasAdminService.js.map