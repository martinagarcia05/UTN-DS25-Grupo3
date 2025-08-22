import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, InputGroup, Row, Card } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import { ValidarSocio } from '../components/ValidarSocio';

function IniciarSesion() {
  const [validated, setValidated] = useState(false);
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const valido = await ValidarSocio({ dni: parseInt(dni), pswd: password });
    if (valido) {
      if (dni === '0' && password === '@dmIn1234') {
        localStorage.setItem('role', 'admin');
        window.location.href = "/inicio";
      } else {
        localStorage.setItem('role', 'user');
        window.location.href = "/inicioSocio";
      }
    } else {
      setValidated(true);
      alert('DNI o contraseña incorrecta');
    }
  };

  return (
    <>
      <Header />

      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="p-4 shadow" style={{ borderRadius: '15px'}}>
            <h3 className="text-center mb-4 text-success">Bienvenido!</h3>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su DNI"
                  required
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Debe ingresar su DNI
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationPassword">
                <Form.Label>Contraseña</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={mostrarPassword ? 'text' : 'password'}
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                  >
                    {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su contraseña
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  label="Quiero recordar sesión"
                  feedback="Ingresará a su cuenta sin necesidad de ingresar su contraseña y usuario"
                />
              </Form.Group>

              <Button type="submit" className="w-100" style={{ backgroundColor: '#198754' }}>
                Ingresar
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default IniciarSesion;
