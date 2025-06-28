import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function IniciarSesion() {
  return (
    <Form>
        <h1>Ingresar</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="text" placeholder="12345678" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="xxxxxxx" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar sesion" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      <Button>Recuperar contraseña</Button>
      <Button>Crear cuenta</Button>
    </Form>
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