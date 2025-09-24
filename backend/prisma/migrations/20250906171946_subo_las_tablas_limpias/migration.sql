-- CreateEnum
CREATE TYPE "public"."FormaDePago" AS ENUM ('CBU', 'EFECTIVO');

-- CreateEnum
CREATE TYPE "public"."Sexo" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');

-- CreateEnum
CREATE TYPE "public"."DiaSemana" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "public"."estado_cuota" AS ENUM ('PENDIENTE', 'VENCIDA', 'PAGADA', 'EN_REVISION');

-- CreateEnum
CREATE TYPE "public"."Mes" AS ENUM ('ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE');

-- CreateEnum
CREATE TYPE "public"."EstadoReserva" AS ENUM ('ACTIVA', 'CANCELADA', 'COMPLETADA');

-- CreateEnum
CREATE TYPE "public"."paisesLatam" AS ENUM ('ARGENTINA', 'BOLIVIA', 'BRASIL', 'CHILE', 'COLOMBIA', 'COSTA RICA', 'CUBA', 'ECUADOR', 'EL SALVADOR', 'GUATEMALA', 'HONDURAS', 'MEXICO', 'NICARAGUA', 'PANAMA', 'PARAGUAY', 'PERU', 'PUERTO RICO', 'REPUBLICA DOMINICANA', 'URUGUAY', 'VENEZUELA');

-- CreateTable
CREATE TABLE "public"."Evento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "precioEntrada" DOUBLE PRECISION NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Entrada" (
    "id" SERIAL NOT NULL,
    "eventoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fechaCompra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "socioId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comprobanteUrl" TEXT,
    "formaDePago" "public"."FormaDePago" NOT NULL DEFAULT 'EFECTIVO',

    CONSTRAINT "Entrada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Socio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "pais" "public"."paisesLatam" NOT NULL,
    "sexo" "public"."Sexo" NOT NULL,
    "fotoCarnet" TEXT,
    "dni" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Socio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Clase" (
    "id" SERIAL NOT NULL,
    "diaSemana" "public"."DiaSemana" NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "actividadId" INTEGER NOT NULL,
    "profesorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Clase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Actividad" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Actividad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cuota" (
    "id" SERIAL NOT NULL,
    "fecha_pago" DATE,
    "metodo_pago" "public"."FormaDePago" NOT NULL,
    "monto" DECIMAL(12,3) NOT NULL,
    "estado" "public"."estado_cuota" NOT NULL DEFAULT 'PENDIENTE',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "socio_id" INTEGER NOT NULL,
    "mes" "public"."Mes",

    CONSTRAINT "Cuota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cuotaXactividad" (
    "id" SERIAL NOT NULL,
    "cuotaId" INTEGER NOT NULL,
    "actividadId" INTEGER NOT NULL,
    "monto" DECIMAL(12,3) NOT NULL,

    CONSTRAINT "cuotaXactividad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comprobante" (
    "id" SERIAL NOT NULL,
    "cuotaId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "subido_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comprobante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Profesor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profesor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClaseSocio" (
    "id" SERIAL NOT NULL,
    "claseId" INTEGER NOT NULL,
    "socioId" INTEGER NOT NULL,

    CONSTRAINT "ClaseSocio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reserva" (
    "id" SERIAL NOT NULL,
    "cancha" TEXT NOT NULL,
    "deporte" TEXT NOT NULL,
    "fecha" DATE NOT NULL,
    "hora" TEXT NOT NULL,
    "estado" "public"."EstadoReserva" NOT NULL DEFAULT 'ACTIVA',
    "socioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Socio_dni_key" ON "public"."Socio"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Socio_usuarioId_key" ON "public"."Socio"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE INDEX "id_cuota_estado" ON "public"."Cuota"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "Cuota_socio_id_mes_key" ON "public"."Cuota"("socio_id", "mes");

-- CreateIndex
CREATE UNIQUE INDEX "cuotaXactividad_cuotaId_actividadId_key" ON "public"."cuotaXactividad"("cuotaId", "actividadId");

-- CreateIndex
CREATE UNIQUE INDEX "Comprobante_cuotaId_activo_key" ON "public"."Comprobante"("cuotaId", "activo");

-- CreateIndex
CREATE UNIQUE INDEX "Profesor_email_key" ON "public"."Profesor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ClaseSocio_claseId_socioId_key" ON "public"."ClaseSocio"("claseId", "socioId");

-- CreateIndex
CREATE INDEX "Reserva_socioId_idx" ON "public"."Reserva"("socioId");

-- CreateIndex
CREATE INDEX "Reserva_fecha_idx" ON "public"."Reserva"("fecha");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_cancha_fecha_hora_key" ON "public"."Reserva"("cancha", "fecha", "hora");

-- AddForeignKey
ALTER TABLE "public"."Entrada" ADD CONSTRAINT "Entrada_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "public"."Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Entrada" ADD CONSTRAINT "Entrada_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "public"."Socio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Socio" ADD CONSTRAINT "Socio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Clase" ADD CONSTRAINT "Clase_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "public"."Actividad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Clase" ADD CONSTRAINT "Clase_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "public"."Profesor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cuota" ADD CONSTRAINT "Cuota_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "public"."Socio"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."cuotaXactividad" ADD CONSTRAINT "cuotaXactividad_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "public"."Actividad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cuotaXactividad" ADD CONSTRAINT "cuotaXactividad_cuotaId_fkey" FOREIGN KEY ("cuotaId") REFERENCES "public"."Cuota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comprobante" ADD CONSTRAINT "Comprobante_cuotaId_fkey" FOREIGN KEY ("cuotaId") REFERENCES "public"."Cuota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClaseSocio" ADD CONSTRAINT "ClaseSocio_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "public"."Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClaseSocio" ADD CONSTRAINT "ClaseSocio_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "public"."Socio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reserva" ADD CONSTRAINT "Reserva_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "public"."Socio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
