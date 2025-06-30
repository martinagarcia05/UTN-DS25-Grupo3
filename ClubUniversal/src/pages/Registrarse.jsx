import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Registrarse() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Ingrese su nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Debe ingresar su nombre
            </Form.Control.Feedback>
          <Form.Control.Feedback>✔</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Ingrese su apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Debe ingresar su apellido
            </Form.Control.Feedback>
          <Form.Control.Feedback>✔</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>DNI</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="DNI"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar su DNI
            </Form.Control.Feedback>
            <Form.Control.Feedback>✔</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Ingrese su Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="email"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Debe ingresar su email
            </Form.Control.Feedback>
          <Form.Control.Feedback>✔</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Ingrese su Legajo</Form.Label>
          <Form.Label>(en caso de no tener, no ingresar nada)</Form.Label>
          <Form.Control
            type="text"
            placeholder="legajo"
            defaultValue=""
          />
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Defina su Contraseña</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="3j3mPl0"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Debe crear su contraseña
            </Form.Control.Feedback>
          <Form.Control.Feedback>✔</Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          label="Quiero recordar sesión"
          feedback="Ingresará a su cuenta sin necesidad de ingresar su contraseña y usuario"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default Registrarse;
/*function Registrarse() {
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
          <Form.Label>DNI</Form.Label>
          <Form.Control type="int" placeholder="12345678" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Legajo (si no tenés, ignorar)</Form.Label>
          <Form.Control type="int" placeholder="12345678" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@hotmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="c0ntrASeñ4-1234" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Recordar sesión" />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-2">
          Ingresar
        </Button>
        <Nav variant="pills" defaultActiveKey="/home">          
            <Nav.Item>
                <Nav.Link href="/">Ya tengo cuenta</Nav.Link>
            </Nav.Item>
        </Nav>
      </Form>
    </div>
  );
}*/
