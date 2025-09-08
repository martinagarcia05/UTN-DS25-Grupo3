import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const paisesLatam = [
  { value: "ARGENTINA", label: "Argentina" },
  { value: "BOLIVIA", label: "Bolivia" },
  { value: "BRASIL", label: "Brasil" },
  { value: "CHILE", label: "Chile" },
  { value: "COLOMBIA", label: "Colombia" },
  { value: "COSTA_RICA", label: "Costa Rica" },
  { value: "CUBA", label: "Cuba" },
  { value: "ECUADOR", label: "Ecuador" },
  { value: "EL_SALVADOR", label: "El Salvador" },
  { value: "GUATEMALA", label: "Guatemala" },
  { value: "HONDURAS", label: "Honduras" },
  { value: "MEXICO", label: "México" },
  { value: "NICARAGUA", label: "Nicaragua" },
  { value: "PANAMA", label: "Panamá" },
  { value: "PARAGUAY", label: "Paraguay" },
  { value: "PERU", label: "Perú" },
  { value: "PUERTO_RICO", label: "Puerto Rico" },
  { value: "REPUBLICA_DOMINICANA", label: "República Dominicana" },
  { value: "URUGUAY", label: "Uruguay" },
  { value: "VENEZUELA", label: "Venezuela" }
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFoto(file);
    setFotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const socioParaEnviar = {
      nombre: form.nombre.trim(),
      apellido: form.apellido.trim(),
      dni: parseInt(form.dni, 10), 
      email: form.mail.trim(),
      fechaNacimiento: form.fechaNacimiento,
      pais: form.pais,
      sexo: form.sexo,
    };

    const formData = new FormData();
    Object.keys(socioParaEnviar).forEach(key => formData.append(key, socioParaEnviar[key]));
    if (foto) formData.append('foto', foto);

    try {
      const response = await axios.put('http://localhost:3000/api/socios', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        alert("Datos guardados correctamente");
        
        // Actualizamos el localStorage con los nuevos datos, incluyendo la foto
        const usuarioStr = localStorage.getItem('usuario');
        if (usuarioStr) {
          const usuario = JSON.parse(usuarioStr);
          // response.data contiene el socio actualizado desde el backend
          usuario.socio = response.data; 
          localStorage.setItem('usuario', JSON.stringify(usuario));

          // --- ESTA ES LA LÍNEA CLAVE ---
          // Emitimos un evento para que otros componentes (como el Header) sepan que el perfil se actualizó.
          window.dispatchEvent(new Event('profileUpdated'));
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

  //parte para el manejo de la imagen
  const usuarioStr = localStorage.getItem('usuario');
  const usuario = usuarioStr ? JSON.parse(usuarioStr) : null;
  const fotoActualPath = usuario?.socio?.fotoCarnet;

  const fotoActualURL = fotoActualPath ? `http://localhost:3000${fotoActualPath}` : null;
  const imagenParaMostrar = fotoPreview || fotoActualURL;

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
                          <option key={pais.value} value={pais.value}>{pais.label}</option>
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
                      onChange={handleFileChange}
                    />
                  </div>

                  {imagenParaMostrar ? (
                    <Image
                      src={imagenParaMostrar}
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
                  ) : (
                    <div className="text-muted mt-2" style={{ 
                        fontSize: "0.95rem",
                        width: 220,
                        height: 220,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: "1px dashed #ccc",
                        borderRadius: '0.25rem'
                      }}>
                      No hay foto seleccionada
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