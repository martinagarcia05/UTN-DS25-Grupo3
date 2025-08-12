import { Router } from "express";
import { postSocio, postValidarPswd } from '../controllers/SocioController';

const router = Router();

router.post('/', postSocio);
router.post('/validar', postValidarPswd);

export default router;