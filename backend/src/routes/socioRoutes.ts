import { Router } from 'express';
import { getAllSocios, getSocioByDni, getSocioCompletoByDni, updateSocio } from '../controllers/socioController';  // Añade updateSocio

const router = Router();

router.get('/dni/:dni', getSocioByDni);  // devuelve solo el ID
router.get('/dni/:dni/full', getSocioCompletoByDni);  // Devuelve datos completos
router.put('/', updateSocio);  // Nueva ruta para actualizar socio
router.get('/', getAllSocios);

<<<<<<< HEAD



=======
>>>>>>> develop
export const socioRoutes = router;