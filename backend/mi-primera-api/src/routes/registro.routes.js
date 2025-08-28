"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroRouter = void 0;
const express_1 = require("express");
const registro_controller_1 = require("../controllers/registro.controller");
const router = (0, express_1.Router)();
// Ruta para registrar un socio
router.post('/registro', registro_controller_1.registroController);
// Ruta para login (socio o admin)
router.post('/login', registro_controller_1.loginController);
exports.registroRouter = router;
//# sourceMappingURL=registro.routes.js.map