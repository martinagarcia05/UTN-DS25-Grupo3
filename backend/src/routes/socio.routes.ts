import { Router } from 'express';
import {  postSocio, postValidarPswd , updateSocio} from '../controllers/socio.controller';


const router = Router();

router.put('/:id', updateSocio);
router.post('/', postSocio);
router.post('/validar', postValidarPswd);
//router.get('/:id/cuotas', getCuotas);


export const socioRoutes = router;