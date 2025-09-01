import { Router } from "express";
import * as actividadController from "../controllers/actividad.controller";
import { validate } from "../middlewares/validation.middleware";
import { createActividadSchema, updateActividadSchema } from "../validations/actividades.validation";
const router = Router();

router.get("/", actividadController.getAllActividades);
router.get("/:id", actividadController.getActividadById);
router.post("/", validate(createActividadSchema), actividadController.createActividad);
router.put("/:id",validate(updateActividadSchema), actividadController.updateActividad);
router.delete("/:id", actividadController.deleteActividad);

export const ActividadRoutes = router;
