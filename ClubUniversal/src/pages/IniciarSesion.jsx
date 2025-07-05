import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function IniciarSesion() {
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

<Row className="justify-content-center"> {/* Centra la columna dentro de la fila */}
      
        <h2 className="text-center mb-4">Bienvenido!</h2>

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="justify-content-center">

        <Form.Group as={Col} md="mb-4" controlId="validationCustomUsername">
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

    <Row className="justify-content-center">

      <Form.Group as={Col} md="mb-4" controlId="validationCustom02">
          <Form.Label>Ingrese su Legajo</Form.Label>
          <Form.Label>(en caso de no tener, no ingresar nada)</Form.Label>
          <Form.Control
            type="text"
            placeholder="legajo"
            defaultValue=""
          />
        </Form.Group>

    </Row>
      
      <Row className="justify-content-center">  

        <Form.Group as={Col} md="mb-4" controlId="validationCustom02">
          <Form.Label>Ingrese su Contraseña</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="3j3mPl0"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
              Debe Ingresar su contraseña
            </Form.Control.Feedback>
          <Form.Control.Feedback>✔</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Form.Group className="mb-4">
        <Form.Check
          label="Quiero recordar sesión"
          feedback="Ingresará a su cuenta sin necesidad de ingresar su contraseña y usuario"
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  
  
  </Row>
  
  );
}


export default IniciarSesion;

{/*function IniciarSesion() {
   


  return (
    <div className="container mt-4">

      <h1>Bienvenido!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formDNI">
          <Form.Label>Usuario (tu usuario es tu DNI o tu legajo)</Form.Label>
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
}*/}

