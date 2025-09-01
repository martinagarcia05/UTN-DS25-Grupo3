import { Router } from "express";
import * as reservaController from "../controllers/reserva.controller";

const router = Router();

router.get("/", reservaController.obtenerReservas);
router.post("/", reservaController.registrarReserva);
router.delete("/:id", reservaController.cancelarReserva);

export default router;

