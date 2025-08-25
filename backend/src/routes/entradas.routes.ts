import { Router } from 'express';
import * as entradaController from '../controllers/entradas.controller';

const router = Router();

router.get('/', entradaController.getAllEntradas);

router.get('/:id', entradaController.getEntradaById);

router.post('/', entradaController.createEntrada);

router.put('/:id', entradaController.updateEntrada);

export const entradaRoutes = router;