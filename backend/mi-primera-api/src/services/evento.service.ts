import { Evento, CreateEventoRequest, UpdateEventoRequest } from "../types/evento";

let eventos: Evento[] = [
    {
        id: 1,
        nombre: 'Torneo Futbol',
        fecha: '2025-07-10',
        horaInicio: '20:00',
        horaFin: '23:00',
        capacidad: 100,
        precioEntrada: 500,
        entradasVendidas: 0,
        montoTotal: 0,
        ubicacion: 'Cancha Principal',
        descripcion: 'Gran torneo de fútbol con premios en efectivo',
        estado: 'activo',
        compradores: []
      },
      {
        id: 2,
        nombre: 'Obra de Teatro',
        fecha: '2025-07-15',
        horaInicio: '18:00',
        horaFin: '20:00',
        capacidad: 80,
        precioEntrada: 400,
        entradasVendidas: 0,
        montoTotal: 0,
        ubicacion: 'Auditorio',
        descripcion: 'Obra clásica interpretada por actores locales',
        estado: 'activo',
        compradores: []
      },
      {
        id: 3,
        nombre: 'Muestra Patin',
        fecha: '2025-07-03',
        horaInicio: '19:00',
        horaFin: '21:00',
        capacidad: 70,
        precioEntrada: 300,
        entradasVendidas: 0,
        montoTotal: 0,
        ubicacion: 'Pista de Patinaje',
        descripcion: 'Exhibición de patinaje artístico',
        estado: 'completado',
        compradores: []
      },
      {
        id: 4,
        nombre: 'Torneo de Voleibol',
        fecha: '2025-10-23',
        horaInicio: '10:00',
        horaFin: '16:00',
        capacidad: 120,
        precioEntrada: 250,
        entradasVendidas: 0,
        montoTotal: 0,
        ubicacion: 'Cancha de Voleibol',
        descripcion: 'Competencia de voleibol con equipos locales',
        estado: 'activo',
        compradores: []
      }
];

// Obtener todas las eventos
export async function getAllEvento(): Promise<Evento[]> {
  return eventos;
}

// Obtener una evento por ID
export async function getEventoById(id: number): Promise<Evento> {
  const evento = eventos.find(b => b.id === id);
  if (!evento) {
    const error = new Error("Evento not found");
    (error as any).statusCode = 404;
    throw error;
  }
  return {
      ...evento,
      entradasVendidas: calcularEntradasVendidas(evento),
      compradores: evento.compradores?? [] 
  } 
}

// Crear una evento nueva
export async function createEvento(eventoData: CreateEventoRequest): Promise<Evento> {
  const newEvento: Evento = {
    ...eventoData,
    id: Math.max(...eventos.map(b => b.id)) + 1,

  };
  eventos.push(newEvento);
  return newEvento;
}

export async function updateEvento(id: number, updateData: UpdateEventoRequest): Promise<Evento> {
  const eventoIndex = eventos.findIndex(b => b.id === id);
  if (eventoIndex === -1) {
    const error = new Error("Evento not found");
    (error as any).statusCode = 404;
    throw error;
  }

  const currentEvento = eventos[eventoIndex];
  if (!currentEvento) {
    throw new Error("Evento not found");
  }
  const updatedEvento: Evento = {
    id: currentEvento.id,
    nombre: updateData.nombre ?? currentEvento.nombre,
    fecha: updateData.fecha ?? currentEvento.fecha,
    horaInicio: updateData.horaInicio ?? currentEvento.horaInicio,
    horaFin: updateData.horaFin ?? currentEvento.horaFin,
    capacidad: updateData.capacidad,
    precioEntrada: updateData.precioEntrada ?? currentEvento.precioEntrada,
    descripcion: updateData.descripcion ?? currentEvento.descripcion,   
    ubicacion: updateData.ubicacion ?? currentEvento.ubicacion,
    estado: updateData.estado ?? currentEvento.estado,
    montoTotal: updateData.montoTotal ?? currentEvento.montoTotal,
    createdAt: currentEvento.createdAt,
    entradasVendidas: calcularEntradasVendidas(currentEvento),
    compradores: currentEvento.compradores,
  };

  eventos[eventoIndex] = updatedEvento;
  return updatedEvento;
}


type Comprador = {
  apellido: string;
  nombre: string;
  dni: string;
  email?: string;
  telefono?: string;
  cantidad: number;
};

export async function registrarVenta(id: number, cantidad: number, comprador: Comprador): Promise<Evento> {
  const eventoIndex = eventos.findIndex(b => b.id === id);
  if (eventoIndex === -1) {
    const error = new Error("Evento not found");
    (error as any).statusCode = 404;
    throw error;
  }

  const currentEvento = eventos[eventoIndex];
  if (!currentEvento) {
    throw new Error("Evento not found");
  }

  if (!currentEvento.compradores) {
    currentEvento.compradores = [] as Comprador[];
  }
  currentEvento.compradores.push({ ...comprador, cantidad });

  currentEvento.entradasVendidas = calcularEntradasVendidas(currentEvento);

  currentEvento.montoTotal += cantidad * currentEvento.precioEntrada;

  eventos[eventoIndex] = currentEvento;
  return currentEvento;
}

export async function deleteEvento(id: number): Promise<void> {
  const eventoIndex = eventos.findIndex(b => b.id === id);
  if (eventoIndex === -1) {
    const error = new Error("Evento not found");
    (error as any).statusCode = 404;
    throw error;
  }
  eventos.splice(eventoIndex, 1);
}

export function calcularEntradasVendidas(evento: Evento): number {
  if (!evento.compradores) return 0;
  return evento.compradores.reduce((total, c) => total + c.cantidad, 0);
}
