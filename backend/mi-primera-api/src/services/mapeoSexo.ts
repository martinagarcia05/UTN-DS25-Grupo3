import { Sexo } from "@prisma/client"; // Prisma genera el enum en TS

function mapSexo(sexo: Sexo): Sexo {
  switch (sexo) {
    case Sexo.FEMENINO:
      return Sexo.FEMENINO;
    case Sexo.MASCULINO:
      return Sexo.MASCULINO;
    case Sexo.OTRO:
      return Sexo.OTRO;
    default:
      throw new Error(`Valor de sexo inválido: ${sexo}`);
  }
}
