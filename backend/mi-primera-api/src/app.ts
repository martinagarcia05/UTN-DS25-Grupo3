import express from 'express';    
import { socioRoutes } from './routes/socioRoutes';  
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { cuotaRoutes } from './routes/cuotaRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());  
app.use(logRequest);
app.use('/api/socios', socioRoutes);  //es la ruta de la api para los socios
app.use('/api/cuotas', cuotaRoutes);
app.use(handleError);  

app.listen(PORT, () => {  
  console.log(`🚀 Server running on port ${PORT}`);  
});