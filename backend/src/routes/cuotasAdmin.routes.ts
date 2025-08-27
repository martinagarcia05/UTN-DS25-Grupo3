import { Router } from 'express';
import * as ctrl from '../controllers/cuotasAdmin.controller';
// import { authAdmin } from '../middlewares/comprobanteEntrada.middlewares'; 

const router = Router();

// router.use(authAdmin);

router.get('/', ctrl.list);          // GET /api/cuotas?estado=&nombre=
router.get('/:id', ctrl.getDetalle); // GET /api/cuotas/:id
router.patch('/:id', ctrl.patchEstado); // PATCH /api/cuotas/:id

export const cuotasAdminRoutes = router;
