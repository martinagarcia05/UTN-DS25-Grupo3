import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from '../components/HeaderIni'

function Registrarse() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      alert("Registrado! Inicia sesion pra ingresar");
    }
    setValidated(true);
  };

  return (
    <>
    <Header></Header>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <div style={{textAlign: 'center'}}><Form.Label>Ingrese su nombre</Form.Label></div>
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
          <div style={{textAlign: 'center'}}><Form.Label>Ingrese su apellido</Form.Label></div>
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
          <div style={{textAlign: 'center'}}><Form.Label>DNI</Form.Label></div>
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
          <div style={{textAlign: 'center'}}><Form.Label>Ingrese su Email</Form.Label></div>
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
          <div style={{textAlign: 'center'}}><Form.Label>Ingrese su Legajo</Form.Label></div>
          <div style={{textAlign: 'center'}}><Form.Label>(en caso de no tener, no ingresar nada)</Form.Label></div>
          <Form.Control
            type="text"
            placeholder="legajo"
            defaultValue=""
          />
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <div style={{textAlign: 'center'}}><Form.Label>Defina su Contraseña</Form.Label></div>
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
      
      <Button type="submit" style={{backgroundColor: '#198754'}}>Registrarme</Button>
    </Form>
    </>
  );
}

export default Registrarse;