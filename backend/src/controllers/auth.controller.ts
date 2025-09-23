import { RequestHandler } from 'express';
import * as authService from '../services/auth.service';
import { LoginRequest, LoginResponse } from '../types/auth';

export const login: RequestHandler<{}, LoginResponse, LoginRequest> = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};