import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import {
  createCuotaSchema,
  updateCuotaSchema,
} from "../validations/cuotasAdmin.validation";
import * as cuotasAdminController from "../controllers/cuotasAdminController";

const router = Router();

// Crear una cuota (ADMIN)
router.post(
  "/",
  validate(createCuotaSchema),
  cuotasAdminController.generarCuotas // <-- función real de tu controller
);

// Actualizar una cuota (ADMIN)
router.put(
  "/:id",
  validate(updateCuotaSchema),
  cuotasAdminController.updateCuota // <-- función real de tu controller
);

// Listar todas las cuotas (ADMIN)
router.get("/", cuotasAdminController.getAllCuota);

// Obtener una cuota por ID (ADMIN)
router.get("/:id", cuotasAdminController.getCuotasByDni);

// Eliminar una cuota (ADMIN)
router.delete("/:id", cuotasAdminController.deleteCuota);

export default router;
