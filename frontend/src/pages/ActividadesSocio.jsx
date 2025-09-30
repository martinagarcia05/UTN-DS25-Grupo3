import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import axios from 'axios';

function ActividadesSocio() {
  const [actividades, setActividades] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);
  const [socioId, setSocioId] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Obtener socio desde localStorage
  useEffect(() => {
    const usuarioStr = localStorage.getItem("usuario");
    if (usuarioStr) {
      try {
        const usuario = JSON.parse(usuarioStr);
        setSocioId(usuario?.socio?.id || null);
      } catch (err) {
        console.error("Error al parsear usuario de localStorage:", err);
      }
    }
  }, []);

  // Cargar actividades e inscripciones del socio
  useEffect(() => {
    if (!socioId) return;

    const fetchData = async () => {
      try {
        const [resActividades, resInscripciones] = await Promise.all([
          axios.get("http://localhost:3000/api/actividades"),
          axios.get(`http://localhost:3000/api/actividadSocio/socio/${socioId}`)
        ]);

        setActividades(resActividades.data.actividades || []);
        setInscripciones(resInscripciones.data.actividadSocios || []); // 👈 fijate que sea "actividadSocios"
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar las actividades.");
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [socioId]);

  // Verificar si ya está inscripto
  const estaInscripto = (actividadId) =>
    inscripciones.some(i => i.actividadId === actividadId || i.actividad?.id === actividadId);

  // Inscribir socio en actividad
  const handleInscribirse = async (actividadId) => {
    if (!socioId) return;
    if (estaInscripto(actividadId)) {
      alert("Ya estás inscrito en esta actividad");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/actividadSocio", {
        actividadId,
        socioId
      });
      setInscripciones(prev => [...prev, res.data.actividadSocio]); 
      alert("Te inscribiste correctamente");
    } catch (err) {
      console.error(err);
      alert("No se pudo inscribir en la actividad");
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5 d-flex justify-content-center">
        <div
          className="w-100 p-4"
          style={{
            maxWidth: "900px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          {/* Actividades disponibles */}
          <h2 className="mb-4" style={{ color: "#198754", fontWeight: "700" }}>
            Actividades
          </h2>

          {cargando ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : actividades.filter(a => a.activo).length === 0 ? (
            <Alert variant="info">No hay actividades activas.</Alert>
          ) : (
            <Row className="gy-4">
              {actividades
                .filter(a => a.activo)
                .map((actividad) => (
                  <Col xs={12} md={6} key={actividad.id}>
                    <Card
                      className="shadow-sm border-0 rounded-4 p-3"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-semibold fs-5">
                          {actividad.nombre}
                        </span>
                        {estaInscripto(actividad.id) ? (
                          <Button variant="secondary" disabled>
                            Ya inscrito
                          </Button>
                        ) : (
                          <Button
                            variant="success" 
                            onClick={() => handleInscribirse(actividad.id)}
                          >
                            Inscribirme
                          </Button>
                        )}
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          )}

          {/* Mis actividades */}
          <h3 className="mt-5 mb-3" style={{ color: "#198754", fontWeight: "700" }}>
            Mis actividades
          </h3>
          {inscripciones.length === 0 ? (
            <Alert variant="info">Todavía no estás inscripto en ninguna actividad.</Alert>
          ) : (
            <ul>
              {inscripciones.map((i) => (
                <li key={i.id}>
                  {i.actividad ? i.actividad.nombre : `Actividad #${i.actividadId}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </>
  );
}

export default ActividadesSocio;
