import { z } from "zod";

// Validar el :id en GET /socios/:id/cuotas
export const getCuotasSocioSchema = z.object({
  params: z.object({
    id: z.coerce.number()
      .int()
      .positive()
      .describe("El id del socio debe ser un número positivo"),
  }),
});

// Validar el :cuotaId en POST /cuotas/:cuotaId/comprobante
// Además valida que se suba un archivo permitido
export const sendComprobanteSchema = z.object({
  params: z.object({
    cuotaId: z.coerce.number()
      .int()
      .positive()
      .describe("El id de la cuota debe ser un número positivo"),
  }),
  file: z.object({
    mimetype: z.enum(["application/pdf", "image/jpeg", "image/png"])
      .describe("Formato no permitido, debe ser PDF, JPG o PNG"),
    size: z.number()
      .max(5 * 1024 * 1024)
      .describe("El archivo no debe superar los 5MB"),
    originalname: z.string(),
    path: z.string(),
  }),
});
