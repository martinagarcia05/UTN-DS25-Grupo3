import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from '../components/HeaderIni'



function IniciarSesion() {
  const [validated, setValidated] = useState(false);
  const [legajo, setLegajo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (legajo.trim() === "") {
        window.location.href = "/"; //PONER RUTA HOME USUARIO
      }else{
        window.location.href = "/"; //PONER RUTA HOME ADMIN
      }
      
    } 

    setValidated(true);
  };

  return (
<>
<Header></Header>

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
            value={legajo}
            onChange={(e) => setLegajo(e.target.value)}
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
      <Button type="submit">Ingresar</Button>
    </Form>
  
  
  </Row>
  </>
  );
}


export default IniciarSesion;

