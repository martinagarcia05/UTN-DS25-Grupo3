import React, { useState } from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';

const paisesLatam = [
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador",
  "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay",
  "Perú", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela"
];

const sexos = [
  { value: "masculino", label: "Masculino" },
  { value: "femenino", label: "Femenino" },
  { value: "otro", label: "Otro" }
];

function SocioEditForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    mail: "",
    fechaNacimiento: "",
    pais: "",
    sexo: ""
  });
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFotoPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFotoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los datos
    alert("Datos guardados correctamente (simulado)");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="mb-4 text-center">Modificar datos del socio</h3>
            <Row>
              <Col md={7}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      name="apellido"
                      value={form.apellido}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      name="dni"
                      value={form.dni}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="mail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="mail"
                      value={form.mail}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fechaNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control
                      type="date"
                      name="fechaNacimiento"
                      value={form.fechaNacimiento}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pais">
                    <Form.Label>País</Form.Label>
                    <Form.Select
                      name="pais"
                      value={form.pais}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar país</option>
                      {paisesLatam.map((pais) => (
                        <option key={pais} value={pais}>{pais}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="sexo">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select
                      name="sexo"
                      value={form.sexo}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccionar sexo</option>
                      {sexos.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Guardar cambios
                  </Button>
                </Form>
              </Col>
              <Col md={5} className="d-flex flex-column align-items-center justify-content-start">
                <div className="mb-3 w-100">
                  <Form.Label>Foto carnet</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFotoChange}
                  />
                </div>
                {fotoPreview && (
                    <Image
                        src={fotoPreview}
                        alt="Foto carnet"
                        rounded
                        fluid
                        style={{
                        width: 220,
                        height: 220,
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "1px solid #ccc",
                        background: "#f8f9fa"
                        }}
                    />
                    )}
                {!fotoPreview && (
                  <div className="text-muted mt-2" style={{ fontSize: "0.95rem" }}>
                    No se ha seleccionado foto
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocioEditForm;
