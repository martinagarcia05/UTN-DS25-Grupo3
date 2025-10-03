import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { validate } from '../middlewares/validation.middleware';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import {  UpdateUserSchema } from '../validations/user.validation';

const router = Router();

router.get(
   '/',
   authenticate,
   authorize('ADMIN'),          
   userController.getAllUsers
);
router.get(
   '/:id',
   authenticate,
   authorize('ADMIN'),
   userController.getUserById
);

router.put('/:id',
   authenticate,
   authorize('ADMIN'),
   validate(UpdateUserSchema),
   userController.updateUser
);
router.delete('/:id',
   authenticate,
   authorize('ADMIN'),
   userController.deleteUser
);
export const userRoutes = router;