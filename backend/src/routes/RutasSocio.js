"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const socioController_1 = require("../controllers/socioController");
const router = (0, express_1.Router)();
router.post('/', socioController_1.postSocio);
router.post('/validar', socioController_1.postValidarPswd);
exports.default = router;
//# sourceMappingURL=RutasSocio.js.map