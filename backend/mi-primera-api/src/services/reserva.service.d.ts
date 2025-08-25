import { Reserva } from "../models/reserva.model";
import { CrearReservaDTO } from "../types/reserva.types";
export declare function obtenerTurnos(): Reserva[];
export declare function registrarReserva(data: CrearReservaDTO): Reserva;
export declare function cancelarReserva(id: string): boolean;
//# sourceMappingURL=reserva.service.d.ts.map