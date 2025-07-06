// Servicio para envío de emails
const EMAIL_API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

const EMAIL_SERVICE_ID = 'service_q66bl5r'; // Service ID de tu servicio de email
const EMAIL_TEMPLATE_ID = 'template_fknjisx'; // Template ID de tu template
const EMAIL_USER_ID = 'hFSQ9leoar8oSvyda'; // Public Key (User ID) de tu cuenta

export const emailService = {
  // Enviar email de confirmación de compra (para SocioEntradas)
  async enviarEmailCompra(datosCompra) {
    try {
      console.log('Iniciando envío de email...');
      console.log('Datos de compra:', datosCompra);
      
      const templateParams = {
        to_email: datosCompra.comprador.email,
        to_name: `${datosCompra.comprador.nombre} ${datosCompra.comprador.apellido}`,
        evento_nombre: datosCompra.nombreEvento,
        evento_fecha: datosCompra.fecha,
        evento_hora: datosCompra.hora,
        evento_ubicacion: datosCompra.ubicacion,
        cantidad_entradas: datosCompra.cantidad,
        precio_unitario: datosCompra.precioUnitario,
        precio_total: datosCompra.total,
        codigo_entrada: datosCompra.codigoEntrada,
        comprador_dni: datosCompra.comprador.dni,
        comprador_telefono: datosCompra.comprador.telefono || 'No especificado'
      };

      console.log('Parámetros del template:', templateParams);
      console.log('Credenciales:', {
        service_id: EMAIL_SERVICE_ID,
        template_id: EMAIL_TEMPLATE_ID,
        user_id: EMAIL_USER_ID
      });

      const requestBody = {
        service_id: EMAIL_SERVICE_ID,
        template_id: EMAIL_TEMPLATE_ID,
        user_id: EMAIL_USER_ID,
        template_params: templateParams
      };

      console.log('Enviando request a EmailJS...');
      
      const response = await fetch(EMAIL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Respuesta recibida:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error en la respuesta:', errorText);
        throw new Error(`Error al enviar el email: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Email enviado exitosamente:', result);
      return { success: true, message: 'Email enviado exitosamente' };
    } catch (error) {
      console.error('Error enviando email:', error);
      return { success: false, message: `Error al enviar el email: ${error.message}` };
    }
  },

  async enviarEmailConEmailJS(templateParams, templateId = EMAIL_TEMPLATE_ID) {
    try {
      const response = await fetch(EMAIL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAIL_SERVICE_ID,
          template_id: templateId,
          user_id: EMAIL_USER_ID,
          template_params: templateParams
        })
      });

      if (!response.ok) {
        throw new Error('Error al enviar el email');
      }

      return { success: true, message: 'Email enviado exitosamente' };
    } catch (error) {
      console.error('Error enviando email:', error);
      return { success: false, message: 'Error al enviar el email' };
    }
  }
};

