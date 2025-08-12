export interface Evento {
    id: number;
    nombre: string;
    fecha: string;
    horaInicio: string;
    horaFin: string;
    capacidad: number;
    precioEntrada: number;
    entradasVendidas: number;
    montoTotal: number;
    ubicacion: string;
    descripcion: string
    estado: string;
    compradores?: Comprador[];
    createdAt?: Date | undefined;
}
export interface Comprador {
  apellido: string;
  nombre: string;
  dni: string;
  email?: string;
  telefono?: string;
  cantidad: number;
};
export interface CreateEventoRequest {
    id: number;
    nombre: string;
    fecha: string;
    horaInicio: string;
    horaFin: string;
    capacidad: number;
    precioEntrada: number;
    entradasVendidas: number;
    montoTotal: number;
    ubicacion: string;
    descripcion: string
    estado: string;
}

export interface UpdateEventoRequest {  
    id: number;
    nombre?: string;
    fecha?: string;
    horaInicio?: string;
    horaFin?: string;
    capacidad?: number;
    precioEntrada?: number;
    entradasVendidas?: number;
    montoTotal?: number;
    ubicacion?: string;
    descripcion?: string
    estado?: string;
    
}

export interface EventoResponse {
    evento:Evento;
    message: string;
}

export interface EventoListResponse {
    eventos:Evento[];
    total: number;
}