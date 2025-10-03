-- CreateTable
CREATE TABLE "public"."Administrativo" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" TEXT NOT NULL,

    CONSTRAINT "Administrativo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrativo_usuarioId_key" ON "public"."Administrativo"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Administrativo_dni_key" ON "public"."Administrativo"("dni");

-- AddForeignKey
ALTER TABLE "public"."Administrativo" ADD CONSTRAINT "Administrativo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
