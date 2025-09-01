import { Request, Response, NextFunction } from 'express';
import { GetCuotasResponse, EnviarComprobanteResponse } from '../types/cuota';
interface RequestWithFile extends Request {
    file?: Express.Multer.File;
}
export declare function getCuotas(req: Request, res: Response<GetCuotasResponse>, next: NextFunction): Promise<void>;
export declare function enviarComprobante(req: RequestWithFile, res: Response<EnviarComprobanteResponse>, next: NextFunction): Promise<Response<EnviarComprobanteResponse, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=cuotaController.d.ts.map