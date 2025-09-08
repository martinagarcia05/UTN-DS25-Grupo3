import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';


function MiPerfil() {

    const nom = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.nombre : "";
    const ap = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.apellido : "";
    const email = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.email : "";

    const fechaNac = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.fechaNacimiento : "";
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

    const dni = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.dni : "";
    const sexo = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.sexo : "";


    const fotoPath = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")).socio.fotoCarnet : null;

    const fotoActualURL = fotoPath ? `http://localhost:3000${fotoPath}` : null;

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
                        <Card body style={{ background: "#f8f9fa", margin: "0.5rem 0" }}><b>{nom} {ap}</b></Card>
                        <Form.Label style={{marginTop: "0.5rem"}}>Email</Form.Label>
                        <Card body style={{  border: "1px solid #ccc", borderRadius: "0.5rem" , margin: "0.5rem 0" }}>{email}</Card>
                        <Form.Label style={{marginTop: "0.5rem"}}>DNI</Form.Label>
                        <Card body style={{  border: "1px solid #ccc", borderRadius: "0.5rem" , margin: "0.5rem 0" }}>{dni}</Card>
                        <Form.Label style={{marginTop: "0.5rem"}}>Fecha de Nacimiento</Form.Label>
                        <Card body style={{  border: "1px solid #ccc", borderRadius: "0.5rem" , margin: "0.5rem 0" }}>{formatearFecha(fechaNac)}</Card>
                        <Form.Label style={{marginTop: "0.5rem"}}>Sexo</Form.Label>
                        <Card body style={{  border: "1px solid #ccc", borderRadius: "0.5rem" , margin: "0.5rem 0" }}>{sexo}</Card>
                        
                    </Col>
                  
                  <Col md={5} className="d-flex flex-column align-items-center justify-content-start">
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
                            objectPosition: "center",
                            border: "1px solid #ccc",
                            background: "#f8f9fa"
                            }}
                        />
                    ) : (
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