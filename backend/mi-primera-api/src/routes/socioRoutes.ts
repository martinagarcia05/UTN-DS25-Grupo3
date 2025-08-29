import { Router } from 'express';
import { updateSocio } from '../controllers/socioController';
import { getSocioByDni } from '../controllers/socioController';

const router = Router();
router.get('/dni/:dni', getSocioByDni);
router.put('/socio/:dni', updateSocio);


export const socioRoutes = router;