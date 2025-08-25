export interface Cuota {  // modelo de una cuota
    nroCuota: number;  
    mes: string;  
    vencimiento: string;  
    monto: number;  
    estado: 'Aprobada' | 'Vencida' | 'En revisión' | 'Pendiente'; 
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