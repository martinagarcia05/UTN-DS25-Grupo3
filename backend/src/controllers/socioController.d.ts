import { Request, Response, NextFunction } from 'express';
import { GetSocioResponse, ActualizarSocioRequest } from '../types/Socio';
export declare function updateSocio(req: Request<{
    id: string;
}, GetSocioResponse, ActualizarSocioRequest>, res: Response<GetSocioResponse>, next: NextFunction): Promise<void>;
export declare const postSocio: (req: Request, res: Response) => void;
export declare const postValidarPswd: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=socioController.d.ts.map