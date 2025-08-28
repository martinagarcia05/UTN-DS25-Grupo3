"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registroController = void 0;
const express_1 = require("express");
const registro_service_1 = require("../services/registro.service");
const registro_1 = require("../types/registro");
const login_1 = require("../types/login");
const registroController = async (req, res) => {
    try {
        const body = req.body;
        const resultado = await (0, registro_service_1.registrarSocio)(body);
        return res.status(resultado.estadoIngreso === 'ingresoExitoso' ? 201 : 400).json(resultado);
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ estadoIngreso: 'ingresoFallido', mensaje: error.message });
    }
};
exports.registroController = registroController;
const loginController = async (req, res) => {
    try {
        const body = req.body;
        const resultado = await (0, registro_service_1.loginUsuario)(body);
        if ('token' in resultado && resultado.token) {
            // Incluimos usuario en la respuesta
            const respuesta = {
                rol: resultado.rol,
                token: resultado.token,
                mensaje: resultado.mensaje,
                usuario: resultado.usuario
            };
            return res.status(200).json(respuesta);
        }
        else {
            return res.status(401).json({
                rol: resultado.rol,
                mensaje: resultado.mensaje
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: 'Login fallido', error: error.message });
    }
};
exports.loginController = loginController;
//# sourceMappingURL=registro.controller.js.map