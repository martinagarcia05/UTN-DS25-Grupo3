import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Card, InputGroup } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import axios from 'axios';
import { setAuth } from '../helpers/auth'; 
import { useNavigate } from "react-router-dom" ;
import { useForm } from "react-hook-form" ;
import { yupResolver } from "@hookform/resolvers/yup" ;
import loginSchema from "../validations/loginSchema.js" ;
import { useAuth } from '../contexts/AuthContext';


//hacer las validaciones de los datos con yup carpeta validations 
function Login() {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  async function onSubmit (data) {
    try {
      const result = await login(data.emailOdni, data.password);

      if (result.success) {

        //const { user } = result;
        console.log('Usuario guardado en localStorage:', user);

        // Resuelto con ProvateRoute
        // if (user.role === 'ADMINISTRATIVO') {
        //   navigate('/inicio'); 
        // } else if (user.role === 'SOCIO') {
        //   navigate('/inicioSocio'); 
        // } else if (user.role === 'ADMIN') {
        //   navigate('/inicioAdmin'); 
        // } 
      } else {
        throw new Error(result.error || 'Credenciales inválidas');
      }

  } catch (err) {
    console.log(err);
    setError("root", {
      type: "manual",
      message: err.message || "Credenciales inválidas"
 });
 }

  }

  
  return (
    <>
      <Header />
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="p-4 shadow" style={{ borderRadius: '15px', borderColor: '#198754' }}>
            <h3 className="text-center mb-4 text-success">Iniciar Sesión</h3>
            {errors.root && (
              <div className="alert alert-danger" role="alert">
                {errors.root?.message}
              </div>
            )}
            <Form noValidate onSubmit={handleSubmit (onSubmit)}>
              <Form.Group className="mb-3" controlId="validationEmailOdni">
                <Form.Label>Email o DNI</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingrese su email o DNI"
                  // Usa el registro de react-hook-form
                  {...register("emailOdni")}
                />
                {errors.emailOdni && <small className="text-danger">{errors.emailOdni.message}</small>}
                <Form.Control.Feedback type="invalid">
                  Debe ingresar su email o DNI
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationPassword">
                <Form.Label>Contraseña</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type={mostrarPassword ? 'text' : 'password'}
                    placeholder="Ingrese su contraseña"
                    {...register("password")}
                  />
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                  >
                    {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    Debe ingresar su contraseña
                  </Form.Control.Feedback>
                </InputGroup>
                {errors.password && <small className="text-danger">{errors.password.message}</small>}
              </Form.Group>
              <Button type="submit" disabled={isSubmitting} className="w-100" style={{ backgroundColor: '#198754' }}>
                {isSubmitting ? 'Ingresando...' : 'Iniciar Sesión'}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
