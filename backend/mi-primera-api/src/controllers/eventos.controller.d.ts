import { CreateEventoRequest, UpdateEventoRequest, EventoListResponse, EventoResponse } from "../types/evento";
import { Request, Response, NextFunction } from 'express';
export declare function getAllEvento(req: Request, res: Response<EventoListResponse>, next: NextFunction): Promise<void>;
export declare function getEventoById(req: Request, res: Response<any>, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function createEvento(req: Request<{}, EventoResponse, CreateEventoRequest>, res: Response<EventoResponse>, next: NextFunction): Promise<void>;
export declare function updateEvento(req: Request<{
    id: string;
}, {}, UpdateEventoRequest>, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function registrarVenta(req: Request<{
    id: string;
}, EventoResponse, {
    cantidad: number;
    socioId: number;
}>, res: Response<any>, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteEvento(req: Request<{
    id: string;
}>, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=eventos.controller.d.ts.map