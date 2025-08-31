import { Router } from 'express';
import { getSocioByDni, updateSocioByDni } from '../controllers/socioController';

const router = Router();

router.get('/:dni', getSocioByDni);
router.put('/:dni', updateSocioByDni);

export const socioRoutes = router;