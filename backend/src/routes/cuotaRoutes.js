"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuotaRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer")); //para manejar la carga de archivos!!
const cuotaController_1 = require("../controllers/cuotaController");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
router.post('/:cuotaId/comprobante', upload.single('comprobante'), cuotaController_1.enviarComprobante);
exports.cuotaRoutes = router;
//# sourceMappingURL=cuotaRoutes.js.map