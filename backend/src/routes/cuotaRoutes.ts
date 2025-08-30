import { Router } from 'express';
import multer from 'multer';    //para manejar la carga de archivos!!
import { enviarComprobante } from '../controllers/cuotaController';

const router = Router();

const upload = multer({ dest: 'uploads/' });

router.post('/:cuotaId/comprobante', upload.single('comprobante'), enviarComprobante);

export const cuotaRoutes = router;