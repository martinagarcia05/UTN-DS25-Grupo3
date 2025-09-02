import { Router } from 'express';
import * as entradaController from '../controllers/entradas.controller';
<<<<<<< HEAD
=======
import { validate } from "../middlewares/validation.middleware";
import { createEntradaSchema, updateEntradaSchema } from '../validations/entrada.validation';
>>>>>>> develop

const router = Router();

router.get('/', entradaController.getAllEntradas);

router.get('/:id', entradaController.getEntradaById);

<<<<<<< HEAD
router.post('/', entradaController.createEntrada);

router.put('/:id', entradaController.updateEntrada);
=======
router.post('/', validate(createEntradaSchema), entradaController.createEntrada);

router.put('/:id', validate(updateEntradaSchema) , entradaController.updateEntrada);
>>>>>>> develop

export const entradaRoutes = router;