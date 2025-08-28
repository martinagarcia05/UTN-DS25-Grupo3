import React, { useState } from 'react';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import Header from '../components/Header';

function MiPerfil() {
  /*Storage {usuario: '{"id":13,"nombre":"martina","apellido":"Garcia Ame…NINO","pais":"Argentina","email":"m1m@gmail.com"}', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsI…1NTJ9.AUrjyGhsFs90QD4JBvNwpVKnNO7DecrjiOCcGaPogiM', rol: 'socio', length: 3} */
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const nom = usuario ? usuario.nombre : "";
  const ap= usuario ? usuario.apellido : "";
  const email= usuario ? usuario.email : "";
  const tel= usuario ? usuario.telefono : "";
  const fechaNac= usuario ? usuario.fechaNac : "";
  const dni= usuario ? usuario.dni : "";
  const sexo= usuario ? usuario.sexo : "";



  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
 
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Datos guardados correctamente");
//   };

  return (
    <>
    <Header></Header>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="mb-4 text-center">Mi perfil <b style={{ color: "#198754" }}>cuevero</b></h3>
            <Row>
              <Col md={7}>
                <Form> {/* onSubmit={handleSubmit} */}
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dni">
                    <Form.Label>DNI</Form.Label>
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="mail">
                    <Form.Label>Email</Form.Label>
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fechaNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pais">
                    <Form.Label>País</Form.Label>
                    
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="sexo">
                    <Form.Label>Sexo</Form.Label>
                    
                  </Form.Group>
                  
                </Form>
              </Col>
              <Col md={5} className="d-flex flex-column align-items-center justify-content-start">
                <div className="mb-3 w-100">
                  <Form.Label style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Foto carnet</Form.Label>

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
                  <div className="text-muted mt-2" style={{ fontSize: "0.95rem", border: "1px solid #ccc", width: 220, height: 220, display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f9fa", borderRadius: "0.5rem" }}>
                    No se ha seleccionado foto
                  </div>
                )}
                <Button variant="dark"  href={'/socio-mod'} style={{ marginTop: "1rem", backgroundColor: "#198754" }}>Modificar Mi Perfil</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
    </>
  );





    
    

}
export default MiPerfil;