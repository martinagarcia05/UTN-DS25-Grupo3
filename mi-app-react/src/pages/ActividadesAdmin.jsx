import { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Card } from 'react-bootstrap';
import { PlusCircle, ArrowRight } from 'react-bootstrap-icons';
import Header from '../components/Header';


function ActividadesAdmin() {
  const [actividades, setActividades] = useState([
    'Basquet',
    'Taekwando',
    'Volley',
    'Pelota Paleta',
  ]);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaActividad, setNuevaActividad] = useState('');

  const handleAgregarActividad = () => {
    if (nuevaActividad.trim() !== '') {
      setActividades([...actividades, nuevaActividad.trim()]);
      setNuevaActividad('');
      setMostrarModal(false);
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

        <Row className="gy-3">
            {actividades.map((actividad, index) => (
            <Col xs={12} key={index}>
                <Card className="d-flex flex-row justify-content-between align-items-center px-3 py-2">
                <span>{actividad}</span>
                <Button variant="dark" className="rounded-circle">
                    <ArrowRight size={20} />
                </Button>
                </Card>
            </Col>
            ))}
        </Row>

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