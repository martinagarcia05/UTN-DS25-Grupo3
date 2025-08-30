import express from "express";
import cors from 'cors';   
import { socioRoutes } from '../src/routes/socioRoutes';  
import { handleError } from '../src/middlewares/error.middleware';
import { logRequest } from '../src/middlewares/logger.middleware';
import { cuotaRoutes } from '../src/routes/cuotaRoutes';
import { eventoRoutes} from '../src//routes/evento.routes';
import { entradaRoutes } from '../src/routes/entradas.routes';
import { socioHomeRoutes } from '../src/routes/HomeSocioRoutes';
import { cuotasAdminRoutes } from '../src/routes/cuotasAdminRoutes';
import { comprobanteAdminRoutes} from '../src/routes/comprobanteAdminRoutes';
import { registroRouter } from '../src/routes/registro.routes';
import prisma from './config/prisma'

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use(express.json());  
app.use(logRequest);
app.use('/api/socios', socioHomeRoutes); 
app.use('/api/socios', socioRoutes);  //es la ruta de la api para los socios
app.use('/api/cuotas', cuotaRoutes);
app.use('/api/entradas', entradaRoutes);
app.use('/api/eventos', eventoRoutes);
app.use('/api/cuotas', cuotasAdminRoutes); 
app.use('/api/cuotas', comprobanteAdminRoutes); 
app.use('/api', registroRouter);  // uso las rutas definidas en RutasSocio
app.use(handleError);  

app.listen(PORT, () => {  
  console.log(`🚀 Server running on port ${PORT}`);  

});