import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Modal, Spinner, Alert } from 'react-bootstrap';
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


const ReservaCancha = () => {
  const [diasDisponibles] = useState(obtenerDiasProximos());
  const [diaSeleccionado, setDiaSeleccionado] = useState(obtenerDiasProximos()[0]);
  const [deportes, setDeportes] = useState([]);
  const [deporteSeleccionado, setDeporteSeleccionado] = useState('');
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [turnoEnProceso, setTurnoEnProceso] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [turnosDisponibles, setTurnosDisponibles] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [usuario, setUsuario] = useState(null);

  // Cargar datos iniciales
  useEffect(() => {
    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioData) {
      setUsuario(usuarioData);
    }
    fetchDeportes();
  }, []);

  // Cargar turnos cuando cambie el deporte o fecha
  useEffect(() => {
    if (deporteSeleccionado && diaSeleccionado) {
      fetchTurnosDisponibles();
    }
  }, [deporteSeleccionado, diaSeleccionado]);

  // Obtener deportes desde el back
  const fetchDeportes = async () => {
    try {
      setCargando(true);
      const res = await fetch(`${API_BASE}/reserva/socio/deportes`);
      if (!res.ok) throw new Error('Error al cargar deportes');
      const data = await res.json();
      setDeportes(data.deportes || []);
      if (data.deportes && data.deportes.length > 0) {
        setDeporteSeleccionado(data.deportes[0]);
      }
    } catch (error) {
      console.error('Error cargando deportes:', error);
      setError('Error al cargar deportes disponibles');
    } finally {
      setCargando(false);
    }
  };

  // Función helper para filtrar turnos pasados
  const filtrarTurnosPasados = (turnos) => {
    const ahora = new Date();
    const horaActual = ahora.getHours();
    const minutoActual = ahora.getMinutes();
    
    // Si es el día de hoy, filtrar turnos pasados
    const esHoy = diaSeleccionado.fecha.toDateString() === new Date().toDateString();
    
    if (!esHoy) {
      return turnos; // Si no es hoy, mostrar todos los turnos
    }
    
    return turnos.filter(turno => {
      const [hora, minuto] = turno.hora.split(':').map(Number);
      const horaTurno = hora * 60 + minuto; // Convertir a minutos
      const horaActualMinutos = horaActual * 60 + minutoActual;
      
      return horaTurno > horaActualMinutos; // Solo mostrar turnos futuros
    });
  };

  // Obtener turnos disponibles desde el backend
  const fetchTurnosDisponibles = async () => {
    try {
      setCargando(true);
      const fecha = diaSeleccionado.fecha.toISOString().split('T')[0];
      const params = new URLSearchParams({
        deporte: deporteSeleccionado,
        fecha: fecha,
      });
      
      if (usuario?.socio?.id) {
        params.append('socioId', usuario.socio.id);
      }

      const res = await fetch(`${API_BASE}/reserva/socio/turnos?${params}`);
      if (!res.ok) throw new Error('Error al cargar turnos');
      const data = await res.json();
      
      // Filtrar turnos pasados antes de establecer el estado
      const turnosFiltrados = filtrarTurnosPasados(data.turnos || []);
      setTurnosDisponibles(turnosFiltrados);
    } catch (error) {
      console.error('Error cargando turnos:', error);
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
        fecha: fecha,
        hora: turnoEnProceso,
        socioId: usuario?.socio?.id
      };

      const res = await fetch(`${API_BASE}/reserva/socio/reservas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservaData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al crear reserva');
      }

      setMostrarModal(false);
      
      // Recargar turnos para actualizar disponibilidad
      await fetchTurnosDisponibles();
      
      alert('Reserva creada exitosamente');
    } catch (error) {
      console.error('Error creando reserva:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setCargando(false);
    }
  };

  const cancelarReserva = async (hora) => {
    try {
      setCargando(true);
      
      // Buscar la reserva del usuario para este turno
      const reserva = turnosDisponibles.find(t => 
        t.hora === hora && t.esMiReserva && t.reserva
      );
      
      if (reserva && reserva.reserva) {
        const res = await fetch(`${API_BASE}/reserva/socio/reservas/${reserva.reserva.id}`, {
          method: 'DELETE',
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Error al cancelar reserva');
        }
        
        // Recargar turnos para actualizar disponibilidad
        await fetchTurnosDisponibles();
        
        alert('Reserva cancelada exitosamente');
      }
    } catch (error) {
      console.error('Error cancelando reserva:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <Header />
        <Container className="mt-4 bg-transparent">
          {error && (
            <Alert variant="danger" dismissible onClose={() => setError(null)}>
              {error}
            </Alert>
          )}
          
          {/* Selector de deporte */}
          <div className="mb-3">
            <label htmlFor="deporte" className="form-label fw-bold">
              Seleccioná un deporte:
            </label>
            {cargando ? (
              <div className="d-flex align-items-center">
                <Spinner animation="border" size="sm" className="me-2" />
                <span>Cargando deportes...</span>
              </div>
            ) : (
              <select
                id="deporte"
                className="form-select"
                value={deporteSeleccionado}
                onChange={(e) => setDeporteSeleccionado(e.target.value)}
                disabled={deportes.length === 0}
              >
                {deportes.length === 0 ? (
                  <option>No hay deportes disponibles</option>
                ) : (
                  deportes.map((dep) => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))
                )}
              </select>
            )}
          </div>

          <h2 className="black">{deporteSeleccionado}</h2>

          {/* Días */}
          <Row className="mb-3">
            {diasDisponibles.map((dia) => (
              <Col key={dia.label} className="text-center">
                <Button
                  variant={dia.label === diaSeleccionado.label ? 'success' : 'light'}
                  onClick={() => {
                    setDiaSeleccionado(dia);
                  }}
                  className="w-100"
                >
                  <div>{dia.label}</div>
                </Button>
              </Col>
            ))}
            <Col xs="auto" className="d-flex align-items-center">
              <i
                className="bi bi-calendar"
                style={{ fontSize: '2rem', cursor: 'pointer' }}
                onClick={() => setMostrarCalendario(!mostrarCalendario)}
              ></i>
            </Col>
          </Row>

          {mostrarCalendario && (
            <Form.Group className="mb-3">
              <Form.Label>Elegir otra fecha:</Form.Label>
              <Form.Control
                type="date"
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  const nuevaFecha = new Date(e.target.value);
                  const nuevoDia = {
                    dia: nuevaFecha.toLocaleDateString('es-AR', { weekday: 'long' }),
                    fecha: nuevaFecha,
                    label: nuevaFecha.toLocaleDateString('es-AR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    }),
                  };
                  setDiaSeleccionado(nuevoDia);
                }}
              />
            </Form.Group>
          )}

          {/* Turnos */}
          <div className="scroll-turnos" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {cargando ? (
              <div className="d-flex justify-content-center py-4">
                <Spinner animation="border" />
                <span className="ms-2">Cargando turnos...</span>
              </div>
            ) : turnosDisponibles.length === 0 ? (
              <div className="text-center py-4">
                <p>No hay turnos disponibles para esta fecha</p>
              </div>
            ) : (
              turnosDisponibles.map((turno, index) => {
                const esReservadoPorUsuario = turno.esMiReserva;
                return (
                  <Card key={index} className="mb-2 d-flex flex-row justify-content-between align-items-center px-3 py-2">
                    <span>{turno.hora}hs</span>
                    <Button
                      variant={
                        !turno.disponible
                          ? 'secondary'
                          : esReservadoPorUsuario
                          ? 'danger'
                          : 'success'
                      }
                      disabled={(!turno.disponible && !esReservadoPorUsuario) || cargando}
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
          </div>

          {/* Modal */}
          <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Deporte:</strong> {deporteSeleccionado}</p>
              <p><strong>Fecha:</strong> {diaSeleccionado.label}</p>
              <p><strong>Hora:</strong> {turnoEnProceso}</p>
              <p><strong>Duración:</strong> 1 hora</p>
              {usuario?.socio && (
                <p><strong>Socio:</strong> {usuario.socio.nombre} {usuario.socio.apellido}</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button 
                variant="success" 
                onClick={confirmarReserva}
                disabled={cargando}
              >
                {cargando ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Reservando...
                  </>
                ) : (
                  'Reservar Turno'
                )}
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>   
    </>
  );
};

export default ReservaCancha;