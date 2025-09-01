import { CreateEntradaRequest, UpdateEntradaRequest, EntradaResponse } from "../types/entradas";
import { Request, Response, NextFunction } from 'express';
export declare function getAllEntradas(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getEntradaById(req: Request, res: Response<EntradaResponse>, next: NextFunction): Promise<void>;
export declare function createEntrada(req: Request<{}, EntradaResponse, CreateEntradaRequest>, res: Response<EntradaResponse>, next: NextFunction): Promise<void>;
export declare function updateEntrada(req: Request<{
    id: string;
}, EntradaResponse, UpdateEntradaRequest>, res: Response<EntradaResponse>, next: NextFunction): Promise<void>;
//# sourceMappingURL=entradas.controller.d.ts.map