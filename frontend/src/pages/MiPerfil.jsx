import { Form, Button, Row, Col, Image, Card } from 'react-bootstrap';
import Header from '../components/Header';

function MiPerfil() {
  const usuario = localStorage.getItem("usuario")
    ? JSON.parse(localStorage.getItem("usuario"))
    : null;

  if (!usuario) return <p>No hay usuario logueado</p>;

  const { role, socio, administrativo, email } = usuario;

  const formatearFecha = (fechaNac) => {
    if (!fechaNac) return '';
    const datePart = fechaNac.toString().split('T')[0]; 
    const [year, month, day] = datePart.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day); 
    return dateObj.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const nombre = role === "SOCIO" ? socio?.nombre : administrativo?.nombre;
  const apellido = role === "SOCIO" ? socio?.apellido : administrativo?.apellido;
  const dni = role === "SOCIO" ? socio?.dni : administrativo?.dni;
  const fechaNacimiento = role === "SOCIO" ? socio?.fechaNacimiento : null;
  const sexo = role === "SOCIO" ? socio?.sexo : null;
  const fotoPath = role === "SOCIO" ? socio?.fotoCarnet : null;
  const fotoActualURL = fotoPath ? `http://localhost:3000${fotoPath}` : null;

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="mb-4 text-center">Mi perfil </h3>
              <Row>
                <Col md={7}>
                  <Card body style={{ background: "#f8f9fa", margin: "0.5rem 0" }}>
                    <b>{nombre} {apellido}</b>
                  </Card>

                  <Form.Label style={{ marginTop: "0.5rem" }}>Email</Form.Label>
                  <Card body style={{ border: "1px solid #ccc", borderRadius: "0.5rem", margin: "0.5rem 0" }}>
                    {email}
                  </Card>

                  <Form.Label style={{ marginTop: "0.5rem" }}>DNI</Form.Label>
                  <Card body style={{ border: "1px solid #ccc", borderRadius: "0.5rem", margin: "0.5rem 0" }}>
                    {dni}
                  </Card>

                  {role === "SOCIO" && (
                    <>
                      <Form.Label style={{ marginTop: "0.5rem" }}>Fecha de Nacimiento</Form.Label>
                      <Card body style={{ border: "1px solid #ccc", borderRadius: "0.5rem", margin: "0.5rem 0" }}>
                        {formatearFecha(fechaNacimiento)}
                      </Card>

                      <Form.Label style={{ marginTop: "0.5rem" }}>Sexo</Form.Label>
                      <Card body style={{ border: "1px solid #ccc", borderRadius: "0.5rem", margin: "0.5rem 0" }}>
                        {sexo}
                      </Card>
                    </>
                  )}
                </Col>

                <Col md={5} className="d-flex flex-column align-items-center justify-content-start">
                  {role === "SOCIO" && (
                    <>
                      <div className="mb-3 w-100">
                        <Form.Label style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Foto carnet</Form.Label>
                      </div>
                      {fotoActualURL ? (
                        <Image
                          src={fotoActualURL}
                          alt="Foto carnet"
                          rounded
                          fluid
                          style={{
                            width: 220,
                            height: 220,
                            objectFit: "cover",
                            border: "1px solid #ccc",
                            background: "#f8f9fa"
                          }}
                        />
                      ) : (
                        <div className="text-muted mt-2" style={{
                          fontSize: "0.95rem",
                          border: "1px solid #ccc",
                          width: 220,
                          height: 220,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#f8f9fa",
                          borderRadius: "0.5rem"
                        }}>
                          No se ha seleccionado foto
                        </div>
                      )}
                    </>
                  )}

                  <Button
                    variant="success"
                    href={'/modDatos'}
                    style={{ marginTop: "1rem" }}
                  >
                    Modificar Mi Perfil
                  </Button>
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
