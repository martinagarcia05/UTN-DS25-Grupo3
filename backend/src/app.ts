require('dotenv').config();
import express from 'express';
import cors from 'cors';
import path from 'path';

import prisma from './config/prisma';

// Middlewares
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';

// Rutas de dominio
import socioRoutes from './routes/socioRoutes';
import { socioHomeRoutes } from './routes/HomeSocioRoutes';
import { cuotaRoutes } from './routes/cuotaRoutes';
import { cuotasAdminRoutes } from './routes/cuotasAdminRoutes';
import { comprobanteAdminRoutes } from './routes/comprobanteAdminRoutes';
import { eventoRoutes } from './routes/evento.routes';
import { entradaRoutes } from './routes/entradas.routes';
import { ActividadRoutes } from './routes/actividad.routes';
import { profesorRoutes } from './routes/profesor.routes';
import { ClaseRoutes } from './routes/clase.routes';
import { actividadSocioRoutes } from './routes/actividadSocio.routes';
import reservaRoutes from './routes/reserva.routes';
import canchaRoutes from './routes/cancha.routes';

// Rutas de autenticación/usuarios
import { authRoutes } from './routes/auth.routes';
import { userRoutes } from './routes/user.routes';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequest);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/socios', socioHomeRoutes);
app.use('/api/socios', socioRoutes);
app.use('/api/cuotas', cuotaRoutes);
app.use('/api/cuotas', cuotasAdminRoutes);
app.use('/api/cuotas', comprobanteAdminRoutes);
app.use('/api/entradas', entradaRoutes);
app.use('/api/eventos', eventoRoutes);
app.use('/api/actividades', ActividadRoutes);
app.use('/api/profesores', profesorRoutes);
app.use('/api/clases', ClaseRoutes);
app.use('/api/actividadSocio', actividadSocioRoutes);
app.use('/api/reserva', reservaRoutes);
app.use('/api/canchas', canchaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
