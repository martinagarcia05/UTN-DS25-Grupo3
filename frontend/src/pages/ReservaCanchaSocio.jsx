import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // Importa el contexto de autenticación

// Lista de deportes
const deportes = ['Futsal', 'Volley', 'Tenis', 'Pelota Paleta'];

// Función para obtener los próximos días
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

// Función para generar los turnos con todos disponibles
function generarTurnos() {
  const turnos = [];
  for (let h = 10; h <= 22; h++) {
    turnos.push({
      hora: `${h.toString().padStart(2, '0')}:00`,
      disponible: true,
    });
  }
  return turnos;
}

const ReservaCancha = () => {
  // Obtiene los datos del usuario del contexto
  const { user } = useContext(AuthContext); 
  // Usa el ID y el nombre del usuario real
  const socioId = user?.id; 
  const nombreSocio = user?.user_metadata?.full_name || user?.email;

  const [diasDisponibles] = useState(obtenerDiasProximos());
  const [diaSeleccionado, setDiaSeleccionado] = useState(diasDisponibles[0]);
  const [deporteSeleccionado, setDeporteSeleccionado] = useState('Futsal');
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [turnoEnProceso, setTurnoEnProceso] = useState(null);
  const [turnoReservado, setTurnoReservado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [turnosDisponibles, setTurnosDisponibles] = useState(generarTurnos());

  const abrirModal = (hora) => {
    setTurnoEnProceso(hora);
    setMostrarModal(true);
  };

  const confirmarReserva = async () => {
    if (!turnoEnProceso || !socioId) {
      alert("Por favor, inicia sesión para reservar.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/reservas", {
        socioId,
        deporte: deporteSeleccionado,
        fecha: diaSeleccionado.fecha.toISOString().split('T')[0],
        hora: turnoEnProceso,
      });

      // Actualiza la UI para mostrar el turno como no disponible
      const nuevosTurnos = turnosDisponibles.map(turno =>
        turno.hora === turnoEnProceso ? { ...turno, disponible: false } : turno
      );
      setTurnosDisponibles(nuevosTurnos);
      setTurnoReservado(turnoEnProceso);
      setMostrarModal(false);

    } catch (err) {
      console.error("Error creando la reserva", err);
      alert("No se pudo crear la reserva");
    }
  };

  const cancelarReserva = () => {
    // Actualiza la UI para mostrar el turno como disponible nuevamente
    const nuevosTurnos = turnosDisponibles.map(turno =>
      turno.hora === turnoReservado ? { ...turno, disponible: true } : turno
    );
    setTurnosDisponibles(nuevosTurnos);
    setTurnoReservado(null);
  };

  return (
    <>
      <Header />
      <Container className="mt-4 bg-transparent">
        <div className="mb-3" style={{ textAlign: 'center' }}>
          <label className="form-label fw-bold">Seleccioná un deporte:</label>
          <select
            className="form-select"
            value={deporteSeleccionado}
            onChange={(e) => {
              setDeporteSeleccionado(e.target.value);
              setTurnosDisponibles(generarTurnos());
            }}
          >
            {deportes.map((dep) => (
              <option key={dep} value={dep}>{dep}</option>
            ))}
          </select>
          <h2 style={{ textAlign: 'center' }}>{deporteSeleccionado}</h2>
        </div>

        <Row className="mb-3">
          {diasDisponibles.map((dia) => (
            <Col key={dia.label} className="text-center">
              <Button
                variant={dia.label === diaSeleccionado.label ? 'success' : 'light'}
                onClick={() => {
                  setDiaSeleccionado(dia);
                  setTurnosDisponibles(generarTurnos());
                  setTurnoReservado(null);
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
                setTurnosDisponibles(generarTurnos());
                setTurnoReservado(null);
              }}
            />
          </Form.Group>
        )}

        <div className="scroll-turnos" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {turnosDisponibles.map((turno, index) => {
            const esReservadoPorUsuario = turnoReservado === turno.hora;
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
                  disabled={!turno.disponible && !esReservadoPorUsuario}
                  onClick={() =>
                    esReservadoPorUsuario
                      ? cancelarReserva()
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
          })}
        </div>

        <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Reserva</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Socio:</strong> {nombreSocio}</p>
            <p><strong>Deporte:</strong> {deporteSeleccionado}</p>
            <p><strong>Fecha:</strong> {diaSeleccionado.label}</p>
            <p><strong>Hora:</strong> {turnoEnProceso}</p>
            <p><strong>Duración:</strong> 1 hora</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={confirmarReserva}>
              Confirmar Reserva
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ReservaCancha;