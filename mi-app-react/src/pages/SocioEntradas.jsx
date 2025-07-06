import React, { useState, useEffect } from 'react';
import { Button, Card, Modal, Form, Badge, Row, Col, Alert, Spinner } from 'react-bootstrap';
import Header from '../components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/SocioEntradas.css';
import fondo from '../assets/fondo.jpg';
import { emailService } from '../services/emailService';

export default function SocioEntradas() {
  const [eventos, setEventos] = useState([]);
  const [misEntradas, setMisEntradas] = useState([]);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filtroEntradas, setFiltroEntradas] = useState('todas'); // todas, activas, pasadas
  const [datosComprador, setDatosComprador] = useState({
    apellido: '',
    nombre: '',
    dni: '',
    email: '',
    telefono: ''
  });

  useEffect(() => {
    setEventos([
      {
        id: 1,
        nombre: 'Torneo Futbol',
        fecha: '2025-07-10',
        horaInicio: '20:00',
        horaFin: '23:00',
        capacidad: 100,
        precioEntrada: 500,
        entradasVendidas: 60,
        categoria: 'Deportes',
        ubicacion: 'Cancha Principal',
        descripcion: 'Gran torneo de fútbol con premios en efectivo'
      },
      {
        id: 2,
        nombre: 'Obra de Teatro',
        fecha: '2025-07-15',
        horaInicio: '18:00',
        horaFin: '20:00',
        capacidad: 80,
        precioEntrada: 400,
        entradasVendidas: 45,
        categoria: 'Cultura',
        ubicacion: 'Auditorio',
        descripcion: 'Obra clásica interpretada por actores locales'
      },
      {
        id: 3,
        nombre: 'Muestra Patin',
        fecha: '2025-07-03',
        horaInicio: '19:00',
        horaFin: '21:00',
        capacidad: 70,
        precioEntrada: 300,
        entradasVendidas: 70,
        categoria: 'Deportes',
        ubicacion: 'Pista de Patinaje',
        descripcion: 'Exhibición de patinaje artístico'
      },
    ]);

    // Cargar entradas existentes del localStorage
    const entradasGuardadas = localStorage.getItem('misEntradas');
    if (entradasGuardadas) {
      setMisEntradas(JSON.parse(entradasGuardadas));
    }
  }, []);

  // Guardar entradas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('misEntradas', JSON.stringify(misEntradas));
  }, [misEntradas]);

  const esFuturo = (fechaStr) => {
    const hoy = new Date().toISOString().split('T')[0];
    return fechaStr >= hoy;
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatearHora = (hora) => {
    return hora;
  };

  const handleAbrirCompra = (evento) => {
    setEventoSeleccionado(evento);
    setCantidad(1);
    setDatosComprador({ apellido: '', nombre: '', dni: '', email: '', telefono: '' });
    setShowModal(true);
  };

  const handleConfirmarCompra = async () => {
    if (!eventoSeleccionado) return;
    
    // Validar datos del comprador
    if (!datosComprador.apellido.trim() || !datosComprador.nombre.trim() || !datosComprador.dni.trim()) {
      alert('Por favor complete todos los datos obligatorios (apellido, nombre y DNI)');
      return;
    }

    setLoading(true);
    
    // Simular proceso de compra
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const nuevaEntrada = {
      id: Date.now(), // ID único
      eventoId: eventoSeleccionado.id,
      nombreEvento: eventoSeleccionado.nombre,
      fecha: eventoSeleccionado.fecha,
      hora: eventoSeleccionado.horaInicio,
      cantidad,
      precioUnitario: eventoSeleccionado.precioEntrada,
      total: cantidad * eventoSeleccionado.precioEntrada,
      estado: 'activa', // activa, usada, cancelada
      fechaCompra: new Date().toISOString(),
      comprador: { ...datosComprador },
      categoria: eventoSeleccionado.categoria,
      ubicacion: eventoSeleccionado.ubicacion,
      codigoEntrada: `ENT-${Date.now().toString().slice(-6)}` // Código único
    };

    setMisEntradas([...misEntradas, nuevaEntrada]);

    // Actualizar disponibilidad del evento
    setEventos(eventos.map(ev =>
      ev.id === eventoSeleccionado.id
        ? { ...ev, entradasVendidas: ev.entradasVendidas + cantidad }
        : ev
    ));

    // Enviar email de confirmación
    try {
      // const emailResult = await simularEnvioEmail(nuevaEntrada, 'compra');
      // Para usar el servicio real, cambiar por:
      const emailResult = await emailService.enviarEmailCompra(nuevaEntrada);
      
      if (emailResult.success) {
        console.log('✅ Email enviado exitosamente');
      } else {
        console.warn('⚠️ Error al enviar email:', emailResult.message);
      }
    } catch (error) {
      console.error('❌ Error en el envío de email:', error);
    }

    setLoading(false);
    setShowModal(false);
    
    // Mostrar confirmación
    alert(`¡Compra exitosa! Código de entrada: ${nuevaEntrada.codigoEntrada}\nSe ha enviado un email de confirmación a ${datosComprador.email || 'tu correo registrado'}`);
  };

  const eventosDisponibles = eventos.filter(
    (e) => esFuturo(e.fecha) && e.entradasVendidas < e.capacidad
  );

  const entradasFiltradas = misEntradas.filter(entrada => {
    const esActiva = esFuturo(entrada.fecha);
    switch (filtroEntradas) {
      case 'activas':
        return esActiva && entrada.estado === 'activa';
      case 'pasadas':
        return !esActiva;
      default:
        return true;
    }
  });

  const getEstadoBadge = (entrada) => {
    if (!esFuturo(entrada.fecha)) {
      return <Badge bg="secondary">Pasado</Badge>;
    }
    switch (entrada.estado) {
      case 'activa':
        return <Badge bg="success">Activa</Badge>;
      case 'usada':
        return <Badge bg="info">Usada</Badge>;
      case 'cancelada':
        return <Badge bg="danger">Cancelada</Badge>;
      default:
        return <Badge bg="secondary">Desconocido</Badge>;
    }
  };



  return (
    <>
      <Header />
      <div 
        className="background-container"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          paddingTop: '2rem',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}
      >
        <div className="contenido-cuadro container">
          {/* Sección Mis Entradas */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                             <h4 className="mb-0">
                 <i className="bi bi-ticket-detailed me-2 text-success"></i>
                 Mis Entradas
               </h4>
                             <div className="btn-group" role="group">
                 <Button
                   variant={filtroEntradas === 'todas' ? 'success' : 'outline-success'}
                   size="sm"
                   onClick={() => setFiltroEntradas('todas')}
                 >
                   Todas
                 </Button>
                 <Button
                   variant={filtroEntradas === 'activas' ? 'success' : 'outline-success'}
                   size="sm"
                   onClick={() => setFiltroEntradas('activas')}
                 >
                   Activas
                 </Button>
                 <Button
                   variant={filtroEntradas === 'pasadas' ? 'success' : 'outline-success'}
                   size="sm"
                   onClick={() => setFiltroEntradas('pasadas')}
                 >
                   Pasadas
                 </Button>
               </div>
            </div>

            {entradasFiltradas.length === 0 ? (
              <Alert variant="info" className="text-center">
                <i className="bi bi-info-circle me-2"></i>
                {filtroEntradas === 'todas' ? 'No tenés entradas.' : 
                 filtroEntradas === 'activas' ? 'No tenés entradas activas.' : 
                 'No tenés entradas pasadas.'}
              </Alert>
            ) : (
              <Row className="g-3">
                {entradasFiltradas.map((entrada) => (
                  <Col key={entrada.id} xs={12} md={6} lg={4}>
                    <Card className="h-100 entrada-card shadow-sm">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="card-title mb-0">{entrada.nombreEvento}</h6>
                          {getEstadoBadge(entrada)}
                        </div>
                        
                        <div className="mb-3">
                          <small className="text-muted d-block">
                            <i className="bi bi-calendar3 me-1"></i>
                            {formatearFecha(entrada.fecha)}
                          </small>
                          <small className="text-muted d-block">
                            <i className="bi bi-clock me-1"></i>
                            {formatearHora(entrada.hora)}hs
                          </small>
                          <small className="text-muted d-block">
                            <i className="bi bi-geo-alt me-1"></i>
                            {entrada.ubicacion}
                          </small>
                        </div>

                        <div className="mt-auto">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="fw-bold">${entrada.total}</span>
                            <small className="text-muted">x{entrada.cantidad}</small>
                          </div>
                          
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              Código: {entrada.codigoEntrada}
                            </small>
                            <small className="text-muted">
                              {entrada.comprador?.apellido} {entrada.comprador?.nombre}
                            </small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </section>

          {/* Sección Próximos Eventos */}
          <section>
            <h4 className="mb-4">
              <i className="bi bi-calendar-event me-2 text-success"></i>
              Próximos Eventos
            </h4>
            
            {eventosDisponibles.length === 0 ? (
              <Alert variant="warning" className="text-center">
                <i className="bi bi-exclamation-triangle me-2"></i>
                No hay eventos disponibles en este momento.
              </Alert>
            ) : (
              <Row className="g-3">
                {eventosDisponibles.map((evento) => (
                  <Col key={evento.id} xs={12} md={6} lg={4}>
                    <Card className="h-100 evento-card shadow-sm">
                      <Card.Body className="d-flex flex-column">
                                                 <div className="d-flex justify-content-between align-items-start mb-3">
                           <h6 className="card-title mb-0">{evento.nombre}</h6>
                         </div>
                        
                        <div className="mb-3">
                          <small className="text-muted d-block">
                            <i className="bi bi-calendar3 me-1"></i>
                            {formatearFecha(evento.fecha)}
                          </small>
                          <small className="text-muted d-block">
                            <i className="bi bi-clock me-1"></i>
                            {evento.horaInicio}hs - {evento.horaFin}hs
                          </small>
                          <small className="text-muted d-block">
                            <i className="bi bi-geo-alt me-1"></i>
                            {evento.ubicacion}
                          </small>
                          <small className="text-muted d-block">
                            <i className="bi bi-people me-1"></i>
                            {evento.entradasVendidas}/{evento.capacidad} vendidas
                          </small>
                        </div>

                        <div className="mt-auto">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="h5 mb-0 text-success">${evento.precioEntrada}</span>
                            <small className="text-muted">por entrada</small>
                          </div>
                          
                          <Button
                            variant="success"
                            className="w-100"
                            onClick={() => handleAbrirCompra(evento)}
                            disabled={evento.entradasVendidas >= evento.capacidad}
                          >
                            <i className="bi bi-cart-plus me-2"></i>
                            {evento.entradasVendidas >= evento.capacidad ? 'Agotado' : 'Comprar'}
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </section>
        </div>

        {/* Modal de Compra Mejorado */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton className="bg-success text-white">
            <Modal.Title>
              <i className="bi bi-cart-plus me-2"></i>
              Comprar Entrada
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {eventoSeleccionado && (
              <>
                <Alert variant="info" className="mb-4">
                  <h6 className="mb-2">{eventoSeleccionado.nombre}</h6>
                  <p className="mb-1">
                    <i className="bi bi-calendar3 me-2"></i>
                    {formatearFecha(eventoSeleccionado.fecha)} - {eventoSeleccionado.horaInicio}hs
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-geo-alt me-2"></i>
                    {eventoSeleccionado.ubicacion}
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-people me-2"></i>
                    {eventoSeleccionado.entradasVendidas}/{eventoSeleccionado.capacidad} entradas vendidas
                  </p>
                </Alert>

                <Row>
                  <Col md={6}>
                    <h6 className="mb-3">Datos del Comprador</h6>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellido *</Form.Label>
                      <Form.Control
                        type="text"
                        value={datosComprador.apellido}
                        onChange={(e) => setDatosComprador({ ...datosComprador, apellido: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre *</Form.Label>
                      <Form.Control
                        type="text"
                        value={datosComprador.nombre}
                        onChange={(e) => setDatosComprador({ ...datosComprador, nombre: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>DNI *</Form.Label>
                      <Form.Control
                        type="text"
                        value={datosComprador.dni}
                        onChange={(e) => setDatosComprador({ ...datosComprador, dni: e.target.value })}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <h6 className="mb-3">Información Adicional</h6>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={datosComprador.email}
                        onChange={(e) => setDatosComprador({ ...datosComprador, email: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        value={datosComprador.telefono}
                        onChange={(e) => setDatosComprador({ ...datosComprador, telefono: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Cantidad de Entradas</Form.Label>
                      <Form.Control
                        type="number"
                        min={1}
                        max={eventoSeleccionado.capacidad - eventoSeleccionado.entradasVendidas}
                        value={cantidad}
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                      />
                      <Form.Text className="text-muted">
                        Máximo: {eventoSeleccionado.capacidad - eventoSeleccionado.entradasVendidas} entradas
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                <Alert variant="success" className="mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Total a pagar:</strong>
                      <br />
                      <span className="h4 text-success mb-0">${cantidad * eventoSeleccionado.precioEntrada}</span>
                    </div>
                    <div className="text-end">
                      <small className="text-muted">
                        {cantidad} x ${eventoSeleccionado.precioEntrada}
                      </small>
                    </div>
                  </div>
                </Alert>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)} disabled={loading}>
              Cancelar
            </Button>
            <Button 
              variant="success" 
              onClick={handleConfirmarCompra} 
              disabled={loading || !datosComprador.apellido.trim() || !datosComprador.nombre.trim() || !datosComprador.dni.trim()}
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Procesando...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle me-2"></i>
                  Confirmar Compra
                </>
              )}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
