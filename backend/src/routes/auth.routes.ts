import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { validate } from '../middlewares/validation.middleware';
import { LoginSchema } from '../validations/auth.validation';

const router = Router();

router.post('/login',
   validate(LoginSchema),
   authController.login
);

export const authRoutes = router