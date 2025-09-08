/*
  Warnings:
  - The values [M,F] on the enum `Sexo` will be removed. If these variants are still used in the database, this will fail.
  - The `formaDePago` column on the `Entrada` table would be dropped and recreated. This will lead to data loss if there is data in the column.
*/
-- CreateEnum
CREATE TYPE "public"."forma_de_pago" AS ENUM ('EFECTIVO', 'CBU');

-- CreateEnum
CREATE TYPE "public"."DiaSemana" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "public"."estado_cuota" AS ENUM ('PENDIENTE', 'VENCIDA', 'PAGADA', 'EN_REVISION');

-- CreateEnum
CREATE TYPE "public"."Mes" AS ENUM ('ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."Sexo_new" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');
ALTER TABLE "public"."Socio" ALTER COLUMN "sexo" TYPE "public"."Sexo_new" USING ("sexo"::text::"public"."Sexo_new");
ALTER TYPE "public"."Sexo" RENAME TO "Sexo_old";
ALTER TYPE "public"."Sexo_new" RENAME TO "Sexo";
DROP TYPE "public"."Sexo_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."Entrada" DROP COLUMN "formaDePago",
ADD COLUMN     "formaDePago" "public"."forma_de_pago" NOT NULL DEFAULT 'EFECTIVO';

-- DropEnum
DROP TYPE "public"."FormaDePago";

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
    "metodo_pago" "public"."forma_de_pago" NOT NULL,
    "monto" DECIMAL(12,3) NOT NULL,
    "estado" "public"."estado_cuota" NOT NULL DEFAULT 'PENDIENTE',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "socio_id" INTEGER NOT NULL,
    "mes" "public"."Mes" NOT NULL,

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

-- AddForeignKey
ALTER TABLE "public"."Clase" ADD CONSTRAINT "Clase_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "public"."Actividad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Clase" ADD CONSTRAINT "Clase_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "public"."Profesor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cuota" ADD CONSTRAINT "Cuota_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "public"."Socio"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."cuotaXactividad" ADD CONSTRAINT "cuotaXactividad_cuotaId_fkey" FOREIGN KEY ("cuotaId") REFERENCES "public"."Cuota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cuotaXactividad" ADD CONSTRAINT "cuotaXactividad_actividadId_fkey" FOREIGN KEY ("actividadId") REFERENCES "public"."Actividad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comprobante" ADD CONSTRAINT "Comprobante_cuotaId_fkey" FOREIGN KEY ("cuotaId") REFERENCES "public"."Cuota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClaseSocio" ADD CONSTRAINT "ClaseSocio_claseId_fkey" FOREIGN KEY ("claseId") REFERENCES "public"."Clase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClaseSocio" ADD CONSTRAINT "ClaseSocio_socioId_fkey" FOREIGN KEY ("socioId") REFERENCES "public"."Socio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
