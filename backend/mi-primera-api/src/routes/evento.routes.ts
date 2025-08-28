import { Router } from 'express';
import * as eventoController from '../controllers/eventos.controller';
import { upload } from '../middlewares/comprobanteEntrada'
const router = Router();

router.get('/', eventoController.getAllEvento);
router.get('/:id', eventoController.getEventoById);
router.post('/', eventoController.createEvento);
router.put('/:id', eventoController.updateEvento);
router.post('/:id/venta', upload.single("comprobante"), eventoController.registrarVenta);

router.delete('/:id', eventoController.deleteEvento);

export const eventoRoutes = router;
