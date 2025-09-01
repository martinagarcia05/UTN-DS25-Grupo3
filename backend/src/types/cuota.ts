export interface Cuota {  // modelo de una cuota
    nroCuota: number;  
    mes: string;  
    vencimiento: string;  
    monto: number;  
<<<<<<< HEAD
    estado: 'Aprobada' | 'Vencida' | 'En revisión'; 
=======
    estado: 'Aprobada' | 'Vencida' | 'En revisión' | 'Pendiente'; 
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
    comprobanteUrl?: string; 
  }
  
  export interface GetCuotasRequest {  
    mes?: string; 
  }
  
  export interface GetCuotasResponse {  
    cuotas: Cuota[];  
    message?: string;  
  }
  
  export interface EnviarComprobanteRequest {  
  comprobante: Express.Multer.File;  
}
  
  export interface EnviarComprobanteResponse { 
    success: boolean;  
    message?: string;  
  }