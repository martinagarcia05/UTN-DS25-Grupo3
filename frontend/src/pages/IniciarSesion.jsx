import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row, Card, InputGroup } from 'react-bootstrap';
import Header from '../components/HeaderIni';
import axios from 'axios';
import { setAuth } from '../helpers/auth'; 
import { useNavigate } from "react-router-dom" ;
import { useAuth } from '../contexts/AuthContext';
//import { setAuth } from '../helpers/auth';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validations/loginSchema.js";

function Login() {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
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
      console.error("❌ Error en login:", err);
      setError("root", {
        type: "manual",
        message: err.message || "Credenciales inválidas",
      });
    }
  };


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

            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              {/* Email o DNI */}
              <Form.Group className="mb-3" controlId="validationEmailOdni">
                <Form.Label>Email o DNI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su email o DNI"
                  {...register("emailOdni")}
                  isInvalid={!!errors.emailOdni}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.emailOdni?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationPassword">
                <Form.Label>Contraseña</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={mostrarPassword ? 'text' : 'password'}
                    placeholder="Ingrese su contraseña"
                    {...register("password")}
                    isInvalid={!!errors.password}
                  />
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                  >
                    {mostrarPassword ? 'Ocultar' : 'Mostrar'}
                  </Button>
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </InputGroup>
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
