import { GetCuotasAdminQuery, GetCuotasAdminResponse, GetComprobanteDetalleResponse, UpdateEstadoCuotaRequest, UpdateEstadoCuotaResponse, CuotaRow } from '../types/cuotasAdminTypes';
export declare const cuotas: CuotaRow[];
export declare function listaCuotas(query: GetCuotasAdminQuery): Promise<GetCuotasAdminResponse>;
export declare function getCuotaDetalle(id: number): Promise<GetComprobanteDetalleResponse>;
export declare function updateEstadoCuota(id: number, body: UpdateEstadoCuotaRequest, adminName: string): Promise<UpdateEstadoCuotaResponse>;
//# sourceMappingURL=cuotasAdminService.d.ts.map