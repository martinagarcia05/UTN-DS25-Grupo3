import { z } from 'zod';

export const EstadoCuotaSchema = z.enum([
  "pendiente",
  "aprobada",
  "rechazada",
  "en_revision"
]);

// Crear cuota (ADMIN)
export const createCuotaSchema = z.object({
  socioId: z.coerce.number()
    .int()
    .positive()
    .describe("El socioId debe ser un número positivo"),

  vencimiento: z.coerce.date()
    .describe("Debe ser una fecha válida"),

  importe: z.coerce.number()
    .positive()
    .max(1000000)
    .describe("El importe debe ser positivo y menor a 1 millón"),

  estado: EstadoCuotaSchema.default("pendiente"),
});

// Actualizar cuota (ADMIN)
export const updateCuotaSchema = createCuotaSchema.partial();
