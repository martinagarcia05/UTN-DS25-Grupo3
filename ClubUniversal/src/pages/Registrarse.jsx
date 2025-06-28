import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registrarse() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="John" />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Doe" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@hotmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar sesion" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button>Ya tengo cuenta</Button>
    </Form>
  );
}

export default Registrarse;
/*
function Registrarse(){
    return (
        <div>
            <h1>Registrarse</h1>
        </div>
    );
}


export default Registrarse;*/