interface RegistroRequest{
    nombre: string
    apellido: string
    dni: number
    password: string
}

interface RegistroResponse{
    estadoIngreso: 'ingresoExitoso' | 'ingresoFallido'
}
