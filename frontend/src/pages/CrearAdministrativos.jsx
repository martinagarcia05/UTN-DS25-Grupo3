import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Row } from "react-bootstrap";

function CrearAdministrativo() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register-administrativo", {
        email: formData.email,
        password: formData.password,
        role: "ADMINISTRATIVO",
        administrativo: {
          nombre: formData.nombre,
          apellido: formData.apellido,
          dni: formData.dni,
        },
      });

      setMensaje("Administrativo registrado con éxito");
      console.log("Respuesta backend:", response.data);
      setFormData({ nombre: "", apellido: "", dni: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Error al registrar administrativo");
    }
  };

  return (
    <>
        <Header />
        <Row className="justify-content-center mt-5">
        <div className="container mt-4">
        <h2>Registro de Administrativo</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label>Nombre</label>
            <input
                type="text"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label>Apellido</label>
            <input
                type="text"
                name="apellido"
                className="form-control"
                value={formData.apellido}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label>DNI</label>
            <input
                type="text"
                name="dni"
                className="form-control"
                value={formData.dni}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label>Email</label>
            <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>
            <div className="mb-3">
            <label>Contraseña</label>
            <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>

        {mensaje && <div className="alert alert-success mt-3">{mensaje}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
        </Row>
    </>
  );
}

export default CrearAdministrativo;
