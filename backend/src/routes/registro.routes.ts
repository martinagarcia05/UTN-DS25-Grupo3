import { Router } from 'express';
import { registroController, loginController } from '../controllers/registro.controller';

const router = Router();

// Ruta para registrar un socio
router.post('/registro', registroController);

// Ruta para login (socio o admin)
router.post('/login', loginController);

export const registroRouter = router;

