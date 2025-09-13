import { Request,  Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?:{
                id: number;
                email: string;
                role: 'USER' | 'ADMIN';
            }
        }
    }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Token no proporcionado' });
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token!, process.env['JWT_SECRET']!) as any;
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role
        };
        next();
    }catch (error: any) {
        console.error('Error en autenticación:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token expirado' });
        } 
        res.status(401).json({ success: false, message: 'Token inválido' });
    }
}

export function authorize(...roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ success: false, message: 'No autenticado' });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ success: false, message: 'No tiene permisos para esta accion' });
        }
        next();
    };
}
