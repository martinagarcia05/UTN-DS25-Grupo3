export interface Cuota {  // modelo de una cuota
    nroCuota: number;  
    mes: string;  
    fecha_vencimiento: Date;  
    monto: number;  
    estado: 'PAGADA' | 'VENCIDA' | 'EN_REVISION' | 'PENDIENTE' | 'RECHAZADA'; 
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