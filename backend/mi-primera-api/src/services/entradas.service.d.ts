import { Entrada, CreateEntradaRequest, UpdateEntradaRequest } from "../types/entradas";
export declare function getAllEntradas(): Promise<Entrada[]>;
export declare function getEntradaById(id: number): Promise<Entrada>;
export declare function createEntrada(entradaData: CreateEntradaRequest): Promise<Entrada>;
export declare function updateEntrada(id: number, updateData: UpdateEntradaRequest): Promise<Entrada>;
export declare function deleteEntrada(id: number): Promise<void>;
export declare function getEntradasBySocioId(socioId: number): Promise<Entrada[]>;
//# sourceMappingURL=entradas.service.d.ts.map