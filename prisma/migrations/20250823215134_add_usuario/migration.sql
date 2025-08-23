/*
  Warnings:

  - A unique constraint covering the columns `[dni]` on the table `Socio` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `dni` on the `Socio` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Socio" DROP COLUMN "dni",
ADD COLUMN     "dni" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Socio_dni_key" ON "public"."Socio"("dni");
