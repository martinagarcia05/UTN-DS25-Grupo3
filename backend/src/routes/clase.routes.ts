import { Router } from "express";
import * as claseController from "../controllers/clase.controller";

const router = Router();

router.get("/actividad/:actividadId", claseController.getClasesByActividad);
router.get("/:id", claseController.getClase);
router.post("/actividad/:actividadId", claseController.createClase);
router.put("/:id", claseController.updateClase);
router.delete("/:id", claseController.deleteClase);

export const ClaseRoutes = router;
