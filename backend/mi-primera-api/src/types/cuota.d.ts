export interface Cuota {
    nroCuota: number;
    mes: string;
    vencimiento: string;
    monto: number;
    estado: 'Aprobada' | 'Vencida' | 'En revisión';
    comprobanteUrl?: string;
}
export interface GetCuotasRequest {
    mes?: string;
}
export interface GetCuotasResponse {
    cuotas: Cuota[];
    message?: string;
}
export interface EnviarComprobanteRequest {
    comprobante: Express.Multer.File;
}
export interface EnviarComprobanteResponse {
    success: boolean;
    message?: string;
}
//# sourceMappingURL=cuota.d.ts.map