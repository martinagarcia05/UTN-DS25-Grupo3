import React, { useState, useEffect } from 'react';  
import { Button, Modal, Form, Badge, Row, Col, Spinner, Card, ProgressBar } from 'react-bootstrap';
import '../styles/SocioEntradas.css';
import '../styles/HomePage.css';
import Header from '../components/Header';

export default function AdminEventos() {
  const [eventos, setEventos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [modoAgregar, setModoAgregar] = useState(false);
  const [modoEditar, setModoEditar] = useState(false);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [mostrarVenta, setMostrarVenta] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [dniSocio, setDniSocio] = useState('');
  const [formaPago, setFormaPago] = useState('EFECTIVO');
  const [comprobanteFile, setComprobanteFile] = useState(null);

  const [nuevoEvento, setNuevoEvento] = useState({
    nombre: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    capacidad: 0,
    precioEntrada: 0,
    ubicacion: '',
    descripcion: '',
  });

  const obtenerLabelCampo = (key) => {
    if (key === 'horaInicio') return 'Hora de Inicio';
    if (key === 'horaFin') return 'Hora de Fin';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const fetchEventos = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/eventos');
      if (!res.ok) throw new Error('Error al cargar eventos');
      const data = await res.json();
      setEventos(Array.isArray(data.eventos) ? data.eventos : []);
    } catch (error) {
      console.error(error);
      alert('No se pudieron cargar los eventos desde el servidor');
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  const esFuturo = (fechaStr) => {
    const hoy = new Date().toISOString().split('T')[0];
    return fechaStr >= hoy;
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return '';
    const datePart = fecha.toString().split('T')[0]; 
    const [year, month, day] = datePart.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day); 
    return dateObj.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleConfirmarCompra = async () => {
    if (!eventoSeleccionado?.id) {
      alert("No se ha seleccionado un evento");
      return;
    }

    if (!cantidad || cantidad <= 0) {
      alert("Cantidad de entradas inválida");
      return;
    }

    try {
      let socioId = null;

      if (dniSocio.trim() !== '') {
        const response = await fetch(`http://localhost:3000/api/socios/dni/${dniSocio}`);
        if (!response.ok) throw new Error("Socio no encontrado");
        const socio = await response.json();
        socioId = socio.id;
      }

      const formData = new FormData();
      formData.append("eventoId", eventoSeleccionado.id);
      formData.append("cantidad", cantidad);
      formData.append("formaDePago", formaPago);
      if (socioId) formData.append("socioId", socioId);
      if (formaPago === 'CBU' && comprobanteFile) {
        formData.append("comprobante", comprobanteFile);
      }

      const res = await fetch(`http://localhost:3000/api/eventos/${eventoSeleccionado.id}/venta`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al registrar la venta");
      }

      alert("Venta registrada correctamente");
      setMostrarVenta(false);
      setCantidad(1);
      setDniSocio('');
      setFormaPago('EFECTIVO');
      setComprobanteFile(null);
      await fetchEventos();
    } catch (error) {
      console.error("Error al registrar venta:", error);
      alert(`Error al registrar venta: ${error.message}`);
    }
  };

  const handleEliminarEvento = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este evento?')) return;
    try {
      const res = await fetch(`http://localhost:3000/api/eventos/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Error al eliminar evento');
      setEventos(eventos.filter(e => e.id !== id));
    } catch (error) {
      console.error(error);
      alert('Error al eliminar el evento');
    }
  };

  const handleAgregarEvento = async () => {
    if (!nuevoEvento.nombre.trim() || !nuevoEvento.fecha || !nuevoEvento.horaInicio || !nuevoEvento.horaFin || Number(nuevoEvento.capacidad) <= 0 || Number(nuevoEvento.precioEntrada) <= 0) {
      alert('Por favor complete todos los campos correctamente');
      return;
    }

    try {
      const eventoParaEnviar = {
        nombre: nuevoEvento.nombre.trim(),
        fecha: nuevoEvento.fecha,
        horaInicio: nuevoEvento.horaInicio,
        horaFin: nuevoEvento.horaFin,
        ubicacion: nuevoEvento.ubicacion,
        capacidad: Number(nuevoEvento.capacidad),
        precioEntrada: Number(nuevoEvento.precioEntrada),
        descripcion: nuevoEvento.descripcion,
      };

      const res = await fetch('http://localhost:3000/api/eventos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventoParaEnviar)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al crear evento');
      }

      const data = await res.json();
      setEventos(prev => [...prev, data.evento]);
      setShowModal(false);
      alert('Evento creado correctamente!');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleGuardarEdicion = async () => {
    if (!eventoSeleccionado?.id) {
      alert('No se ha seleccionado un evento válido para editar');
      return;
    }

    if (!nuevoEvento.nombre.trim() || !nuevoEvento.fecha || !nuevoEvento.horaInicio || !nuevoEvento.horaFin || Number(nuevoEvento.precioEntrada) <= 0 || Number(nuevoEvento.capacidad) <= 0) {
      alert('Por favor complete todos los campos correctamente');
      return;
    }

    const capacidadNum = parseInt(nuevoEvento.capacidad, 10);
    const precioNum = parseFloat(nuevoEvento.precioEntrada);

    if (isNaN(capacidadNum) || capacidadNum <= 0) {
      alert('Capacidad inválida');
      return;
    }
    if (isNaN(precioNum) || precioNum <= 0) {
      alert('Precio inválido');
      return;
    }

    const eventoParaEnviar = {
      nombre: nuevoEvento.nombre,
      fecha: new Date(nuevoEvento.fecha),
      horaInicio: nuevoEvento.horaInicio,
      horaFin: nuevoEvento.horaFin,
      capacidad: capacidadNum,
      precioEntrada: precioNum,
      ubicacion: nuevoEvento.ubicacion,
      descripcion: nuevoEvento.descripcion,
    };

    try {
      const res = await fetch(`http://localhost:3000/api/eventos/${eventoSeleccionado.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventoParaEnviar)
      });
      if (!res.ok) throw new Error('Error al editar evento');
      await fetchEventos();
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert('Error al guardar cambios');
    }
  };

  const eventosFiltrados = eventos.filter(evento => {
    const coincideBusqueda = evento.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const esActivo = esFuturo(evento.fecha);
    const coincideEstado = filtroEstado === 'todos' ||
                          (filtroEstado === 'activos' && esActivo) ||
                          (filtroEstado === 'completados' && !esActivo);
    return coincideBusqueda && coincideEstado;
  });

  const handleAbrirAgregar = () => {
    setModoAgregar(true);
    setModoEditar(false);
    setNuevoEvento({
      nombre: '',
      fecha: '',
      horaInicio: '',
      horaFin: '',
      capacidad: 0,
      precioEntrada: 0,
      ubicacion: '',
      descripcion: '',
    });
    setShowModal(true);
  };

  const handleEditarEvento = (evento) => {
    setModoEditar(true);
    setModoAgregar(false);
    setNuevoEvento({
      ...evento,
      fecha: evento.fecha ? new Date(evento.fecha).toISOString().split('T')[0]: '',
      capacidad: Number(evento.capacidad) || 0,
      precioEntrada: Number(evento.precioEntrada) || 0
    });
    setEventoSeleccionado(evento);
    setShowModal(true);
  };

  const handleMostrarDetalle = (evento) => {
    setEventoSeleccionado(evento);
    setMostrarDetalle(true);
    setMostrarVenta(false);
  };

  const handleMostrarVenta = (evento) => {
    setEventoSeleccionado(evento);
    setCantidad(1);
    setDniSocio('');
    setComprobanteFile(null);
    setFormaPago('EFECTIVO');
    setMostrarVenta(true);
    setMostrarDetalle(false);
  };

  const getEstadoBadge = (evento) => {
    if (!esFuturo(evento.fecha)) return <Badge bg="secondary">Completado</Badge>;
    if (evento.entradasVendidas >= evento.capacidad) return <Badge bg="danger">Agotado</Badge>;
    return <Badge bg="success">Activo</Badge>;
  };

  const getPorcentajeOcupacion = (evento) => {
    return evento.capacidad ? (evento.entradasVendidas / evento.capacidad) * 100 : 0;
  };  

  const estadisticas = {
    totalEventos: eventos.length,
    eventosActivos: eventos.filter(e => esFuturo(e.fecha)).length,
    eventosCompletados: eventos.filter(e => !esFuturo(e.fecha)).length,
    totalVentas: eventos.reduce((sum, e) => sum + (e.montoTotal || 0), 0),
    totalEntradasVendidas: eventos.reduce((sum, e) => sum + (e.entradasVendidas || 0), 0),
    promedioOcupacion: eventos.length > 0 ? 
      (eventos.reduce((sum, e) => sum + ((e.entradasVendidas || 0) / e.capacidad), 0) / eventos.length * 100).toFixed(1) : 0
  };

  return (
    <>
      <Header />
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
                  <h4 className="text-warning mb-1">${(estadisticas.totalVentas ?? 0).toLocaleString()}</h4>
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

          {/* Filtros y búsqueda */}
          <Row className="mb-4 g-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Buscar evento por nombre o id..."
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

          {/* Listado de eventos */}
          <Row className="g-3">
            {eventosFiltrados.map((evento) => (
              <Col key={evento.id} xs={12} md={6} lg={4}>
                <Card className="h-100 evento-admin-card shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 className="card-title mb-1">{evento.nombre}</h6>
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
                        <span className="text-muted">Total: ${(evento.montoTotal ?? 0).toLocaleString()}</span>
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
                          onClick={() => handleMostrarVenta(evento)}
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

          {/* Modal para Agregar/Editar Evento */}
<Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
  <Modal.Header closeButton className="bg-success text-white">
    <Modal.Title>
      {modoAgregar ? 'Nuevo Evento' : modoEditar ? 'Editar Evento' : ''}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Row className="g-3">
        {Object.keys(nuevoEvento)
          .filter(
            (key) =>
              !['montoTotal', 'createdAt', 'entradasVendidas', 'entradas', 'id'].includes(key)
          )
          .map((key) => (
            <Col md={key === 'descripcion' ? 12 : 6} key={key}>
              <Form.Group>
                <Form.Label>{obtenerLabelCampo(key)}</Form.Label>
                <Form.Control
                  type={
                    key.includes('fecha')
                      ? 'date'
                      : key.includes('hora')
                      ? 'time'
                      : key.includes('precio') || key.includes('capacidad')
                      ? 'number'
                      : 'text'
                  }
                  value={
                    key.includes('fecha') && nuevoEvento[key]
                      ? new Date(nuevoEvento[key]).toISOString().split('T')[0] // ✅ convierte a yyyy-MM-dd
                      : nuevoEvento[key]
                  }
                  onChange={(e) =>
                    setNuevoEvento((prev) => ({
                      ...prev,
                      [key]:
                        key.includes('precio') || key.includes('capacidad')
                          ? Number(e.target.value)
                          : e.target.value, // aquí guardamos yyyy-MM-dd
                    }))
                  }
                />
              </Form.Group>
            </Col>
          ))}
      </Row>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>
      Cancelar
    </Button>
    {modoAgregar && (
      <Button variant="success" onClick={handleAgregarEvento}>
        Crear
      </Button>
    )}
    {modoEditar && (
      <Button variant="warning" onClick={handleGuardarEdicion}>
        Guardar cambios
      </Button>
    )}
  </Modal.Footer>
</Modal>

          {/* Modal para mostrar detalles */}
          <Modal show={mostrarDetalle} onHide={() => setMostrarDetalle(false)} size="lg">
            <Modal.Header closeButton className="bg-success text-white">
              <Modal.Title>Detalle del Evento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {eventoSeleccionado && (
                <>
                  <h5>{eventoSeleccionado.nombre}</h5>
                  <p><strong>Fecha:</strong> {formatearFecha(eventoSeleccionado.fecha)}</p>
                  <p><strong>Horario:</strong> {eventoSeleccionado.horaInicio} - {eventoSeleccionado.horaFin}</p>
                  <p><strong>Ubicación:</strong> {eventoSeleccionado.ubicacion}</p>
                  <p><strong>Capacidad:</strong> {eventoSeleccionado.capacidad}</p>
                  <p><strong>Entradas vendidas:</strong> {eventoSeleccionado.entradasVendidas}</p>
                  <p><strong>Precio Entrada:</strong> ${eventoSeleccionado.precioEntrada}</p>
                  <p><strong>Descripción:</strong> {eventoSeleccionado.descripcion}</p>
                </>
              )}
            </Modal.Body>
          </Modal>
          {/* Modal de Venta */}
          <Modal show={mostrarVenta} onHide={() => setMostrarVenta(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Registrar Venta - {eventoSeleccionado?.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    type="number"
                    value={cantidad}
                    min={1}
                    max={eventoSeleccionado?.capacidad - eventoSeleccionado?.entradasVendidas}
                    onChange={e => setCantidad(Number(e.target.value))}
                  />
                <Form.Group className="mb-3">
                  <Form.Label>DNI Socio (opcional)</Form.Label>
                  <Form.Control
                    type="text"
                    value={dniSocio}
                    onChange={e => setDniSocio(e.target.value)}
                  />
                </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Forma de Pago</Form.Label>
                  <Form.Select
                    value={formaPago}
                    onChange={e => setFormaPago(e.target.value)}
                  >
                    <option value="EFECTIVO">EFECTIVO</option>
                    <option value="CBU">TRANSFERENCIA</option>
                  </Form.Select>
                </Form.Group>
                {formaPago === 'CBU' && (
                  <Form.Group className="mb-3">
                    <Form.Label>Comprobante</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={e => setComprobanteFile(e.target.files[0])}
                    />
                  </Form.Group>
                )}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setMostrarVenta(false)}>Cancelar</Button>
              <Button variant="success" onClick={handleConfirmarCompra}>Confirmar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
