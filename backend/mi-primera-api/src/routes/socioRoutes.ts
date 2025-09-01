import { Router } from 'express';
import { getSocioById, getSocioByDni, updateSocioByDni} from '../controllers/socioController';

const router = Router();

router.get('/:id', getSocioById);
//router.put('/:id', updateSocioByDni);

export const socioRoutes = router;