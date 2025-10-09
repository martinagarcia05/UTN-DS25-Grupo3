import { Router } from "express";
import { validate } from "../middlewares/validation.middleware";
import { authenticate, authorize } from '../middlewares/auth.middleware';
import * as cuotaController from "../controllers/cuotaController";
import * as cuotaValidation from "../validations/cuotas.validation";
import multer from 'multer'; 

// Configuración de Multer para guardar los archivos en la carpeta 'uploads'
const upload = multer({ dest: 'uploads/' });

// Crear router
const router = Router();

// Rutas de Cuotas (Socio)
router.get("/:id/cuotas", 
  validate(cuotaValidation.getCuotasSocioSchema),
  cuotaController.getCuotas);  // Llama a la función en el controller

router.post("/:cuotaId/comprobante", 
  upload.single('comprobante'), 
  validate(cuotaValidation.sendComprobanteSchema), 
  cuotaController.enviarComprobante);  // Llama a la función en el controller

// Rutas de Cuotas (Admin)
router.post('/', validate(cuotaValidation.createCuotaSchema), cuotaController.generarCuota); // Generar cuota
router.put('/:id', validate(cuotaValidation.updateCuotaSchema), cuotaController.updateCuota); // Actualizar cuota
router.get('/', cuotaController.getAllCuota); // Obtener todas las cuotas
router.get('/dni/:dni', cuotaController.getCuotasByDni); // Obtener cuota por DNI
router.delete('/:id', cuotaController.deleteCuota); // Eliminar cuota

export const cuotaRoutes = router;
