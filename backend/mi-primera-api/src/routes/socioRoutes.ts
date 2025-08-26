import { Router } from 'express';
//import { updateSocio } from '../controllers/socioController';
import { getSocioByDni } from '../controllers/SocioController';

const router = Router();
router.get('/dni/:dni', getSocioByDni);
//router.put('/:id', updateSocio);
//router.get('/:id/cuotas', getCuotas);


export const socioRoutes = router;