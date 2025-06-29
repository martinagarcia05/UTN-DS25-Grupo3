import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

        <Button variant="primary" type="submit" className="me-2">
          Ingresar
        </Button>
        <Button variant="secondary" className="me-2">Recuperar contraseña</Button>
        <Button variant="secondary">Crear cuenta</Button>
      </Form>
    </div>
  );
}

export default IniciarSesion;

/*
function IniciarSesion(){
    return (
        <div>
            <h1>Iniciar Sesion</h1>
            <form action="">
                <label htmlFor="">Ingrese su Nombre</label>
                <input></input>
            </form>
        </div>
    );
}


export default IniciarSesion;*/