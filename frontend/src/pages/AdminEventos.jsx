import React, { useEffect, useState } from "react";
import { Button, Card, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

const Clases = () => {
  const [clases, setClases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "add" | "profesor" | "socio"
  const [selectedClase, setSelectedClase] = useState(null);
  const [formData, setFormData] = useState({
    diaSemana: "LUNES",
    horaInicio: "",
    horaFin: "",
    idProfesor: "",
    idSocio: "",
  });

  const DIAS = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];

  // Obtener clases
  const fetchClases = async () => {
    try {
      const res = await axios.get("/api/clases");
      setClases(res.data);
    } catch (err) {
      console.error("Error al obtener clases:", err);
    }
  };

  useEffect(() => {
    fetchClases();
  }, []);

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Abrir modal
  const openModal = (type, clase = null) => {
    setModalType(type);
    setSelectedClase(clase);
    setFormData({
      diaSemana: "LUNES",
      horaInicio: "",
      horaFin: "",
      idProfesor: "",
      idSocio: "",
    });
    setShowModal(true);
  };

  // Guardar datos según el modal
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalType === "add") {
        await axios.post("/api/clases/actividad/1", {
          diaSemana: formData.diaSemana,
          horaInicio: formData.horaInicio,
          horaFin: formData.horaFin,
          idProfesor: formData.idProfesor || null,
        });
      } else if (modalType === "profesor" && selectedClase) {
        await axios.post(`/api/clases/${selectedClase.id}/profesor`, {
          idProfesor: formData.idProfesor,
        });
      } else if (modalType === "socio" && selectedClase) {
        await axios.post(`/api/clases/${selectedClase.id}/socio`, {
          idSocio: formData.idSocio,
        });
      }
      setShowModal(false);
      fetchClases();
    } catch (err) {
      console.error("Error al guardar:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Clases</h2>
      <Button variant="primary" className="mb-3" onClick={() => openModal("add")}>
        ➕ Agregar Clase
      </Button>
      <Row>
        {clases.map((clase) => (
          <Col md={4} key={clase.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  {clase.diaSemana} {clase.horaInicio} - {clase.horaFin}
                </Card.Title>
                <Card.Text>
                  {clase.profesor
                    ? `Profesor: ${clase.profesor.nombre}`
                    : "Sin profesor asignado"}
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button
                    variant="warning"
                    onClick={() => openModal("profesor", clase)}
                  >
                    Asignar Profesor
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => openModal("socio", clase)}
                  >
                    Registrar Socio
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "add" && "Agregar Clase"}
            {modalType === "profesor" && "Asignar Profesor"}
            {modalType === "socio" && "Registrar Socio"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {modalType === "add" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Día de la semana</Form.Label>
                  <Form.Select
                    name="diaSemana"
                    value={formData.diaSemana}
                    onChange={handleChange}
                  >
                    {DIAS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hora Inicio</Form.Label>
                  <Form.Control
                    type="time"
                    name="horaInicio"
                    value={formData.horaInicio}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hora Fin</Form.Label>
                  <Form.Control
                    type="time"
                    name="horaFin"
                    value={formData.horaFin}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>ID Profesor (opcional)</Form.Label>
                  <Form.Control
                    type="number"
                    name="idProfesor"
                    value={formData.idProfesor}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            )}

            {modalType === "profesor" && (
              <Form.Group className="mb-3">
                <Form.Label>ID Profesor</Form.Label>
                <Form.Control
                  type="number"
                  name="idProfesor"
                  value={formData.idProfesor}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}

            {modalType === "socio" && (
              <Form.Group className="mb-3">
                <Form.Label>ID Socio</Form.Label>
                <Form.Control
                  type="number"
                  name="idSocio"
                  value={formData.idSocio}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}

            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Clases;
