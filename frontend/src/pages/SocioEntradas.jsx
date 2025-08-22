import React, { useState, useEffect } from 'react';
import { Button, Card, Modal, Form, Badge, Row, Col, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/SocioEntradas.css';
import fondo from '../assets/fondo.jpg';

export default function SocioEntradas() {
  const [eventos, setEventos] = useState([]);
  const [misEntradas, setMisEntradas] = useState([]);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filtroEntradas, setFiltroEntradas] = useState('todas');
  const [usuario, setUsuario] = useState(null);

  const API_BASE = 'http://localhost:3000/api';

  // Al montar, traemos usuario desde localStorage o authContext
  useEffect(() => {
    const socioData = JSON.parse(localStorage.getItem('usuario')); 
    if (socioData) {
      setUsuario(socioData);
      fetchMisEntradas(socioData.id);
    }
    fetchEventos();
  }, []);

  async function fetchEventos() {
    try {
      const res = await fetch(`${API_BASE}/eventos`);
      if (!res.ok) throw new Error('Error al cargar eventos');
      const data = await res.json();
      setEventos(data.eventos || data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMisEntradas(socioId) {
    try {
      const res = await fetch(`${API_BASE}/entradas?socioId=${socioId}`);
      if (!res.ok) throw new Error('Error al cargar entradas');
      const data = await res.json();
      setMisEntradas(data.entradas || data);
    } catch (err) {
      console.error(err);
    }
  }

  const handleAbrirCompra = (evento) => {
    setEventoSeleccionado(evento);
    setCantidad(1);
    setShowModal(true);
  };

  const handleConfirmarCompra = async () => {
    if (!eventoSeleccionado || !usuario) return;
    if (cantidad < 1) {
      alert('Seleccione al menos una entrada');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/entradas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventoId: eventoSeleccionado.id,
          cantidad,
        }),
      });

      if (!res.ok) throw new Error('Error al crear la entrada');
      const { entrada } = await res.json();

      setMisEntradas((prev) => [...prev, entrada]);

      // Actualizar estadísticas del evento
      await fetch(`${API_BASE}/eventos/${eventoSeleccionado.id}/venta`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cantidad }),
      });

      alert(`Compra exitosa! Código: ${entrada.codigoEntrada || entrada.id}`);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const formatearFecha = (fecha) =>
    new Date(fecha).toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const esFuturo = (fechaStr) => fechaStr >= new Date().toISOString().split('T')[0];

  const eventosDisponibles = eventos.filter(
    (e) => esFuturo(e.fecha) && e.entradasVendidas < e.capacidad
  );

  const entradasFiltradas = misEntradas.filter((entrada) => {
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
    if (!esFuturo(entrada.fecha)) return <Badge bg="secondary">Pasado</Badge>;
    switch (entrada.estado) {
      case 'activa': return <Badge bg="success">Activa</Badge>;
      case 'usada': return <Badge bg="info">Usada</Badge>;
      case 'cancelada': return <Badge bg="danger">Cancelada</Badge>;
      default: return <Badge bg="secondary">Desconocido</Badge>;
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
          paddingRight: '1rem',
        }}
      >
        <div className="contenido-cuadro container">
          {!usuario ? (
            <Alert variant="warning">Debés iniciar sesión para ver tus entradas.</Alert>
          ) : (
            <>
              {/* Mis Entradas */}
              <section className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">
                    <i className="bi bi-ticket-detailed me-2 text-success"></i>
                    Mis Entradas ({usuario.nombre} {usuario.apellido})
                  </h4>
                  <div className="btn-group" role="group">
                    <Button variant={filtroEntradas === 'todas' ? 'success' : 'outline-success'} size="sm" onClick={() => setFiltroEntradas('todas')}>Todas</Button>
                    <Button variant={filtroEntradas === 'activas' ? 'success' : 'outline-success'} size="sm" onClick={() => setFiltroEntradas('activas')}>Activas</Button>
                    <Button variant={filtroEntradas === 'pasadas' ? 'success' : 'outline-success'} size="sm" onClick={() => setFiltroEntradas('pasadas')}>Pasadas</Button>
                  </div>
                </div>

                {entradasFiltradas.length === 0 ? (
                  <Alert variant="info" className="text-center">
                    <i className="bi bi-info-circle me-2"></i>
                    No tenés entradas.
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
                              <small className="text-muted d-block"><i className="bi bi-calendar3 me-1"></i>{formatearFecha(entrada.fecha)}</small>
                              <small className="text-muted d-block"><i className="bi bi-clock me-1"></i>{entrada.hora}hs</small>
                              <small className="text-muted d-block"><i className="bi bi-geo-alt me-1"></i>{entrada.ubicacion}</small>
                            </div>
                            <div className="mt-auto">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fw-bold">${entrada.total}</span>
                                <small className="text-muted">x{entrada.cantidad}</small>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </section>

              {/* Próximos eventos */}
              <section>
                <h4 className="mb-4">
                  <i className="bi bi-calendar-event me-2 text-success"></i>
                  Próximos Eventos
                </h4>
                <Row className="g-3">
                  {eventosDisponibles.map((evento) => (
                    <Col key={evento.id} xs={12} md={6} lg={4}>
                      <Card className="h-100 evento-card shadow-sm">
                        <Card.Body className="d-flex flex-column">
                          <h6>{evento.nombre}</h6>
                          <small className="text-muted d-block">{formatearFecha(evento.fecha)}</small>
                          <Button variant="success" className="mt-auto" onClick={() => handleAbrirCompra(evento)}>
                            Comprar
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </section>
            </>
          )}
        </div>

        {/* Modal de Compra */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton className="bg-success text-white">
            <Modal.Title>Comprar Entrada</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {eventoSeleccionado && (
              <Form.Group>
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={cantidad}
                  onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)} disabled={loading}>Cancelar</Button>
            <Button variant="success" onClick={handleConfirmarCompra} disabled={loading || cantidad < 1}>
              {loading ? 'Procesando...' : 'Confirmar Compra'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
