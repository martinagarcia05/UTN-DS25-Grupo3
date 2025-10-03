import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import {
  createCuotaSchema,
  updateCuotaSchema,
} from '../validations/cuotaAdmin.validation';
import * as cuotasAdminController from '../controllers/cuotasAdminController';

const router = Router();

// Crear una cuota (ADMIN)
router.post('/', validate(createCuotaSchema), cuotasAdminController.generarCuota); // <-- esta es la ruta que debe usar la nueva función

// Actualizar una cuota (ADMIN)
router.put('/:id', validate(updateCuotaSchema), cuotasAdminController.updateCuota);

// Listar todas las cuotas (ADMIN)
router.get('/', cuotasAdminController.getAllCuota);

// Obtener una cuota por DNI (ADMIN)
router.get('/dni/:dni', cuotasAdminController.getCuotasByDni);

// Eliminar una cuota (ADMIN)
router.delete('/:id', cuotasAdminController.deleteCuota);

export default router;
