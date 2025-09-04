import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const paisesLatam = [
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador",
  "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay",
  "Perú", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela"
];

const sexos = [
  { value: "MASCULINO", label: "Masculino" },
  { value: "FEMENINO", label: "Femenino" },
  { value: "OTRO", label: "Otro" }
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
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  //carga de los datos del socio
  const cargarDatosSocio = async () => {
    try {
      //tengo el objeto completo del usuario
      const usuarioStr = localStorage.getItem('usuario');
      if (!usuarioStr) {
        setError('Usuario no encontrado. Inicia sesión nuevamente.');
        setLoading(false);
        return;
      }

      const usuario = JSON.parse(usuarioStr);
      const dni = usuario.socio.dni;  // dni del socio

      if (!dni) {
        setError('DNI no encontrado en el usuario.');
        setLoading(false);
        return;
      }

      
      const response = await axios.get(`http://localhost:3000/api/socios/dni/${dni}/full`);
      const socioData = response.data;

      setForm({
        nombre: socioData.nombre || "",
        apellido: socioData.apellido || "",
        dni: socioData.dni || "",
        mail: socioData.email || "",
        fechaNacimiento: socioData.fechaNacimiento ? socioData.fechaNacimiento.split('T')[0] : "",
        pais: socioData.pais || "",
        sexo: socioData.sexo || ""
      });

      setLoading(false);
    } catch (err) {
      console.error('Error:', err);
      setError('Error al cargar los datos.');
      setLoading(false);
    }
  };

  
  useEffect(() => {
    cargarDatosSocio(); 
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const socioParaEnviar = {
      nombre: form.nombre.trim(),
      apellido: form.apellido.trim(),
      dni: Number(form.dni),
      email: form.mail.trim(),
      fechaNacimiento: form.fechaNacimiento,
      pais: form.pais,
      sexo: form.sexo,
    };

    try {
      const response = await axios.put('http://localhost:3000/api/socios', socioParaEnviar);

      if (response.status === 200) {
        alert("Datos guardados correctamente");
        //actualizo el estado del form
        setForm({
          nombre: socioParaEnviar.nombre,
          apellido: socioParaEnviar.apellido,
          dni: socioParaEnviar.dni,
          mail: socioParaEnviar.email,
          fechaNacimiento: socioParaEnviar.fechaNacimiento,
          pais: socioParaEnviar.pais,
          sexo: socioParaEnviar.sexo,
        });

        //actualizo el local storage
        const usuarioStr = localStorage.getItem('usuario');
        if (usuarioStr) {
          const usuario = JSON.parse(usuarioStr);
          usuario.socio.nombre = socioParaEnviar.nombre;
          usuario.socio.apellido = socioParaEnviar.apellido;
          localStorage.setItem('usuario', JSON.stringify(usuario));
        }

        navigate('../inicioSocio');
        
      } else {
        alert("Error al guardar los datos");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error al guardar los datos");
    }
  };

  if (loading) {
    return <div className="text-center my-5">Cargando datos...</div>;
  }

  if (error) {
    return <Alert variant="danger" className="my-5">{error}</Alert>;
  }

  return (
    <>
      <Header />
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
                        placeholder="Nombre"
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
    </>
  );
}

export default SocioEditForm;
