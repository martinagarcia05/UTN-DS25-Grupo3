import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from '../components/HeaderIni';
import { ValidarSocio } from '../components/ValidarSocio';



function IniciarSesion() {
  const [validated, setValidated] = useState(false);
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const mailAdmin = 'admin@gmail.com' // LA IDEA ES Q SE OBTENGA DESDE LA API

  if (form.checkValidity() === false) {
    event.stopPropagation();
    setValidated(true);
    return;
  }
  const valido = await ValidarSocio({mail: mail, pswd: password});
  if (valido){
    if (mail.trim() === mailAdmin) { 
      localStorage.setItem('role', 'admin'); // Guarda el rol de admin
      window.location.href = "/inicio";
    } else {
      localStorage.setItem('role', 'user'); // Guarda el rol de usuario
      window.location.href = "/inicioSocio";
    }
    setValidated(true);
    return;
  }else{
    setValidated(true);
    alert('Email o contraseña incorrecta');
    return;
  }
};

  return (
<>
<Header></Header>

<Row className="justify-content-center">
      
        <h2 className="text-center mb-4">Bienvenido!</h2>

    <Form noValidate validated={validated} onSubmit={handleSubmit} id='loginForm'>
      <Row className="justify-content-center">

        <Form.Group as={Col} md="mb-4" controlId="validationCustomUsername">
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
      
      <Row className="justify-content-center">  

        <Form.Group as={Col} md="mb-4" controlId="validationCustom02">
          <div style={{textAlign: 'center'}}><Form.Label>Ingrese su Email</Form.Label></div>
          <Form.Control
            type="text"
            placeholder="legajo"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
              Debe Ingresar su email
            </Form.Control.Feedback>
          <Form.Control.Feedback>✔</Form.Control.Feedback>
        </Form.Group>
        
      </Row>

      <Row className="justify-content-center">  

        <Form.Group as={Col} md="mb-4" controlId="validationCustom02">
          <div style={{textAlign: 'center'}}><Form.Label>Ingrese su Contraseña</Form.Label></div>
          <Form.Control
            required
            type="text"
            placeholder="3j3mPl0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      <Button type="submit" style={{backgroundColor: '#198754'}}>Ingresar</Button>
    </Form>
  
  
  </Row>
  </>
  );
}


export default IniciarSesion;

