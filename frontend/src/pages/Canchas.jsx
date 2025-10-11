import React, { useState, useEffect } from "react";
import {Container, Row, Col, Button, Modal, Form, Card, Spinner, Alert, Badge,} from "react-bootstrap";
import { PlusCircle, Pencil, Trash, InfoCircle, Clock,} from "react-bootstrap-icons";
import Header from "../components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema de validación para canchas
const canchaSchema = yup.object({
  nombre: yup.string().required("El nombre es requerido").min(2, "Mínimo 2 caracteres"),
  descripcion: yup.string().optional(),
});

function Canchas() {
  const [actividades, setActividades] = useState([]);
  const [canchas, setCanchas] = useState([]);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState(null);
  
  // Estados de modales
  const [mostrarModalActividades, setMostrarModalActividades] = useState(false);
  const [mostrarModalCanchas, setMostrarModalCanchas] = useState(false);
  const [mostrarModalCrear, setMostrarModalCrear] = useState(false);
  const [mostrarModalEditar, setMostrarModalEditar] = useState(false);
  const [mostrarModalDetalles, setMostrarModalDetalles] = useState(false);
  
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [cargandoCanchas, setCargandoCanchas] = useState(false);

  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(canchaSchema),
  });

  // Cargar actividades al montar el componente
  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/actividades", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setActividades(response.data.actividades || []);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las actividades.");
      } finally {
        setCargando(false);
      }
    };
    fetchActividades();
  }, [token]);

  // Cargar canchas de una actividad específica
  const cargarCanchas = async (actividadId) => {
    setCargandoCanchas(true);
    try {
      const response = await axios.get(`http://localhost:3000/api/canchas/actividad/${actividadId}`, {
      headers: { Authorization: `Bearer ${token}` },
      });
      setCanchas(response.data.canchas || []);
      
    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar las canchas.");
    } finally {
      setCargandoCanchas(false);
    }
  };

  // Abrir modal de canchas de una actividad
  const handleVerCanchas = (actividad) => {
    setActividadSeleccionada(actividad);
    cargarCanchas(actividad.id);
    setMostrarModalCanchas(true);
  };

  // Crear cancha
  const onSubmitCrear = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/canchas`,
        {
          ...data,
          actividadId: actividadSeleccionada.id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Recargar canchas después de crear
      cargarCanchas(actividadSeleccionada.id);
      setMostrarModalCrear(false);
      reset();
      
    } catch (err) {
      console.error(err);
      setError("No se pudo crear la cancha.");
    }
  };

  // Editar cancha
  const onSubmitEditar = async (data) => {
    if (!canchaSeleccionada) return;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/canchas/${canchaSeleccionada.id}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Recargar canchas después de editar
      cargarCanchas(actividadSeleccionada.id);
      setMostrarModalEditar(false);
      reset();
      
    } catch (err) {
      console.error(err);
      setError("No se pudo editar la cancha.");
    }
  };

  // Eliminar cancha
  const handleEliminar = async (canchaId) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar esta cancha?")) return;
    
    try {
      await axios.delete(`http://localhost:3000/api/canchas/${canchaId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      // Recargar canchas después de eliminar
      cargarCanchas(actividadSeleccionada.id);
      
    } catch (err) {
      console.error(err);
      setError("No se pudo eliminar la cancha.");
    }
  };

  // Ver detalles de cancha
  const handleVerDetalles = (cancha) => {
    setCanchaSeleccionada(cancha);
    setMostrarModalDetalles(true);
  };

  // Abrir modal de edición
  const handleEditar = (cancha) => {
    setCanchaSeleccionada(cancha);
    setValue("nombre", cancha.nombre);
    setValue("descripcion", cancha.descripcion || "");
    setMostrarModalEditar(true);
  };

  const actividadesActivas = actividades.filter(a => a.activo);

  return (
    <>
      <Header />
      <Container className="mt-5 d-flex justify-content-center">
        <div
          className="w-100 p-4"
          style={{
            maxWidth: "1000px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* Encabezado */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ color: "#198754", fontWeight: "700" }}>Gestión de Canchas</h2>
            <p className="text-muted mb-0">
              Selecciona una actividad para gestionar sus canchas
            </p>
          </div>

          {/* Listado de actividades */}
          {cargando ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : actividadesActivas.length === 0 ? (
            <Alert variant="info">No hay actividades activas.</Alert>
          ) : (
            <Row className="gy-4">
              {actividadesActivas.map((actividad) => (
                <Col xs={12} key={actividad.id}>
                  <Card className="shadow-sm border-0 rounded-4 p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-semibold fs-5">{actividad.nombre}</span>
                        
                      </div>
                      <Button
                        variant="success"
                        onClick={() => handleVerCanchas(actividad)}
                        className="d-flex align-items-center"
                      >
                        Gestionar Canchas
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {/* Modal de canchas de una actividad */}
          <Modal
            show={mostrarModalCanchas}
            onHide={() => setMostrarModalCanchas(false)}
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Canchas de {actividadSeleccionada?.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cargandoCanchas ? (
                <div className="d-flex justify-content-center py-3">
                  <Spinner animation="border" />
                </div>
              ) : canchas.length === 0 ? (
                <Alert variant="info">No hay canchas registradas para esta actividad.</Alert>
              ) : (
                <Row className="gy-3">
                  {canchas.map((cancha) => (
                    <Col xs={12} key={cancha.id}>
                      <Card className="border-0 shadow-sm">
                        <Card.Body className="p-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h6 className="mb-1">{cancha.nombre}</h6>
                              <div className="text-muted small">
                                {cancha.descripcion || "Sin descripción"}
                              </div>
                            </div>
                            <div className="d-flex gap-2">
                              <Button
                                variant="outline-info"
                                size="sm"
                                onClick={() => handleVerDetalles(cancha)}
                              >
                                <InfoCircle />
                              </Button>
                              <Button
                                variant="outline-warning"
                                size="sm"
                                onClick={() => handleEditar(cancha)}
                              >
                                <Pencil />
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleEliminar(cancha.id)}
                              >
                                <Trash />
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => {
                  reset();
                  setMostrarModalCrear(true);
                }}
                className="d-flex align-items-center"
              >
                <PlusCircle className="me-2" />
                Agregar Cancha
              </Button>
              <Button
                variant="secondary"
                onClick={() => setMostrarModalCanchas(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal crear cancha */}
          <Modal
            show={mostrarModalCrear}
            onHide={() => setMostrarModalCrear(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Agregar Cancha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmitCrear)}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de la cancha</Form.Label>
                  <Form.Control {...register("nombre")} placeholder="Ej: Cancha Principal" />
                  {errors.nombre && (
                    <p className="text-danger small">{errors.nombre.message}</p>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Descripción (opcional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register("descripcion")}
                    placeholder="Descripción adicional de la cancha..."
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Crear Cancha
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Modal editar cancha */}
          <Modal
            show={mostrarModalEditar}
            onHide={() => setMostrarModalEditar(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Editar Cancha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit(onSubmitEditar)}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de la cancha</Form.Label>
                  <Form.Control {...register("nombre")} />
                  {errors.nombre && (
                    <p className="text-danger small">{errors.nombre.message}</p>
                  )}
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Descripción (opcional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register("descripcion")}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Guardar Cambios
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Modal detalles de cancha */}
          <Modal
            show={mostrarModalDetalles}
            onHide={() => setMostrarModalDetalles(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Detalles de la Cancha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {canchaSeleccionada && (
                <div>
                  <h5>{canchaSeleccionada.nombre}</h5>
                  <div className="mt-3">
                    {canchaSeleccionada.descripcion && (
                      <p><strong>Descripción:</strong> {canchaSeleccionada.descripcion}</p>
                    )}
                    <p><strong>Estado:</strong> 
                      <Badge bg={canchaSeleccionada.activa ? "success" : "danger"} className="ms-2">
                        {canchaSeleccionada.activa ? "Activa" : "Inactiva"}
                      </Badge>
                    </p>
                  </div>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setMostrarModalDetalles(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default Canchas;
