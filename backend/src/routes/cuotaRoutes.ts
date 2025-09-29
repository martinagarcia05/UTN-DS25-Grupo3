import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import {
  getCuotasSocioSchema,
  sendComprobanteSchema,
} from "../validations/cuotasSocio.validation";
import * as cuotasController from "../controllers/cuotaController";

const router = Router();

// Obtener cuotas de un socio
router.get(
  "/:id/cuotas",
  validate(getCuotasSocioSchema),
  cuotasController.getCuotas
);

// Subir comprobante de pago
router.post(
  "/:cuotaId/comprobante",
  validate(sendComprobanteSchema),
  cuotasController.enviarComprobante
);

export default router;
