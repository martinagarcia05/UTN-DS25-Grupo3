import { Evento, CreateEventoRequest, UpdateEventoRequest } from "../types/evento";
export declare function getAllEventos(): Promise<Evento[]>;
export declare function getEventoById(id: number): Promise<Evento>;
export declare function createEvento(eventoData: CreateEventoRequest): Promise<Evento>;
export declare function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<Evento>;
export declare function registrarVenta(id: number, cantidad: number, socioId: number): Promise<Evento>;
export declare function deleteEvento(id: number): Promise<void>;
//# sourceMappingURL=evento.service.d.ts.map