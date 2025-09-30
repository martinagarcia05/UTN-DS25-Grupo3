import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Card, InputGroup } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../helpers/auth'; 

function Login() {
  const [validated, setValidated] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [emailOdni, setEmailOdni] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        emailOdni, 
        password,
      });

      const { token, user } = response.data.data; 

      if (token) {
        setAuth(token, user.role, user);

        console.log('Usuario guardado en localStorage:', user);

        // Redirigir según rol
        if (user.role === 'ADMINISTRATIVO') {
          navigate('/inicio'); 
        } else if (user.role === 'SOCIO') {
          navigate('/inicioSocio'); 
        } // else if (user.role === 'ADMIN') {
          // navigate('/'); 
        // } todavia no tenemos pagina de admin
      } else {
        setErrorMsg('Login fallido');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <>
      <Header />
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="p-4 shadow" style={{ borderRadius: '15px', borderColor: '#198754' }}>
            <h3 className="text-center mb-4 text-success">Iniciar Sesión</h3>
            {errorMsg && (
              <div className="alert alert-danger" role="alert">
                {errorMsg}
              </div>
            )}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationEmailOdni">
                <Form.Label>Email o DNI</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su email o DNI"
                  value={emailOdni}
                  onChange={(e) => setEmailOdni(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Debe ingresar su email o DNI
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationPassword">
                <Form.Label>Contraseña</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type={mostrarPassword ? 'text' : 'password'}
                    placeholder="Ingrese su contraseña"
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
              <Button type="submit" className="w-100" style={{ backgroundColor: '#198754' }}>
                Iniciar Sesión
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
