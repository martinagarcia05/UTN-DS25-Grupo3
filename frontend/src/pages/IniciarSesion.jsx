import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Card, InputGroup } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
function Login() {
  const [validated, setValidated] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [emailOdni, setEmailOdni] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        emailOdni,
        password,
      });

      const { token, rol, mensaje, usuario } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol);
<<<<<<< HEAD
        if (usuario) localStorage.setItem('usuario', JSON.stringify(usuario));
          console.log('Usuario guardado en localStorage:', localStorage.getItem('usuario'));  
        // Redirigir según rol
        if (rol.toLowewrCase() === 'admin') navigate('/inicio');
=======
        console.log('Respuesta del backend:', response.data);
        if (usuario) localStorage.setItem('usuario', JSON.stringify(usuario));
          console.log('Usuario guardado en localStorage:', localStorage.getItem('usuario'));  
        // Redirigir según rol
        if (rol === 'admin') navigate('/inicio');
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
        else navigate('/inicioSocio');
      } else {
        setErrorMsg(mensaje || 'Login fallido');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.mensaje || 'Error al iniciar sesión');
    }
  };
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
  return (
    <>
      <Header />
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="p-4 shadow" style={{ borderRadius: '15px', borderColor: '#198754' }}>
            <h3 className="text-center mb-4 text-success">Iniciar Sesión</h3>
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
            {errorMsg && (
              <div className="alert alert-danger" role="alert">
                {errorMsg}
              </div>
            )}
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
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
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
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
<<<<<<< HEAD

=======
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
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
<<<<<<< HEAD

export default Login;
=======
export default Login;
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
