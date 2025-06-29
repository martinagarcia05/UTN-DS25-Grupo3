import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; 

function IniciarSesion() {
   


  return (
    <div className="container mt-4">
      <h1>Ingresar</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formDNI">
          <Form.Label>DNI</Form.Label>
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
        <Button variant="secondary" className="me-2">Recuperar contraseña</Button>
        <Button variant="secondary">Crear cuenta</Button>
        </div>
        
      </Form>
    </div>
  );
}

export default IniciarSesion