import { Router } from "express";
import * as claseSocioController from "../controllers/claseSocio.controller";

const router = Router();

router.get("/", claseSocioController.getAllClasesSocio);
router.get("/:id", claseSocioController.getClaseSocioById);
router.post("/", claseSocioController.createClaseSocio);
router.put("/:id", claseSocioController.updateClaseSocio);
router.delete("/:id", claseSocioController.deleteClaseSocio);

export const ClaseSocioRoutes = router;
