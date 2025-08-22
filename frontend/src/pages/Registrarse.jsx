import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Card, InputGroup } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import { AltaSocio } from '../components/AltaSocio';

function Registrarse() {
  const [validated, setValidated] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleSubmit = (event) => {
    AltaSocio(event, setValidated);
  };

  return (
    <>
      <Header />
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="p-4 shadow" style={{ borderRadius: '15px', borderColor: '#198754' }}>
            <h3 className="text-center mb-4 text-success">Registarse</h3>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="nombre"
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su nombre
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su apellido"
                    name="apellido"
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su apellido
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationDNI">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su DNI"
                    name="dni"
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su DNI
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su email
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      type={mostrarPassword ? 'text' : 'password'}
                      placeholder="Defina su contraseña"
                      name="pswd"
                    />
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                      {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                    </Button>
                    <Form.Control.Feedback type="invalid">
                      Debe crear su contraseña
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Button type="submit" className="w-100" style={{ backgroundColor: '#198754' }}>
                Registrarme
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Registrarse;
