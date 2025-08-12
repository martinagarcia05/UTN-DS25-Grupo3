export interface Entrada {
    id: number;
    eventoId: string;
    nombreEvento: string;
    fecha: string;
    hora: string;
    cantidad: number;
    precioUnitario: number;
    total: number;
    estado: 'activa' | 'usada' | 'cancelada';
    fechaCompra: string;
    comprador: Comprador;
    categoria: string;
    ubicacion: string;
    createdAt?: Date | undefined;
}

interface Comprador {
  nombre: string;
  apellido: string;
  dni: string;
  email?: string;
  telefono?:string;
}

export interface CreateEntradaRequest {
    id: number;
    eventoId: string;
    nombreEvento: string;
    fecha: string;
    hora: string;
    cantidad: number;
    precioUnitario: number;
    total: number;
    estado: 'activa' | 'usada' | 'cancelada';
    fechaCompra: string;
    comprador: Comprador;
    categoria: string;
    ubicacion: string;
}

export interface UpdateEntradaRequest {    
    id: number;
    eventoId?: string;
    nombreEvento?: string;
    fecha?: string;
    hora?: string;
    cantidad?: number;
    precioUnitario?: number;
    total?: number;
    estado?: 'activa' | 'usada' | 'cancelada';
    fechaCompra?: string;
    comprador?: Comprador;
    categoria?: string;
    ubicacion?: string;
    
}

export interface EntradaResponse {
    entrada:Entrada;
    message: string;
}

export interface EntradaListResponse {
    entradas:Entrada[];
    total: number;
}