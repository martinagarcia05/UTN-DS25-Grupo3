import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import { getCuotasSocioSchema, sendComprobanteSchema } from "../validations/cuotaSocio.validation";
import * as cuotasController from "../controllers/cuotaController";
import multer from 'multer'; 

const router = Router();

// Configuración de Multer para guardar los archivos en la carpeta 'uploads'
const upload = multer({ dest: 'uploads/' });

// Obtener cuotas de un socio
router.get(
  "/:id/cuotas",
  validate(getCuotasSocioSchema),
  cuotasController.getCuotas
);

// Subir comprobante de pago
router.post(
  "/:cuotaId/comprobante",
  upload.single('comprobante'), 
  validate(sendComprobanteSchema), 
  cuotasController.enviarComprobante
);

export const cuotaRoutes = router;