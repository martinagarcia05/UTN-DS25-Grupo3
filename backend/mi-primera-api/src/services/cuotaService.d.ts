import { GetCuotasRequest, GetCuotasResponse, EnviarComprobanteRequest, EnviarComprobanteResponse } from '../types/cuota';
export declare function getCuotas(id: number, request: GetCuotasRequest): Promise<GetCuotasResponse>;
export declare function enviarComprobante(cuotaId: number, request: EnviarComprobanteRequest): Promise<EnviarComprobanteResponse>;
//# sourceMappingURL=cuotaService.d.ts.map