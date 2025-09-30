import { Router } from "express";
import * as actividadSocioController from "../controllers/actividadSocio.controller";

const router = Router();

router.get("/actividad/:actividadId", actividadSocioController.getSociosPorActividad);
router.get("/socio/:socioId", actividadSocioController.getActividadesPorSocio);
router.get("/", actividadSocioController.getAllActividadesSocio);
router.get("/:id", actividadSocioController.getActividadSocioById);
router.post("/", actividadSocioController.createActividadSocio);
router.put("/:id", actividadSocioController.updateActividadSocio);
router.delete("/:id", actividadSocioController.deleteActividadSocio);

export const actividadSocioRoutes = router;
