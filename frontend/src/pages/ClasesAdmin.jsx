import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Card, Spinner, Alert } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

function ClasesAdmin() {
  const { actividadId } = useParams(); // <-- Obtenemos el ID de la URL
  const [clases, setClases] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Modals
  const [mostrarModalClase, setMostrarModalClase] = useState(false);
  const [mostrarModalProfesor, setMostrarModalProfesor] = useState(null); // id de la clase
  const [mostrarModalSocio, setMostrarModalSocio] = useState(null); // id de la clase

  // Formularios
  const [nuevaClase, setNuevaClase] = useState({ dia: '', horaInicio: '', horaFin: '' });
  const [profesorId, setProfesorId] = useState('');
  const [socioId, setSocioId] = useState('');

  useEffect(() => {
    if (!actividadId) return; // si no hay ID, no hacemos la petición

    const fetchClases = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/clase/actividad/${actividadId}`);
        setClases(response.data.clases || []);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar las clases.');
      } finally {
        setCargando(false);
      }
    };

    fetchClases();
  }, [actividadId]);

  // Crear nueva clase
  const handleAgregarClase = async () => {
    if (!nuevaClase.dia || !nuevaClase.horaInicio || !nuevaClase.horaFin) return;

    try {
      const response = await axios.post(
        `http://localhost:3000/api/clase/actividad/${actividadId}`,
        nuevaClase
      );
      const claseCreada = response?.data?.clase;
      if (claseCreada) setClases((prev) => [...prev, claseCreada]);
      setNuevaClase({ dia: '', horaInicio: '', horaFin: '' });
      setMostrarModalClase(false);
    } catch (err) {
      console.error(err);
      setError('No se pudo crear la clase.');
    }
  };

  // Asignar profesor
  const handleAsignarProfesor = async (claseId) => {
    if (!profesorId) return;

    try {
      await axios.put(`http://localhost:3000/api/clase/${claseId}`, { profesorId });
      setClases((prev) =>
        prev.map((c) =>
          c.id === claseId ? { ...c, profesorNombre: `Profesor ${profesorId}` } : c
        )
      );
      setProfesorId('');
      setMostrarModalProfesor(null);
    } catch (err) {
      console.error(err);
      setError('No se pudo asignar el profesor.');
    }
  };

  // Registrar socio
  const handleRegistrarSocio = async (claseId) => {
    if (!socioId) return;

    try {
      await axios.post(`http://localhost:3000/api/clase-socio`, {
        claseId,
        socioId,
      });
      setSocioId('');
      setMostrarModalSocio(null);
    } catch (err) {
      console.error(err);
      setError('No se pudo registrar el socio.');
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5 d-flex justify-content-center">
        <div
          className="w-100 p-4"
          style={{
            maxWidth: '1000px',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ color: '#198754', fontWeight: '700' }}>Clases</h2>
            <Button
              variant="success"
              className="d-flex align-items-center"
              onClick={() => setMostrarModalClase(true)}
            >
              <PlusCircle className="me-2" /> Agregar Clase
            </Button>
          </div>

          {cargando ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : clases.length === 0 ? (
            <Alert variant="info">No hay clases disponibles.</Alert>
          ) : (
            <Row className="gy-4">
              {clases.map((clase) => (
                <Col xs={12} key={clase.id}>
                  <Card
                    className="shadow-sm border-0 rounded-4 p-3 d-flex flex-column"
                    style={{ backgroundColor: '#f8f9fa' }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold fs-5">
                        {clase.dia} {clase.horaInicio} - {clase.horaFin}
                      </span>
                      <div>
                        <Button
                          variant="outline-primary"
                          className="me-2"
                          onClick={() => setMostrarModalProfesor(clase.id)}
                        >
                          Asignar Profesor
                        </Button>
                        <Button
                          variant="outline-success"
                          onClick={() => setMostrarModalSocio(clase.id)}
                        >
                          Registrar Socio
                        </Button>
                      </div>
                    </div>
                    <small>
                      Profesor asignado: {clase.profesorNombre || 'Sin asignar'}
                    </small>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {/* Modal agregar clase */}
          <Modal
            show={mostrarModalClase}
            onHide={() => setMostrarModalClase(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Clase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label>Día de la semana</Form.Label>
                  <Form.Control
                    type="text"
                    value={nuevaClase.dia}
                    onChange={(e) =>
                      setNuevaClase({ ...nuevaClase, dia: e.target.value })
                    }
                    placeholder="Ej: Lunes"
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Hora de inicio</Form.Label>
                  <Form.Control
                    type="time"
                    value={nuevaClase.horaInicio}
                    onChange={(e) =>
                      setNuevaClase({ ...nuevaClase, horaInicio: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Hora de fin</Form.Label>
                  <Form.Control
                    type="time"
                    value={nuevaClase.horaFin}
                    onChange={(e) =>
                      setNuevaClase({ ...nuevaClase, horaFin: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleAgregarClase}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal asignar profesor */}
          <Modal
            show={mostrarModalProfesor !== null}
            onHide={() => setMostrarModalProfesor(null)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Asignar Profesor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>ID del Profesor</Form.Label>
                  <Form.Control
                    type="number"
                    value={profesorId}
                    onChange={(e) => setProfesorId(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => handleAsignarProfesor(mostrarModalProfesor)}
              >
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal registrar socio */}
          <Modal
            show={mostrarModalSocio !== null}
            onHide={() => setMostrarModalSocio(null)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Registrar Socio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>ID del Socio</Form.Label>
                  <Form.Control
                    type="number"
                    value={socioId}
                    onChange={(e) => setSocioId(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => handleRegistrarSocio(mostrarModalSocio)}
              >
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default ClasesAdmin;
