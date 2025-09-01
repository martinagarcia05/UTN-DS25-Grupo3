import { Router } from 'express';
import * as eventoController from '../controllers/eventos.controller';
import { upload } from '../middlewares/comprobanteEntrada'
import { createEventoSchema, updateEventoSchema } from '../validations/evento.validation';
import { validate } from '../middlewares/validation.middleware';
const router = Router();

router.get('/', eventoController.getAllEvento);
router.get('/:id', eventoController.getEventoById);
router.post('/', validate(createEventoSchema), eventoController.createEvento);
router.put('/:id', validate(updateEventoSchema), eventoController.updateEvento);
router.post('/:id/venta', upload.single("comprobante"), eventoController.registrarVenta);

router.delete('/:id', eventoController.deleteEvento);

export const eventoRoutes = router;
