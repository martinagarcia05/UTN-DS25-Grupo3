"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSocio = updateSocio;
exports.getSocioByDni = getSocioByDni;
const Socio_1 = require("../types/Socio");

async function getSocioByDni(dni) {
  return prisma.socio.findFirst({
    where: { dni },
    select: {
      id: true,
    }
  });
}
// let socios = [
//     { id: 1, nombre: 'Mili', apellido: 'Crespo', dni: '12345678', email: 'mili@crespo.com', fechaNacimiento: '15/05/1990', pais: 'Argentina', sexo: 'femenino', fotoCarnet: '/uploads/mili.jpg' }
// ];
// const isValidDateFormat = (date) => {
//     const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/; //compruebo el formato
//     if (!regex.test(date))
//         return false;
//     const [, day, month, year] = date.match(regex).map(Number);
//     const dateObj = new Date(year, month - 1, day);
//     return dateObj.getDate() === day && dateObj.getMonth() === month - 1 && dateObj.getFullYear() === year;
// };
async function updateSocio(id, updateData) {
    const socioIndex = socios.findIndex(s => s.id === id);
    if (socioIndex === -1) {
        const error = new Error('Socio no encontrado');
        error.statusCode = 404;
        throw error;
    }
    if (updateData.fechaNacimiento && !isValidDateFormat(updateData.fechaNacimiento)) { // si esta mal la fecha, da error 400
        const error = new Error('Formato de fecha inválido');
        error.statusCode = 400;
        throw error;
    }
    socios[socioIndex] = { ...socios[socioIndex], ...updateData }; // Actualiza el socio mezclando datos existentes con nuevos
    return socios[socioIndex]; // devuelve el socio actualizado
}
// //# sourceMappingURL=socioService.js.map