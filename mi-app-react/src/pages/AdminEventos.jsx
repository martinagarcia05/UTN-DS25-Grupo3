import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Badge, Row, Col, Alert, Spinner, Card, ProgressBar } from 'react-bootstrap';
import '../styles/SocioEntradas.css';
import '../styles/HomePage.css';

// Email service removido - solo se envían emails a compradores

export default function AdminEventos() {
  const [eventos, setEventos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [modoAgregar, setModoAgregar] = useState(false);
  const [modoEditar, setModoEditar] = useState(false);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('todos'); // todos, activos, completados
  const [datosComprador, setDatosComprador] = useState({
    apellido: '',
    nombre: '',
    dni: '',
    email: '',
    telefono: ''
  });
  const [nuevoEvento, setNuevoEvento] = useState({
    nro: '',
    nombre: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    capacidad: 0,
    precioEntrada: 0,
    ubicacion: '',
    descripcion: ''
  });

  useEffect(() => {
    setEventos([
      {
        id: 1,
        nro: 'EVT001',
        nombre: 'Torneo Futbol',
        fecha: '2025-07-10',
        horaInicio: '20:00',
        horaFin: '23:00',
        capacidad: 100,
        precioEntrada: 500,
        entradasVendidas: 60,
        montoTotal: 30000,
        ubicacion: 'Cancha Principal',
        descripcion: 'Gran torneo de fútbol con premios en efectivo',
        estado: 'activo'
      },
      {
        id: 2,
        nro: 'EVT002',
        nombre: 'Obra de Teatro',
        fecha: '2025-07-15',
        horaInicio: '18:00',
        horaFin: '20:00',
        capacidad: 80,
        precioEntrada: 400,
        entradasVendidas: 45,
        montoTotal: 18000,
        ubicacion: 'Auditorio',
        descripcion: 'Obra clásica interpretada por actores locales',
        estado: 'activo'
      },
      {
        id: 3,
        nro: 'EVT003',
        nombre: 'Muestra Patin',
        fecha: '2025-07-03',
        horaInicio: '19:00',
        horaFin: '21:00',
        capacidad: 70,
        precioEntrada: 300,
        entradasVendidas: 70,
        montoTotal: 21000,
        ubicacion: 'Pista de Patinaje',
        descripcion: 'Exhibición de patinaje artístico',
        estado: 'completado'
      }
    ]);
  }, []);

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



  const handleRegistrarClick = (evento) => {
    setEventoSeleccionado(evento);
    setCantidad(1);
    setDatosComprador({ apellido: '', nombre: '', dni: '', email: '', telefono: '' });
    setModoAgregar(false);
    setModoEditar(false);
    setMostrarDetalle(false);
    setShowModal(true);
  };

  const handleMostrarDetalle = (evento) => {
    setEventoSeleccionado(evento);
    setMostrarDetalle(true);
    setModoAgregar(false);
    setModoEditar(false);
    setShowModal(true);
  };

  const handleEditarEvento = (evento) => {
    setEventoSeleccionado(evento);
    setNuevoEvento({
      nro: evento.nro,
      nombre: evento.nombre,
      fecha: evento.fecha,
      horaInicio: evento.horaInicio,
      horaFin: evento.horaFin,
      capacidad: evento.capacidad,
      precioEntrada: evento.precioEntrada,
      ubicacion: evento.ubicacion || '',
      descripcion: evento.descripcion || ''
    });
    setModoEditar(true);
    setModoAgregar(false);
    setMostrarDetalle(false);
    setShowModal(true);
  };

  const handleConfirmarCompra = async () => {
    if (!eventoSeleccionado) return;
    
    // Validar que se completen los datos del comprador
    if (!datosComprador.apellido.trim() || !datosComprador.nombre.trim() || !datosComprador.dni.trim()) {
      alert('Por favor complete todos los datos obligatorios (apellido, nombre y DNI)');
      return;
    }

    setLoading(true);
    
    // Simular proceso de venta
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const nuevosEventos = eventos.map(e => {
      if (e.id === eventoSeleccionado.id) {
        const nuevasVendidas = Math.min(e.entradasVendidas + cantidad, e.capacidad);
        const nuevasGanancias = e.montoTotal + (cantidad * e.precioEntrada);
        return {
          ...e,
          entradasVendidas: nuevasVendidas,
          montoTotal: nuevasGanancias,
        };
      }
      return e;
    });
    // Email service removido - solo se envían emails a compradores

    setEventos(nuevosEventos);
    setLoading(false);
    setShowModal(false);
    
    // Mostrar confirmación
    alert(`¡Venta registrada exitosamente! Se vendieron ${cantidad} entradas por $${cantidad * eventoSeleccionado.precioEntrada}\nSe ha enviado un email de confirmación al administrador.`);
  };

  const handleEliminarEvento = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este evento? Esta acción no se puede deshacer.')) {
      setEventos(eventos.filter(e => e.id !== id));
    }
  };

  const handleAbrirAgregar = () => {
    setNuevoEvento({
      nro: '', nombre: '', fecha: '', horaInicio: '', horaFin: '', capacidad: 0, precioEntrada: 0, ubicacion: '', descripcion: ''
    });
    setModoAgregar(true);
    setModoEditar(false);
    setMostrarDetalle(false);
    setShowModal(true);
  };

  const handleAgregarEvento = () => {
    if (!nuevoEvento.nro.trim() || !nuevoEvento.nombre.trim() || !nuevoEvento.fecha || !nuevoEvento.horaInicio || !nuevoEvento.horaFin || nuevoEvento.capacidad <= 0 || nuevoEvento.precioEntrada <= 0) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    const nuevo = {
      id: eventos.length > 0 ? Math.max(...eventos.map(e => e.id)) + 1 : 1,
      nro: nuevoEvento.nro,
      nombre: nuevoEvento.nombre,
      fecha: nuevoEvento.fecha,
      horaInicio: nuevoEvento.horaInicio,
      horaFin: nuevoEvento.horaFin,
      capacidad: nuevoEvento.capacidad,
      precioEntrada: nuevoEvento.precioEntrada,
      entradasVendidas: 0,
      montoTotal: 0,
      ubicacion: nuevoEvento.ubicacion,
      descripcion: nuevoEvento.descripcion,
      estado: 'activo'
    };
    setEventos([...eventos, nuevo]);
    setShowModal(false);
  };

  const handleGuardarEdicion = () => {
    if (!nuevoEvento.nro.trim() || !nuevoEvento.nombre.trim() || !nuevoEvento.fecha || !nuevoEvento.horaInicio || !nuevoEvento.horaFin || nuevoEvento.capacidad <= 0 || nuevoEvento.precioEntrada <= 0) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    const eventosActualizados = eventos.map(e => {
      if (e.id === eventoSeleccionado.id) {
        return {
          ...e,
          nro: nuevoEvento.nro,
          nombre: nuevoEvento.nombre,
          fecha: nuevoEvento.fecha,
          horaInicio: nuevoEvento.horaInicio,
          horaFin: nuevoEvento.horaFin,
          capacidad: nuevoEvento.capacidad,
          precioEntrada: nuevoEvento.precioEntrada,
          ubicacion: nuevoEvento.ubicacion,
          descripcion: nuevoEvento.descripcion
        };
      }
      return e;
    });
    setEventos(eventosActualizados);
    setShowModal(false);
  };

  // Filtros y búsqueda
  const eventosFiltrados = eventos.filter(evento => {
    const coincideBusqueda = evento.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                             evento.nro.toLowerCase().includes(busqueda.toLowerCase());
    
    const esActivo = esFuturo(evento.fecha);
    const coincideEstado = filtroEstado === 'todos' || 
                          (filtroEstado === 'activos' && esActivo) ||
                          (filtroEstado === 'completados' && !esActivo);
    
    return coincideBusqueda && coincideEstado;
  });

  // Estadísticas
  const estadisticas = {
    totalEventos: eventos.length,
    eventosActivos: eventos.filter(e => esFuturo(e.fecha)).length,
    eventosCompletados: eventos.filter(e => !esFuturo(e.fecha)).length,
    totalVentas: eventos.reduce((sum, e) => sum + e.montoTotal, 0),
    totalEntradasVendidas: eventos.reduce((sum, e) => sum + e.entradasVendidas, 0),
    promedioOcupacion: eventos.length > 0 ? 
      (eventos.reduce((sum, e) => sum + (e.entradasVendidas / e.capacidad), 0) / eventos.length * 100).toFixed(1) : 0
  };

  const getEstadoBadge = (evento) => {
    if (!esFuturo(evento.fecha)) {
      return <Badge bg="secondary">Completado</Badge>;
    }
    if (evento.entradasVendidas >= evento.capacidad) {
      return <Badge bg="danger">Agotado</Badge>;
    }
    return <Badge bg="success">Activo</Badge>;
  };

  const getPorcentajeOcupacion = (evento) => {
    return (evento.entradasVendidas / evento.capacidad) * 100;
  };

  return (
    <>
      <div className="home-container">
        <div className="home-triangle"></div>
        <div className="contenido-cuadro">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="home-title mb-0">
            <i className="bi bi-calendar-event me-2 text-success"></i>
            Administración de Eventos
          </h2>
          <Button
            onClick={handleAbrirAgregar}
            variant="success"
            className="d-flex align-items-center gap-2"
          >
            <i className="bi bi-plus-circle"></i>
            Nuevo Evento
          </Button>
        </div>

        {/* Estadísticas */}
        <Row className="mb-4 g-3">
          <Col xs={12} sm={6} md={3}>
            <Card className="text-center border-success">
              <Card.Body>
                <h4 className="text-success mb-1">{estadisticas.totalEventos}</h4>
                <small className="text-muted">Total Eventos</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="text-center border-primary">
              <Card.Body>
                <h4 className="text-primary mb-1">{estadisticas.eventosActivos}</h4>
                <small className="text-muted">Eventos Activos</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="text-center border-warning">
              <Card.Body>
                <h4 className="text-warning mb-1">${estadisticas.totalVentas.toLocaleString()}</h4>
                <small className="text-muted">Total Ventas</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="text-center border-info">
              <Card.Body>
                <h4 className="text-info mb-1">{estadisticas.promedioOcupacion}%</h4>
                <small className="text-muted">Ocupación Promedio</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Filtros */}
        <Row className="mb-4 g-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Buscar eventos por nombre o número..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <div className="btn-group w-100" role="group">
              <Button
                variant={filtroEstado === 'todos' ? 'success' : 'outline-success'}
                onClick={() => setFiltroEstado('todos')}
              >
                Todos
              </Button>
              <Button
                variant={filtroEstado === 'activos' ? 'success' : 'outline-success'}
                onClick={() => setFiltroEstado('activos')}
              >
                Activos
              </Button>
              <Button
                variant={filtroEstado === 'completados' ? 'success' : 'outline-success'}
                onClick={() => setFiltroEstado('completados')}
              >
                Completados
              </Button>
            </div>
          </Col>
        </Row>

        {/* Lista de Eventos */}
        {eventosFiltrados.length === 0 ? (
          <Alert variant="info" className="text-center">
            <i className="bi bi-info-circle me-2"></i>
            {busqueda ? 'No se encontraron eventos que coincidan con la búsqueda.' : 'No hay eventos registrados.'}
          </Alert>
        ) : (
          <Row className="g-3">
            {eventosFiltrados.map((evento) => (
              <Col key={evento.id} xs={12} md={6} lg={4}>
                <Card className="h-100 evento-admin-card shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 className="card-title mb-1">{evento.nombre}</h6>
                        <small className="text-muted">{evento.nro}</small>
                      </div>
                      {getEstadoBadge(evento)}
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
                      {evento.ubicacion && (
                        <small className="text-muted d-block">
                          <i className="bi bi-geo-alt me-1"></i>
                          {evento.ubicacion}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <small className="text-muted">Ocupación</small>
                        <small className="text-muted">{evento.entradasVendidas}/{evento.capacidad}</small>
                      </div>
                      <ProgressBar 
                        now={getPorcentajeOcupacion(evento)} 
                        variant={getPorcentajeOcupacion(evento) >= 90 ? 'danger' : getPorcentajeOcupacion(evento) >= 70 ? 'warning' : 'success'}
                        className="mb-2"
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-success">${evento.precioEntrada}</span>
                        <span className="text-muted">Total: ${evento.montoTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="d-flex gap-2">
                        <Button
                          variant="outline-info"
                          size="sm"
                          onClick={() => handleMostrarDetalle(evento)}
                          title="Ver detalles"
                        >
                          <i className="bi bi-info-circle"></i>
                        </Button>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          onClick={() => handleEditarEvento(evento)}
                          title="Editar evento"
                        >
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => handleRegistrarClick(evento)}
                          disabled={evento.entradasVendidas >= evento.capacidad}
                          title="Registrar venta"
                        >
                          <i className="bi bi-ticket-perforated"></i>
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleEliminarEvento(evento.id)}
                          title="Eliminar evento"
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Modal Mejorado */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton className="bg-success text-white">
            <Modal.Title>
              <i className="bi bi-calendar-event me-2"></i>
              {modoAgregar ? 'Nuevo Evento' : modoEditar ? 'Editar Evento' : mostrarDetalle ? 'Detalles del Evento' : 'Registrar Venta'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modoAgregar || modoEditar ? (
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Número de Evento *</Form.Label>
                      <Form.Control
                        type="text"
                        value={nuevoEvento.nro}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, nro: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre del Evento *</Form.Label>
                      <Form.Control
                        type="text"
                        value={nuevoEvento.nombre}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, nombre: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Fecha *</Form.Label>
                      <Form.Control
                        type="date"
                        value={nuevoEvento.fecha}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, fecha: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Hora Inicio *</Form.Label>
                      <Form.Control
                        type="time"
                        value={nuevoEvento.horaInicio}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, horaInicio: e.target.value })}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Hora Fin *</Form.Label>
                      <Form.Control
                        type="time"
                        value={nuevoEvento.horaFin}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, horaFin: e.target.value })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Capacidad *</Form.Label>
                      <Form.Control
                        type="number"
                        value={nuevoEvento.capacidad}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, capacidad: parseInt(e.target.value) })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Precio por Entrada *</Form.Label>
                      <Form.Control
                        type="number"
                        value={nuevoEvento.precioEntrada}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, precioEntrada: parseFloat(e.target.value) })}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Ubicación</Form.Label>
                      <Form.Control
                        type="text"
                        value={nuevoEvento.ubicacion}
                        onChange={(e) => setNuevoEvento({ ...nuevoEvento, ubicacion: e.target.value })}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={nuevoEvento.descripcion}
                    onChange={(e) => setNuevoEvento({ ...nuevoEvento, descripcion: e.target.value })}
                  />
                </Form.Group>
              </Form>
            ) : eventoSeleccionado && mostrarDetalle ? (
              <div>
                <Alert variant="info" className="mb-4">
                  <h6 className="mb-2">{eventoSeleccionado.nombre} ({eventoSeleccionado.nro})</h6>
                  <p className="mb-1">
                    <i className="bi bi-calendar3 me-2"></i>
                    {formatearFecha(eventoSeleccionado.fecha)} - {eventoSeleccionado.horaInicio}hs a {eventoSeleccionado.horaFin}hs
                  </p>
                  {eventoSeleccionado.ubicacion && (
                    <p className="mb-1">
                      <i className="bi bi-geo-alt me-2"></i>
                      {eventoSeleccionado.ubicacion}
                    </p>
                  )}
                  {eventoSeleccionado.descripcion && (
                    <p className="mb-0">
                      <i className="bi bi-info-circle me-2"></i>
                      {eventoSeleccionado.descripcion}
                    </p>
                  )}
                </Alert>

                <Row className="g-3">
                  <Col md={6}>
                    <Card className="text-center">
                      <Card.Body>
                        <h4 className="text-success mb-1">{eventoSeleccionado.entradasVendidas}</h4>
                        <small className="text-muted">Entradas Vendidas</small>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="text-center">
                      <Card.Body>
                        <h4 className="text-primary mb-1">{eventoSeleccionado.capacidad - eventoSeleccionado.entradasVendidas}</h4>
                        <small className="text-muted">Entradas Disponibles</small>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold">Ocupación del Evento</span>
                    <span className="text-muted">{getPorcentajeOcupacion(eventoSeleccionado).toFixed(1)}%</span>
                  </div>
                  <ProgressBar 
                    now={getPorcentajeOcupacion(eventoSeleccionado)} 
                    variant={getPorcentajeOcupacion(eventoSeleccionado) >= 90 ? 'danger' : getPorcentajeOcupacion(eventoSeleccionado) >= 70 ? 'warning' : 'success'}
                    className="mb-3"
                  />
                  
                  <Alert variant="success">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>Total Recaudado:</strong>
                        <br />
                        <span className="h4 text-success mb-0">${eventoSeleccionado.montoTotal.toLocaleString()}</span>
                      </div>
                      <div className="text-end">
                        <small className="text-muted">
                          ${eventoSeleccionado.precioEntrada} por entrada
                        </small>
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            ) : eventoSeleccionado && (
              <>
                <Alert variant="info" className="mb-4">
                  <h6 className="mb-2">{eventoSeleccionado.nombre} ({eventoSeleccionado.nro})</h6>
                  <p className="mb-1">
                    <i className="bi bi-calendar3 me-2"></i>
                    {formatearFecha(eventoSeleccionado.fecha)} - {eventoSeleccionado.horaInicio}hs
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-people me-2"></i>
                    {eventoSeleccionado.entradasVendidas}/{eventoSeleccionado.capacidad} entradas vendidas
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-geo-alt me-2"></i>
                    {eventoSeleccionado.ubicacion || 'Ubicación no especificada'}
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
                      <strong>Total a cobrar:</strong>
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
            {modoAgregar && (
              <Button variant="success" onClick={handleAgregarEvento}>
                <i className="bi bi-plus-circle me-2"></i>
                Crear Evento
              </Button>
            )}
            {modoEditar && (
              <Button variant="warning" onClick={handleGuardarEdicion}>
                <i className="bi bi-check-circle me-2"></i>
                Guardar Cambios
              </Button>
            )}
            {!modoAgregar && !modoEditar && !mostrarDetalle && (
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
                    Confirmar Venta
                  </>
                )}
              </Button>
            )}
          </Modal.Footer>
                  </Modal>
        </div>
      </div>
    </>
  );
}
