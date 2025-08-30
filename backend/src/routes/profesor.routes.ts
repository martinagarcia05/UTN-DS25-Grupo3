import { Router } from "express";
import * as profesorController from "../controllers/profesor.controller";

const router = Router();


router.get("/", profesorController.getAllProfesores);

// Obtener profesor por ID
router.get("/:id", profesorController.getProfesorById);

// Crear profesor
router.post("/", profesorController.createProfesor);

// Actualizar profesor
router.put("/:id", profesorController.updateProfesor);

// Eliminar profesor
router.delete("/:id", profesorController.deleteProfesor);

export const profesorRoutes = router;
