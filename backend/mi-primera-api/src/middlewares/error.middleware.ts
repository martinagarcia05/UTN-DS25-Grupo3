import { Request, Response, NextFunction } from 'express';

export function handleError(err: any, req: Request, res: Response, next: NextFunction) {
  const timestamp = new Date().toISOString();
  // CAMBIO CLAVE: Imprime el objeto de error completo, no solo el mensaje.
  console.error(`[${timestamp}] ❌ Error:`, err); 

  const statusCode = err?.statusCode || (err?.code === 'P2025' ? 404 : 500);
  
  res.status(statusCode).json({
    error: statusCode === 500 ? 'Internal server error' : err?.name || 'Error',
    message: err?.message || 'Unknown error',
    timestamp
  });
}