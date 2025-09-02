import { Router } from 'express';
import * as entradaController from '../controllers/entradas.controller';
import { validate } from "../middlewares/validation.middleware";
import { createEntradaSchema, updateEntradaSchema } from '../validations/entrada.validation';

const router = Router();

router.get('/', entradaController.getAllEntradas);

router.get('/:id', entradaController.getEntradaById);

router.post('/', validate(createEntradaSchema), entradaController.createEntrada);

router.put('/:id', validate(updateEntradaSchema) , entradaController.updateEntrada);

export const entradaRoutes = router;