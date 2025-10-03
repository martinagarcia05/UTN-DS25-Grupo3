import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import {  UpdateUserSchema } from '../validations/user.validation';
import { upload } from '../middlewares/comprobanteEntrada';

const router = Router();

router.get(
   '/',
   authenticate,        
   userController.getAllUsers
);
router.get(
   '/:id',
   authenticate,
   userController.getUserById
);

router.put('/:id',
   authenticate,
   upload.single("foto"),
   validate(UpdateUserSchema),
   userController.updateUser
);

router.delete('/:id',
   authenticate,
   authorize('ADMIN'),
   userController.deleteUser
);
export const userRoutes = router;