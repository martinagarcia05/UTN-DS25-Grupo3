import { Router } from 'express';
import * as ctrl from '../controllers/comprobanteAdminController';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();
router.use(authenticate);

// Rutas específicas del detalle/patch (ComprobantePage):
router.get('/:id', ctrl.getDetalle);     // GET /api/cuotas/:id
router.patch('/:id', ctrl.patchEstado);  // PATCH /api/cuotas/:id

export const comprobanteAdminRoutes = router;
