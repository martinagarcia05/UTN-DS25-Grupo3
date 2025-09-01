import { Router } from 'express';
import * as eventoController from '../controllers/eventos.controller';
<<<<<<< HEAD

=======
import { upload } from '../middlewares/comprobanteEntrada'
import { createEventoSchema, updateEventoSchema } from '../validations/evento.validation';
import { validate } from '../middlewares/validation.middleware';
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
const router = Router();

router.get('/', eventoController.getAllEvento);
router.get('/:id', eventoController.getEventoById);
<<<<<<< HEAD
router.post('/', eventoController.createEvento);
router.put('/:id', eventoController.updateEvento);

router.post('/:id/venta', eventoController.registrarVenta);
=======
router.post('/', validate(createEventoSchema), eventoController.createEvento);
router.put('/:id', validate(updateEventoSchema), eventoController.updateEvento);
router.post('/:id/venta', upload.single("comprobante"), eventoController.registrarVenta);
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03

router.delete('/:id', eventoController.deleteEvento);

export const eventoRoutes = router;
