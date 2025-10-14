import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
  Spinner,
  Alert,
} from 'react-bootstrap';
import Header from '../components/Header';

const API_BASE = 'http://localhost:3000/api';

function obtenerDiasProximos(cantidad = 4) {
  const dias = [];
  const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
  for (let i = 0; i < cantidad; i++) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + i);
    dias.push({
      dia: fecha.toLocaleDateString('es-AR', { weekday: 'long' }),
      fecha,
      label: fecha.toLocaleDateString('es-AR', opciones),
    });
  }
  return dias;
}

// Helper para filtrar turnos pasados
const filtrarTurnosPasados = (turnos, diaSeleccionado) => {
  const ahora = new Date();
  const esHoy = diaSeleccionado.fecha.toDateString() === ahora.toDateString();
  if (!esHoy) return turnos;
  const horaActualMin = ahora.getHours() * 60 + ahora.getMinutes();
  return turnos.filter(t => {
    const [h, m] = t.hora.split(':').map(Number);
    return h * 60 + m > horaActualMin;
  });
};

const ReservaCancha = () => {
  const [diasDisponibles] = useState(obtenerDiasProximos());
  const [diaSeleccionado, setDiaSeleccionado] = useState(diasDisponibles[0]);
  const [deportes, setDeportes] = useState([]);
  const [deporteSeleccionado, setDeporteSeleccionado] = useState('');
  const [canchas, setCanchas] = useState([]);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState('');
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [turnoEnProceso, setTurnoEnProceso] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [cargandoCanchas, setCargandoCanchas] = useState(false);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null);

  // Cargar usuario y deportes
  useEffect(() => {
    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioData) setUsuario(usuarioData);
    fetchDeportes();
  }, []);

  useEffect(() => {
    if (deporteSeleccionado) fetchCanchas();
  }, [deporteSeleccionado]);

  useEffect(() => {
    if (deporteSeleccionado && canchaSeleccionada && diaSeleccionado)
      fetchTurnosDisponibles();
  }, [deporteSeleccionado, canchaSeleccionada, diaSeleccionado]);

  const fetchDeportes = async () => {
    try {
      setCargando(true);
      const res = await fetch(`${API_BASE}/reserva/socio/deportes`);
      const data = await res.json();
      setDeportes(data.deportes || []);
      if (data.deportes?.length > 0) setDeporteSeleccionado(data.deportes[0]);
    } catch {
      setError('Error al cargar deportes disponibles');
    } finally {
      setCargando(false);
    }
  };

  const fetchCanchas = async () => {
    try {
      setCargandoCanchas(true);
      const token = localStorage.getItem('token');
      const res = await fetch(
        `${API_BASE}/reserva/socio/canchas/${encodeURIComponent(deporteSeleccionado)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      setCanchas(data.canchas || []);
      if (data.canchas?.length > 0) setCanchaSeleccionada(data.canchas[0].nombre);
    } catch {
      setError('Error al cargar canchas disponibles');
    } finally {
      setCargandoCanchas(false);
    }
  };

  const fetchTurnosDisponibles = async () => {
    try {
      setCargando(true);
      const fecha = diaSeleccionado.fecha.toISOString().split('T')[0];
      const params = new URLSearchParams({
        deporte: deporteSeleccionado,
        cancha: canchaSeleccionada,
        fecha,
        socioId: usuario?.socio?.id,
      });
      const res = await fetch(`${API_BASE}/reserva/socio/turnos?${params}`);
      const data = await res.json();
      setTurnosDisponibles(filtrarTurnosPasados(data.turnos || [], diaSeleccionado));
    } catch {
      setError('Error al cargar turnos disponibles');
    } finally {
      setCargando(false);
    }
  };

  const abrirModal = (hora) => {
    setTurnoEnProceso(hora);
    setMostrarModal(true);
  };

  const confirmarReserva = async () => {
    try {
      setCargando(true);
      const fecha = diaSeleccionado.fecha.toISOString().split('T')[0];
      const reservaData = {
        deporte: deporteSeleccionado,
        cancha: canchaSeleccionada,
        fecha,
        hora: turnoEnProceso,
        socioId: usuario?.socio?.id,
      };
      const res = await fetch(`${API_BASE}/reserva/socio/reservas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservaData),
      });
      if (!res.ok) throw new Error();
      setMostrarModal(false);
      await fetchTurnosDisponibles();
      alert('Reserva creada exitosamente');
    } catch {
      alert('Error al crear la reserva');
    } finally {
      setCargando(false);
    }
  };

  const cancelarReserva = async (hora) => {
    try {
      setCargando(true);
      const reserva = turnosDisponibles.find(
        (t) => t.hora === hora && t.esMiReserva && t.reserva
      );
      if (!reserva) return;
      const res = await fetch(`${API_BASE}/reserva/socio/reservas/${reserva.reserva.id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error();
      await fetchTurnosDisponibles();
      alert('Reserva cancelada exitosamente');
    } catch {
      alert('Error al cancelar la reserva');
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <Header />
      <Container className="my-4">
        <Card className="shadow-sm border-0 rounded-4">
          <Card.Header className="bg-white border-bottom py-3 text-center rounded-top-4">
            <h3 className="mb-0 fw-bold text-success">Reservar Cancha</h3>
          </Card.Header>

          <Card.Body className="p-4 bg-white">
            {error && (
              <Alert variant="danger" dismissible onClose={() => setError(null)}>
                {error}
              </Alert>
            )}

            {/* Deporte y cancha */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <Row className="g-3 justify-content-center text-center">
                  <Col md={6}>
                    <Form.Label className="fw-semibold text-dark">Deporte</Form.Label>
                    {cargando ? (
                      <Spinner animation="border" />
                    ) : (
                      <Form.Select
                        value={deporteSeleccionado}
                        onChange={(e) => setDeporteSeleccionado(e.target.value)}
                      >
                        <option value="">Seleccionar deporte</option>
                        {deportes.map((dep) => (
                          <option key={dep} value={dep}>{dep}</option>
                        ))}
                      </Form.Select>
                    )}
                  </Col>

                  <Col md={6}>
                    <Form.Label className="fw-semibold text-dark">Cancha</Form.Label>
                    {cargandoCanchas ? (
                      <Spinner animation="border" />
                    ) : (
                      <Form.Select
                        value={canchaSeleccionada}
                        onChange={(e) => setCanchaSeleccionada(e.target.value)}
                        disabled={!deporteSeleccionado}
                      >
                        <option value="">Seleccionar cancha</option>
                        {canchas.map((c) => (
                          <option key={c.id} value={c.nombre}>{c.nombre}</option>
                        ))}
                      </Form.Select>
                    )}
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <h6 className="fw-semibold text-dark">
                    {deporteSeleccionado && canchaSeleccionada
                      ? `${deporteSeleccionado} - ${canchaSeleccionada}`
                      : 'Seleccioná un deporte y una cancha'}
                  </h6>
                </div>
              </Card.Body>
            </Card>

            {/* Días */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <Row className="g-2 mb-3">
                  {diasDisponibles.map((dia) => (
                    <Col key={dia.label}>
                      <Button
                        variant={dia.label === diaSeleccionado.label ? 'success' : 'outline-secondary'}
                        onClick={() => setDiaSeleccionado(dia)}
                        className="w-100 fw-semibold text-capitalize"
                      >
                        {dia.label}
                      </Button>
                    </Col>
                  ))}
                  <Col xs="auto">
                    <Button
                      variant="outline-dark"
                      onClick={() => setMostrarCalendario(!mostrarCalendario)}
                    >
                      <i className="bi bi-calendar3"></i>
                    </Button>
                  </Col>
                </Row>

                {mostrarCalendario && (
                  <Form.Control
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => {
                      const nuevaFecha = new Date(e.target.value);
                      setDiaSeleccionado({
                        dia: nuevaFecha.toLocaleDateString('es-AR', { weekday: 'long' }),
                        fecha: nuevaFecha,
                        label: nuevaFecha.toLocaleDateString('es-AR', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        }),
                      });
                    }}
                  />
                )}
              </Card.Body>
            </Card>

            {/* Turnos */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-light border-bottom fw-semibold text-dark">
                Turnos disponibles
              </Card.Header>
              <Card.Body style={{ maxHeight: '350px', overflowY: 'auto' }}>
                {cargando ? (
                  <div className="text-center py-4">
                    <Spinner animation="border" />
                    <span className="ms-2 text-dark">Cargando turnos...</span>
                  </div>
                ) : turnosDisponibles.length === 0 ? (
                  <div className="text-center py-4">
                    <p className="text-dark mb-0">No hay turnos disponibles</p>
                  </div>
                ) : (
                  turnosDisponibles.map((turno, i) => {
                    const esReservadoPorUsuario = turno.esMiReserva;
                    return (
                      <Card
                        key={i}
                        className="mb-2 border-0 shadow-sm d-flex flex-row justify-content-between align-items-center px-3 py-3"
                      >
                        <span className="fw-semibold text-dark fs-6">{turno.hora} hs</span>
                        <Button
                          variant={
                            !turno.disponible
                              ? 'secondary'
                              : esReservadoPorUsuario
                              ? 'danger'
                              : 'success'
                          }
                          size="lg"
                          className="fw-bold px-4"
                          onClick={() =>
                            esReservadoPorUsuario
                              ? cancelarReserva(turno.hora)
                              : abrirModal(turno.hora)
                          }
                        >
                          {!turno.disponible && !esReservadoPorUsuario
                            ? 'Reservado'
                            : esReservadoPorUsuario
                            ? 'Cancelar'
                            : 'Reservar'}
                        </Button>
                      </Card>
                    );
                  })
                )}
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        {/* Modal */}
        <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
          <Modal.Header closeButton className="bg-light border-bottom">
            <Modal.Title className="fw-bold text-success">Confirmar Reserva</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            <p><strong>Deporte:</strong> {deporteSeleccionado}</p>
            <p><strong>Cancha:</strong> {canchaSeleccionada}</p>
            <p><strong>Fecha:</strong> {diaSeleccionado.label}</p>
            <p><strong>Hora:</strong> {turnoEnProceso}</p>
            <p><strong>Duración:</strong> 1 hora</p>
            {usuario?.socio && (
              <p><strong>Socio:</strong> {usuario.socio.nombre} {usuario.socio.apellido}</p>
            )}
          </Modal.Body>
          <Modal.Footer className="bg-light border-top">
            <Button
              variant="success"
              size="lg"
              className="fw-bold px-4"
              onClick={confirmarReserva}
              disabled={cargando}
            >
              {cargando ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Reservando...
                </>
              ) : (
                'Confirmar Reserva'
              )}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ReservaCancha;
