import { Router } from "express";
import * as claseSocioController from "../controllers/claseSocio.controller";

const router = Router();

router.get("/", claseSocioController.getAllClasesSocio);
router.get("/:id", claseSocioController.getClaseSocioById);
router.post("/", claseSocioController.createClaseSocio);
router.delete("/:id", claseSocioController.deleteClaseSocio);

export const ClaseSocioRoutes = router;
