import { Entrada, CreateEntradaRequest, UpdateEntradaRequest } from "../types/entradas";

// Simulamos la base de datos en memoria
let entradas: Entrada[] = [];

// Obtener todas las entradas
export async function getAllEntradas(): Promise<Entrada[]> {
  return entradas;
}

// Obtener una entrada por ID
export async function getEntradaById(id: number): Promise<Entrada> {
  const entrada = entradas.find(b => b.id === id);
  if (!entrada) {
    const error = new Error("Entrada not found");
    (error as any).statusCode = 404;
    throw error;
  }
  return entrada;
}

// Crear una entrada nueva
export async function createEntrada(entradaData: CreateEntradaRequest): Promise<Entrada> {
  
  const newEntrada: Entrada = {
    ...entradaData,
    id: (Math.max(...entradas.map(b => b.id)) + 1),
    total: entradaData.cantidad * entradaData.precioUnitario,
    estado: "activa",
    fechaCompra: new Date().toISOString(),
    createdAt: new Date(),
  };

  entradas.push(newEntrada);
  return newEntrada;
}

export async function updateEntrada(id: number, updateData: UpdateEntradaRequest): Promise<Entrada> {
  const entradaIndex = entradas.findIndex(b => b.id === id);
  if (entradaIndex === -1) {
    const error = new Error("Entrada not found");
    (error as any).statusCode = 404;
    throw error;
  }

  const currentEntrada = entradas[entradaIndex];
  if (!currentEntrada) {
    throw new Error("Entrada not found");
  }
  const updatedEntrada: Entrada = {
    id: currentEntrada.id,
    eventoId: updateData.eventoId ?? currentEntrada.eventoId,
    nombreEvento: updateData.nombreEvento ?? currentEntrada.nombreEvento,
    fecha: updateData.fecha ?? currentEntrada.fecha,
    hora: updateData.hora ?? currentEntrada.hora,
    cantidad: updateData.cantidad ?? currentEntrada.cantidad,
    precioUnitario: updateData.precioUnitario ?? currentEntrada.precioUnitario,
    total: (updateData.cantidad ?? currentEntrada.cantidad) * (updateData.precioUnitario ?? currentEntrada.precioUnitario),
    estado: updateData.estado ?? currentEntrada.estado,
    fechaCompra: updateData.fechaCompra ?? currentEntrada.fechaCompra,
    comprador: updateData.comprador ?? currentEntrada.comprador,
    categoria: updateData.categoria ?? currentEntrada.categoria,
    ubicacion: updateData.ubicacion ?? currentEntrada.ubicacion,
    createdAt: currentEntrada.createdAt,
  };

  entradas[entradaIndex] = updatedEntrada;
  return updatedEntrada;
}



