import { Router } from "express";
import { postSocio, postValidarPswd } from '../controllers/SocioController';

const router = Router();

router.post('/api/socio', postSocio);
router.post('/api/socio/validar', postValidarPswd);

export default router;