import { Router } from 'express';
import { updateSocio } from '../controllers/socioController';
import { getCuotas } from '../controllers/cuotaController';

const router = Router();

router.put('/:id', updateSocio);
router.get('/:id/cuotas', getCuotas);

export const socioRoutes = router;