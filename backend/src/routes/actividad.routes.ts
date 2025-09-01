import { Router } from "express";
import * as actividadController from "../controllers/actividad.controller";

const router = Router();

router.get("/", actividadController.getAllActividades);
router.get("/:id", actividadController.getActividadById);
router.post("/", actividadController.createActividad);
router.put("/:id", actividadController.updateActividad);
router.delete("/:id", actividadController.deleteActividad);

export const ActividadRoutes = router;
