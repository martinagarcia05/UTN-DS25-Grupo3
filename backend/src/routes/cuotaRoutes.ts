import { Router } from "express";
import multer from "multer";
import { validate, validateSafe } from "../middlewares/validation.middleware";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import * as cuotaController from "../controllers/cuotaController";
import * as cuotaValidation from "../validations/cuotas.validation";

const router = Router();
// Usamos memoryStorage para tener accesso a file.buffer y subir a Supabase
const upload = multer({ storage: multer.memoryStorage() });

// SOCIO

router.get(
  "/socio",
  authenticate,
  authorize("SOCIO"),
  validateSafe(cuotaValidation.getCuotasSocioSchema),
  cuotaController.getCuotasSocio
);

router.post(
  "/socio/:cuotaId/comprobante",
  authenticate,
  authorize("SOCIO"),
  upload.single("comprobante"),
  validate(cuotaValidation.sendComprobanteSchema),
  cuotaController.enviarComprobante
);

// ADMINISTRATIVO

router.get(
  "/administrativo",
  authenticate,
  authorize("ADMINISTRATIVO", "ADMIN"),
  cuotaController.getCuotasAdministrativo
);

router.patch(
  "/administrativo/:id/estado",
  authenticate,
  authorize("ADMINISTRATIVO", "ADMIN"),
  validate(cuotaValidation.updateEstadoCuotaSchema),
  cuotaController.updateEstadoCuota
);


// ADMIN

router.get(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  cuotaController.getCuotasAdmin
);

router.post(
  "/admin/generar",
  authenticate,
  authorize("ADMIN"),
  validate(cuotaValidation.createCuotaSchema),
  cuotaController.generarCuotas
);

router.post(
  "/admin/vencimiento",
  authenticate,
  authorize("ADMIN"),
  cuotaController.runVencimiento
);

router.delete(
  "/admin/:id",
  authenticate,
  authorize("ADMIN"),
  cuotaController.deleteCuota
);

export const cuotaRoutes = router;
