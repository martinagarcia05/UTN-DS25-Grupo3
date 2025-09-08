import { Router } from 'express';
import * as ctrl from '../controllers/cuotasAdminController';
// import { authAdmin } from '../middlewares/authAdmin'; // cuando este listo el middleware de autenticación

const router = Router();

// router.use(authAdmin); // proteger todo el grupo

router.get('/', ctrl.list);          // GET /api/cuotas?estado=&nombre=
router.get('/:id', ctrl.getDetalle); // GET /api/cuotas/:id
router.patch('/:id', ctrl.patchEstado); // PATCH /api/cuotas/:id
router.post('/generar', ctrl.generarCuotas); // POST /api/cuotas/generar

export const cuotasAdminRoutes = router;
