"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socioRoutes = void 0;
const express_1 = require("express");
const socioController_1 = require("../controllers/socioController");
const router = (0, express_1.Router)();
router.put('/:id', socioController_1.updateSocio);
router.get('/dni/:dni', socioController_1.getSocioByDni);
//router.get('/:id/cuotas', getCuotas);
exports.socioRoutes = router;
//# sourceMappingURL=socioRoutes.js.map