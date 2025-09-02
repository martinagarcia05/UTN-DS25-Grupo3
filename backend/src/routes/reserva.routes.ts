import { Router } from "express";
import * as reservaController from "../controllers/reserva.controller";

const router = Router();

// Endpoints para socio
router.get("/socio/turnos", reservaController.obtenerTurnos);
router.post("/socio/reservas", reservaController.registrarReserva);
router.delete("/socio/reservas/:id", reservaController.cancelarReserva);

// Endpoints para admin
router.get("/admin/turnos", reservaController.obtenerTurnos);
router.post("/admin/reservas", reservaController.registrarReserva);
router.delete("/admin/reservas/:id", reservaController.cancelarReserva);

export default router;
