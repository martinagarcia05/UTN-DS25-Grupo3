import { Request, Response, NextFunction } from 'express'; 

export function handleError(err: any, req: Request, res: Response, next: NextFunction) {  
  const timestamp = new Date().toISOString();  
  console.log(`[${timestamp}] ❌ Error:`, err.message);  
  const statusCode = err.statusCode || 500;  
  res.status(statusCode).json({  
    error: 'Internal server error',  
    message: err.message,  
    timestamp  
  });
}