import { Router } from 'express';
<<<<<<< HEAD
//import { updateSocio } from '../controllers/socioController';
import { getSocioByDni, traerUser } from '../controllers/SocioController';

const router = Router();
router.get('/dni/:dni', getSocioByDni);
router.get('/traer/:dni', traerUser);
//router.put('/:id', updateSocio);
//router.get('/:id/cuotas', getCuotas);
=======
import {getAllSocios, getSocioByDni} from '../controllers/socioController';

const router = Router();
router.get('/dni/:dni', getSocioByDni);
router.get('/', getAllSocios);

>>>>>>> develop


export const socioRoutes = router;