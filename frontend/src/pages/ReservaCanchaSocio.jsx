import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap';
import Header from '../components/Header';

const deportes = ['Futsal', 'Volley', 'Tenis', 'Pelota Paleta'];

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

function generarTurnos() {
  const turnos = [];
  for (let h = 10; h <= 22; h++) {
    turnos.push({
      hora: `${h.toString().padStart(2, '0')}:00`,
      disponible: Math.random() > 0.3, // para simularr turnos reservados ymostrar el boton reservado
    });
  }
  return turnos;
}

const ReservaCancha = () => {
  const [diasDisponibles] = useState(obtenerDiasProximos());
  const [diaSeleccionado, setDiaSeleccionado] = useState(obtenerDiasProximos()[0]);
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

  const confirmarReserva = () => {
    setTurnoReservado(turnoEnProceso);
    setMostrarModal(false);
  };

  const cancelarReserva = () => {
    setTurnoReservado(null);
  };

  return (
    <>
      <Header />
        <Container className="mt-4 bg-transparent">
          {/* Selector de deporte */}
          <div className="mb-3">
            <label htmlFor="deporte" className="form-label fw-bold">
              Seleccioná un deporte:
            </label>
            <select
              id="deporte"
              className="form-select"
              value={deporteSeleccionado}
              onChange={(e) => setDeporteSeleccionado(e.target.value)}
            >
              {deportes.map((dep) => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
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
                    setTurnosDisponibles(generarTurnos()); // regenerar turnos al cambiar día
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

          {/* Turnos */}
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={confirmarReserva}>
                Reservar Turno
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>   
    </>
  );
};

export default ReservaCancha;