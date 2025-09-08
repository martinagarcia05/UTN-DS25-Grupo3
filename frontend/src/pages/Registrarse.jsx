import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Card, InputGroup } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registrarse() {
  const [validated, setValidated] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [sexo, setSexo] = useState('');
  const [pais, setPais] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/registro', {
        nombre,
        apellido,
        dni: parseInt(dni),
        email,
        password,
        fechaNacimiento,
        sexo,
        pais,
        // usuarioId lo puede generar el backend según corresponda
      });

      const { estadoIngreso, mensaje } = response.data;

      if (estadoIngreso === 'ingresoExitoso') {
        navigate('/IniciarSesion');
      } else {
        setErrorMsg(mensaje || 'Error en el registro');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(error.response?.data?.mensaje || 'Error al registrar');
    }
  };

  return (
    <>
      <Header />
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="p-4 shadow" style={{ borderRadius: '15px' }}>
            <h3 className="text-center mb-4 text-success">Registrarse</h3>

            {errorMsg && (
              <div className="alert alert-danger" role="alert">
                {errorMsg}
              </div>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su nombre
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su apellido
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationDNI">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingrese su DNI"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su DNI
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su email
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFechaNacimiento">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su fecha de nacimiento
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationSexo">
                  <Form.Label>Sexo</Form.Label>
                  <Form.Select
                    required
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                  >
                    <option value="">Seleccione</option>
                    <option value="FEMENINO">Femenino</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="OTRO">Otro</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Debe seleccionar su sexo
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* --- CAMBIO REALIZADO AQUÍ --- */}
                <Form.Group as={Col} md="12" controlId="validationPais">
                  <Form.Label>País</Form.Label>
                  <Form.Select
                    required
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                  >
                    <option value="">Seleccione un país</option>
                    <option value="ARGENTINA">Argentina</option>
                    <option value="BOLIVIA">Bolivia</option>
                    <option value="BRASIL">Brasil</option>
                    <option value="CHILE">Chile</option>
                    <option value="COLOMBIA">Colombia</option>
                    <option value="COSTA_RICA">Costa Rica</option>
                    <option value="CUBA">Cuba</option>
                    <option value="ECUADOR">Ecuador</option>
                    <option value="EL_SALVADOR">El Salvador</option>
                    <option value="GUATEMALA">Guatemala</option>
                    <option value="HONDURAS">Honduras</option>
                    <option value="MEXICO">México</option>
                    <option value="NICARAGUA">Nicaragua</option>
                    <option value="PANAMA">Panamá</option>
                    <option value="PARAGUAY">Paraguay</option>
                    <option value="PERU">Perú</option>
                    <option value="PUERTO_RICO">Puerto Rico</option>
                    <option value="REPUBLICA_DOMINICANA">República Dominicana</option>
                    <option value="URUGUAY">Uruguay</option>
                    <option value="VENEZUELA">Venezuela</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Debe seleccionar su país
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup>
                    <Form.Control
                      required
                      type={mostrarPassword ? 'text' : 'password'}
                      placeholder="Defina su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => setMostrarPassword(!mostrarPassword)}
                    >
                      {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                    </Button>
                    <Form.Control.Feedback type="invalid">
                      Debe crear su contraseña
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Button type="submit" className="w-100" style={{ backgroundColor: '#198754' }}>
                Registrarme
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Registrarse;
