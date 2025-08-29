import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Card, Spinner } from 'react-bootstrap';
import { PlusCircle, ArrowRight } from 'react-bootstrap-icons';
import Header from '../components/Header';
import axios from 'axios';
import React from 'react';

function ActividadesAdmin() {
  const [actividades, setActividades] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaActividad, setNuevaActividad] = useState('');
  const [cargando, setCargando] = useState(true);

  // Traer actividades al cargar el componente
  useEffect(() => {
    async function fetchActividades() {
      try {
        const response = await axios.get('/api/actividades');
        setActividades(response.data.actividades);
      } catch (error) {
        console.error('Error al traer actividades:', error);
      } finally {
        setCargando(false);
      }
    }
    fetchActividades();
  }, []);

  // Crear nueva actividad en backend
  const handleAgregarActividad = async () => {
    if (!nuevaActividad.trim()) return;

    try {
      const response = await axios.post('/api/actividades', {
        nombre: nuevaActividad.trim(),
        monto: 0, // luego se puede permitir editar monto
      });
      setActividades([...actividades, response.data.actividad]);
      setNuevaActividad('');
      setMostrarModal(false);
    } catch (error) {
      console.error('Error al crear actividad:', error);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-4 bg-transparent">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="black">Actividades</h3>
          <Button variant="success" onClick={() => setMostrarModal(true)}>
            <PlusCircle className="me-2" />
            Agregar
          </Button>
        </div>

        {cargando ? (
          <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row className="gy-3">
            {actividades.map((actividad) => (
              <Col xs={12} md={6} lg={4} key={actividad.id}>
                <Card className="d-flex flex-row justify-content-between align-items-center px-3 py-2">
                  <span>{actividad.nombre}</span>
                  <Button variant="dark" className="rounded-circle">
                    <ArrowRight size={20} />
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Modal para nueva actividad */}
        <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Actividad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Nombre de la actividad</Form.Label>
                <Form.Control
                  type="text"
                  value={nuevaActividad}
                  onChange={(e) => setNuevaActividad(e.target.value)}
                  placeholder="Ej: Hockey, Natación..."
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleAgregarActividad}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ActividadesAdmin;
