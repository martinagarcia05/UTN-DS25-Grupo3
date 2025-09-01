import { Router } from 'express';
import * as entradaController from '../controllers/entradas.controller';
<<<<<<< HEAD
=======
import { validate } from "../middlewares/validation.middleware";
import { createEntradaSchema, updateEntradaSchema } from '../validations/entrada.validation';
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

const router = Router();

router.get('/', entradaController.getAllEntradas);

router.get('/:id', entradaController.getEntradaById);

<<<<<<< HEAD
router.post('/', entradaController.createEntrada);

router.put('/:id', entradaController.updateEntrada);
=======
router.post('/', validate(createEntradaSchema), entradaController.createEntrada);

router.put('/:id', validate(updateEntradaSchema) , entradaController.updateEntrada);
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

export const entradaRoutes = router;