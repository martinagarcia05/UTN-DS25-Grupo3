import {  ActualizarSocioRequest, GetSocioResponse, Socio } from '../types/Socio'; 


let socios: Socio[] = [  //simulo la base de datos
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    dni: 30111222,
    email: "juan.perez@example.com",
    fechaNacimiento: new Date("1990-05-14"),
    pais: "Argentina",
    sexo: "masculino",
    fotoCarnet: null,
    usuarioId: 1,
  },
  {
    id: 2,
    nombre: "María",
    apellido: "González",
    dni: 32233444,
    email: "maria.gonzalez@example.com",
    fechaNacimiento: new Date("1992-11-02"),
    pais: "Argentina",
    sexo: "femenino",
    fotoCarnet: null,
    usuarioId: 2,
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    dni: 29333444,
    email: "carlos.lopez@example.com",
    fechaNacimiento: new Date("1988-03-22"),
    pais: "Uruguay",
    sexo: "masculino",
    fotoCarnet: null,
    usuarioId: 3,
  },
  {
    id: 4,
    nombre: "Lucía",
    apellido: "Martínez",
    dni: 31222111,
    email: "lucia.martinez@example.com",
    fechaNacimiento: new Date("1995-07-19"),
    pais: "Chile",
    sexo: "femenino",
    fotoCarnet: null,
    usuarioId: 4,
  },
  {
    id: 5,
    nombre: "Diego",
    apellido: "Ramírez",
    dni: 30555444,
    email: "diego.ramirez@example.com",
    fechaNacimiento: new Date("1985-01-10"),
    pais: "Paraguay",
    sexo: "masculino",
    fotoCarnet: null,
    usuarioId: 5,
  },
  {
    id: 6,
    nombre: "Ana",
    apellido: "Fernández",
    dni: 34444111,
    email: "ana.fernandez@example.com",
    fechaNacimiento: new Date("1998-09-25"),
    pais: "Argentina",
    sexo: "femenino",
    fotoCarnet: null,
    usuarioId: 6,
  },
  {
    id: 7,
    nombre: "Martín",
    apellido: "Suárez",
    dni: 29999111,
    email: "martin.suarez@example.com",
    fechaNacimiento: new Date("1993-04-12"),
    pais: "Argentina",
    sexo: "masculino",
    fotoCarnet: null,
    usuarioId: 7,
  },
  {
    id: 8,
    nombre: "Florencia",
    apellido: "Cabrera",
    dni: 33555111,
    email: "florencia.cabrera@example.com",
    fechaNacimiento: new Date("1997-12-30"),
    pais: "Bolivia",
    sexo: "femenino",
    fotoCarnet: null,
    usuarioId: 8,
  },
  {
    id: 9,
    nombre: "Ricardo",
    apellido: "Morales",
    dni: 28888111,
    email: "ricardo.morales@example.com",
    fechaNacimiento: new Date("1982-08-15"),
    pais: "Argentina",
    sexo: "masculino",
    fotoCarnet: null,
    usuarioId: 9,
  },
  {
    id: 10,
    nombre: "Camila",
    apellido: "Domínguez",
    dni: 33000222,
    email: "camila.dominguez@example.com",
    fechaNacimiento: new Date("2000-06-05"),
    pais: "Perú",
    sexo: "femenino",
    fotoCarnet: null,
    usuarioId: 10,
  },
];

const isValidDateFormat = (date: Date): boolean => {  //funcion que valida la fecha 
  const dateString: string = date.toLocaleDateString();
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;  //compruebo el formato
  if (!regex.test(dateString)) return false;  
  const [, day, month, year] = dateString.match(regex)!.map(Number);  
  const dateObj = new Date(year, month - 1, day);  
  return dateObj.getDate() === day && dateObj.getMonth() === month - 1 && dateObj.getFullYear() === year;  
};

export async function updateSocio(id: number, updateData: ActualizarSocioRequest): Promise<Socio> {  // funcion para actualizar un socio usando la interface actualizarSocioRequest
  const socioIndex = socios.findIndex(s => s.id === id); 
  if (socioIndex === -1) {  
    const error = new Error('Socio no encontrado');
    (error as any).statusCode = 404;
    throw error;
  }
  if (updateData.fechaNacimiento && !isValidDateFormat(updateData.fechaNacimiento)) {  // si esta mal la fecha, da error 400
    const error = new Error('Formato de fecha inválido');
    (error as any).statusCode = 400;
    throw error;
  }
  socios[socioIndex] = { ...socios[socioIndex], ...updateData };  // Actualiza el socio mezclando datos existentes con nuevos
  return socios[socioIndex];  // devuelve el socio actualizado
}

