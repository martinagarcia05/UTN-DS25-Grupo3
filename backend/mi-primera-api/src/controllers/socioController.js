"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidarPswd = exports.postSocio = void 0;
exports.updateSocio = updateSocio;
const express_1 = require("express");
const Socio_1 = require("../models/Socio");
const socioService_1 = require("../services/socioService");
const Socio_2 = require("../types/Socio"); // importo las interfaces
// let socios = [
//     { nombre: 'Martina', apellido: 'Garcia Amendola', dni: 46628935, email: 'marti.garcia.amendola@gmail.com', pswd: '1234' },
//     { nombre: 'Milagros', apellido: 'Crespo', dni: 22222222, email: 'milicrespo@yahoo.com.ar', pswd: '0000' },
//     { nombre: 'Lucia', apellido: 'Meza', dni: 22444222, email: 'Lulimeza04@hotmail.com', pswd: '9000' },
//     { nombre: 'Valentin', apellido: 'Rodriguez', dni: 22444022, email: 'valentinrodriguez2903@gmail.com', pswd: '9900' },
//     { nombre: 'Tomas', apellido: 'Bellizzi', dni: 22499922, email: 'tomy.bellizzi@gmail.com', pswd: '8800' },
//     { nombre: 'Admin', apellido: 'Admin', dni: 0, email: 'admin@gmail.com', pswd: '@dmIn1234' }
// ];
async function updateSocio(req, res, next) {
    try {
        const id = parseInt(req.params.id); // obtengo el ID de la URL y lo convierto a int
        const updatedSocio = await (0, socioService_1.updateSocio)(id, req.body); // llamo al servidor para actualizar con los datos del body
        res.json(updatedSocio); // mando el socio actualizado como respuesta JSON
    }
    catch (error) {
        next(error);
    }
}
//Endpoint para registrar socio
const postSocio = (req, res) => {
    const { nombre, apellido, dni, email, pswd } = req.body;
    if (!socios.find(s => s.dni === dni)) {
        res.status(201).json({
            message: "Socio creado",
            socio: { nombre, apellido, dni, email, pswd }
        });
    }
    else {
        res.status(400).json({ message: 'El socio ya existe' });
    }
};
exports.postSocio = postSocio;
//Endpoint para validar la cuenta del socio: recibe contraseña y devuelve t o f dependiendo si es correcta
const postValidarPswd = (req, res) => {
    //const dniS = parseInt(req.params.dni)
    const { dni, pswd } = req.body; // recibe contraseña en el cuerpo
    const socio = socios.find(s => s.dni === dni);
    if (!socio) {
        return res.status(404).json({ message: 'El socio no se ha encontrado' });
    }
    const esValida = socio.pswd === pswd;
    res.json({ valid: esValida });
};
exports.postValidarPswd = postValidarPswd;


const getSocioByDni = (req, res)  => {
  const dni = Number(req.params.dni);
  console.log("Buscando socio con DNI:", dni);  

  if (isNaN(dni)) return res.status(400).json({ error: 'DNI inválido' });

  try {
    const socio = socioService_1.getSocioByDni(dni);
    if (!socio) return res.status(404).json({ error: 'Socio no encontrado' });
    res.json(socio); // devuelve { id: 1 } si existe
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar socio' });
  }
}
exports.getSocioByDni = getSocioByDni
//# sourceMappingURL=socioController.js.map