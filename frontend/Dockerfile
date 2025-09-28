<<<<<<< HEAD
# Frontend Dockerfile
FROM node:20-alpine
# Directorio de trabajo dentro del contenedor
WORKDIR /app
# Copiar solo archivos de dependencias
COPY package*.json ./
# Instalar dependencias en la imagen
RUN npm install
# Copiar el resto del código fuente
COPY . .
# Exponer el puerto que la app escucha
EXPOSE 5173
# Comando por defecto al iniciar el contenedor
=======
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
>>>>>>> aca704036acca949e92e3ebb0a699bff9bd7bab5
CMD ["npm", "run", "dev", "--", "--host"]