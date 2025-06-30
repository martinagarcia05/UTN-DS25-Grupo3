import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

function Registrarse() {
  return (
    <div className="container mt-4">
        
      <h1>Registrarse</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Doe" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@hotmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Recordar sesión" />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">
          Submit
        </Button>
        <Nav variant="pills" defaultActiveKey="/home">          
            <Nav.Item>
                <Nav.Link href="/">Ya tengo cuenta</Nav.Link>
            </Nav.Item>
        </Nav>
      </Form>
    </div>
  );
}

export default Registrarse;