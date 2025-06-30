import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';


function IniciarSesion() {
   


  return (
    <div className="container mt-4">

      <h1>Bienvenido!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formDNI">
          <Form.Label>DNI / Legajo</Form.Label>
          <Form.Control type="text" placeholder="12345678" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Recordar sesión" />
        </Form.Group>

        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <Button variant="primary" type="submit" className="me-2">
          Ingresar
        </Button>
        <Nav variant="pills" defaultActiveKey="/home">          
            <Nav.Item>
                <Nav.Link href="/registro">Crear cuenta</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Recuperar contraseña</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
        
      </Form>
    </div>
  );
}

export default IniciarSesion