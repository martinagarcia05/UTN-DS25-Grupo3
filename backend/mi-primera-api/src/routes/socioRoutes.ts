import { Router } from 'express';
import { updateSocio } from '../controllers/socioController';


const router = Router();

router.put('/:id', updateSocio);
//router.get('/:id/cuotas', getCuotas);


export const socioRoutes = router;