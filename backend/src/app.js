"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RutasSocio_1 = __importDefault(require("./routes/RutasSocio"));
const cors_1 = __importDefault(require("cors"));
const socioRoutes_1 = require("./routes/socioRoutes");
const error_middleware_1 = require("./middlewares/error.middleware");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const cuotaRoutes_1 = require("./routes/cuotaRoutes");
const evento_routes_1 = require("./routes/evento.routes");
const entradas_routes_1 = require("./routes/entradas.routes");
const HomeSocioRoutes_1 = require("./routes/HomeSocioRoutes");
const cuotasAdminRoutes_1 = require("./routes/cuotasAdminRoutes");
const comprobanteAdminRoutes_1 = require("./routes/comprobanteAdminRoutes");
const registro_routes_1 = require("./routes/registro.routes");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(logger_middleware_1.logRequest);
app.use('/api/socios', HomeSocioRoutes_1.socioHomeRoutes);
app.use('/api/socios', socioRoutes_1.socioRoutes); //es la ruta de la api para los socios
app.use('/api/cuotas', cuotaRoutes_1.cuotaRoutes);
app.use('/api/entradas', entradas_routes_1.entradaRoutes);
app.use('/api/eventos', evento_routes_1.eventoRoutes);
app.use('/api/cuotas', cuotasAdminRoutes_1.cuotasAdminRoutes);
app.use('/api/cuotas', comprobanteAdminRoutes_1.comprobanteAdminRoutes);
app.use('/api', registro_routes_1.registroRouter); // uso las rutas definidas en RutasSocio
app.use(error_middleware_1.handleError);
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map