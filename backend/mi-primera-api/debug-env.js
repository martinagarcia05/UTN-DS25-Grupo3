const dotenv = require('dotenv');
const path = require('path');

// Ruta absoluta al archivo .env (corregida: subir 2 niveles, no 3)
const envPath = path.resolve('../../.env');
console.log('Ruta del archivo .env:', envPath);

// Intenta cargar el archivo
const result = dotenv.config({ path: envPath });
console.log('Resultado de dotenv.config():', result);

// Imprime la variable
console.log('DATABASE_URL:', process.env.DATABASE_URL);