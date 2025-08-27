import express from "express";
// import router from "./routes/RutasSocio";
import cors from 'cors';   
import { socioRoutes } from './routes/socio.routes';  
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { cuotaRoutes } from './routes/cuotaRoutes';
import { eventoRoutes} from './routes/evento.routes';
import { entradaRoutes } from './routes/entradas.routes';
import { socioHomeRoutes } from './routes/homeSocio.routes';
import { cuotasAdminRoutes } from './routes/cuotasAdmin.routes';
import { comprobanteAdminRoutes} from './routes/comprobanteAdmin.routes';
import { registroRouter } from './routes/registro.routes';


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