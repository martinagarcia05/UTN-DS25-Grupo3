import React, { useState, useEffect } from 'react'; 
import { Container, Row, Col, Button, Modal, Form, Card, Spinner, Alert } from 'react-bootstrap';
import { PlusCircle, ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

function ActividadesAdmin() {
  const [actividades, setActividades] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaActividad, setNuevaActividad] = useState('');
  const [montoActividad, setMontoActividad] = useState(''); // nuevo estado para monto
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/actividades');
        setActividades(response.data.actividades || []);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar las actividades.');
      } finally {
        setCargando(false);
      }
    };
    fetchActividades();
  }, []);

  const handleAgregarActividad = async () => {
    if (!nuevaActividad.trim() || !montoActividad) return;
    try {
      const response = await axios.post('http://localhost:3000/api/actividades', {
        nombre: nuevaActividad.trim(),
        monto: Number(montoActividad),
        activo: true,
      });
      const actividadCreada = response?.data?.actividad;
      if (actividadCreada) setActividades((prev) => [...prev, actividadCreada]);
      setNuevaActividad('');
      setMontoActividad('');
      setMostrarModal(false);
    } catch (err) {
      console.error(err);
      setError('No se pudo crear la actividad.');
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5 d-flex justify-content-center">
        <div className="w-100 p-4" style={{ maxWidth: '1000px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ color: '#198754', fontWeight: '700' }}>Actividades</h2>
            <Button variant="success" className="d-flex align-items-center" onClick={() => setMostrarModal(true)}>
              <PlusCircle className="me-2" /> Agregar
            </Button>
          </div>

          {cargando ? (
            <div className="d-flex justify-content-center py-5"><Spinner animation="border" /></div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : actividades.length === 0 ? (
            <Alert variant="info">No hay actividades disponibles.</Alert>
          ) : (
            <Row className="gy-4">
              {actividades.map((actividad) => (
                <Col xs={12} key={actividad.id}>
                  <Card className="shadow-sm border-0 rounded-4 p-3 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
                    <span className="fw-semibold fs-5">{actividad.nombre}</span>
                    <Button
                      variant="dark"
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{ width: 40, height: 40 }}
                      onClick={() => navigate(`/clases/${actividad.id}`)}
                    >
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
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de la actividad</Form.Label>
                  <Form.Control
                    type="text"
                    value={nuevaActividad}
                    onChange={(e) => setNuevaActividad(e.target.value)}
                    placeholder="Ej: Basquet, Futbol..."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Monto de la actividad</Form.Label>
                  <Form.Control
                    type="number"
                    value={montoActividad}
                    onChange={(e) => setMontoActividad(e.target.value)}
                    placeholder="Ej: 500"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleAgregarActividad}>Confirmar</Button>
            </Modal.Footer>
          </Modal>

        </div>
      </Container>
    </>
  );
}

export default ActividadesAdmin;
