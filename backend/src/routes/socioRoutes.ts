import { Router } from 'express';
import {getAllSocios, getSocioByDni} from '../controllers/socioController';

const router = Router();
router.get('/dni/:dni', getSocioByDni);
router.get('/', getAllSocios);



export const socioRoutes = router;