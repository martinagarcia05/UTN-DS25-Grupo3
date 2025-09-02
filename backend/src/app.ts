import express from "express";
<<<<<<< HEAD
// import router from "./routes/RutasSocio";
import cors from 'cors';   
import { socioRoutes } from './routes/socioRoutes';  
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { cuotaRoutes } from './routes/cuotaRoutes';
import { eventoRoutes} from './routes/evento.routes';
import { entradaRoutes } from './routes/entradas.routes';
import { socioHomeRoutes } from './routes/HomeSocioRoutes';
import { cuotasAdminRoutes } from './routes/cuotasAdminRoutes';
import { comprobanteAdminRoutes} from './routes/comprobanteAdminRoutes';
import { registroRouter } from './routes/registro.routes';

=======
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
import { ActividadRoutes } from "./routes/actividad.routes";
import { profesorRoutes } from "./routes/profesor.routes";
import { ClaseRoutes } from "./routes/clase.routes";
import { ClaseSocioRoutes } from "./routes/claseSocio.routes";
>>>>>>> develop

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use(express.json());  
app.use(logRequest);
app.use('/api/socios', socioHomeRoutes); 
<<<<<<< HEAD
app.use('/api/socios', socioRoutes);  //es la ruta de la api para los socios
=======
app.use('/api/socios', socioRoutes);  
>>>>>>> develop
app.use('/api/cuotas', cuotaRoutes);
app.use('/api/entradas', entradaRoutes);
app.use('/api/eventos', eventoRoutes);
app.use('/api/cuotas', cuotasAdminRoutes); 
app.use('/api/cuotas', comprobanteAdminRoutes); 
<<<<<<< HEAD
app.use('/api', registroRouter);  // uso las rutas definidas en RutasSocio
=======
app.use('/api/actividades', ActividadRoutes);
app.use('/api/profesores', profesorRoutes);
app.use('/api/clases', ClaseRoutes);
app.use('/api/clasesSocio', ClaseSocioRoutes);
app.use('/api', registroRouter);  
>>>>>>> develop
app.use(handleError);  

app.listen(PORT, () => {  
  console.log(`🚀 Server running on port ${PORT}`);  

});