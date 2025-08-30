import { Router } from "express";
import * as claseController from "../controllers/clase.controller";
import { validate } from "../middlewares/validation.middleware";
import { createClaseSchema, updateClaseSchema } from "../validations/clase.validation";

const router = Router();
router.get("/actividad/:actividadId", claseController.getClasesByActividad);
router.get("/:id", claseController.getClase);
router.post("/actividad/:actividadId", validate(createClaseSchema), claseController.createClase);
router.put("/:id", validate(updateClaseSchema), claseController.updateClase);
router.delete("/:id", claseController.deleteClase);

export const ClaseRoutes = router;
