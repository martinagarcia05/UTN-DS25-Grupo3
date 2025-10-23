import React, { useState, useEffect } from "react";
import { Button, Card, Badge, Row, Col, Alert } from "react-bootstrap";
import Header from "../components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/SocioEntradas.css";
import fondo from "../assets/fondo.jpg";

export default function MisReservas() {
  const [misReservas, setMisReservas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const API_BASE = "http://localhost:3000/api";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const usuarioData = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioData && usuarioData.socio) {
      setUsuario(usuarioData);
      fetchMisReservas(usuarioData.socio.id);
    }
  }, []);

  // Recargar reservas cuando se vuelve a la página
  useEffect(() => {
    const handleFocus = () => {
      if (usuario?.socio?.id) {
        fetchMisReservas(usuario.socio.id);
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [usuario]);

  async function fetchMisReservas(socioId) {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/reserva/socio/reservas-activas?socioId=${socioId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) throw new Error("Error al cargar reservas");
      const data = await res.json();
      
      setMisReservas(data.reservas || data);
    } catch (err) {
      console.error('❌ Error en fetchMisReservas:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  const formatearFecha = (fecha) => {
    // Extraer solo la fecha (YYYY-MM-DD) para evitar problemas de zona horaria
    const fechaStr = fecha.split('T')[0]; // "2025-10-24"
    const [año, mes, dia] = fechaStr.split('-');
    
    // Crear fecha local sin zona horaria
    const fechaObj = new Date(parseInt(año), parseInt(mes) - 1, parseInt(dia));
    
    return fechaObj.toLocaleDateString("es-AR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const entradasFiltradas = misReservas;

  const getEstadoBadge = (reserva) => {
    // Todas las reservas que vienen del backend son activas y futuras
    return <Badge bg="success">Activa</Badge>;
  };

  const cancelarReserva = async (reservaId) => {
    if (!window.confirm("¿Estás seguro de que querés cancelar esta reserva?")) return;
    
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/reserva/socio/reservas/${reservaId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al cancelar reserva');
      }

      // Remover la reserva cancelada de la lista local (no recargar todo)
      setMisReservas(prevReservas => 
        prevReservas.filter(reserva => reserva.id !== reservaId)
      );
      alert('Reserva cancelada exitosamente');
    } catch (error) {
      console.error('Error cancelando reserva:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          paddingTop: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="contenido-cuadro container">
          {!usuario ? (
            <Alert variant="warning">
              Debés iniciar sesión para ver tus reservas.
            </Alert>
          ) : (
            <>
              {/* Mis Reservas */}
              <section className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">
                      <i className="bi bi-calendar-check me-2 text-success"></i>
                     Mis Reservas Activas
                    </h4>
                    <Button 
                      variant="outline-success" 
                      size="sm"
                      onClick={() => usuario?.socio?.id && fetchMisReservas(usuario.socio.id)}
                      disabled={loading}
                    >
                      <i className="bi bi-arrow-clockwise me-1"></i>
                      Actualizar
                    </Button>
                </div>

                {loading ? (
                  <div className="text-center py-4">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="mt-2">Cargando reservas...</p>
                  </div>
                ) : entradasFiltradas.length === 0 ? (
                  <Alert variant="info" className="text-center">
                    <i className="bi bi-info-circle me-2"></i>
                    No tenés reservas activas.
                  </Alert>
                ) : (
                  <Row className="g-3">
                    {entradasFiltradas.map((reserva) => (
                      <Col key={reserva.id} xs={12} md={6} lg={4}>
                        <Card className="h-100 entrada-card shadow-sm">
                          <Card.Body className="d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="card-title mb-0">
                                {reserva.deporte}
                              </h6>
                              {getEstadoBadge(reserva)}
                            </div>
                            <div className="mb-3">
                              <small className="text-muted d-block">
                                <i className="bi bi-geo-alt me-1"></i>
                                Cancha: {reserva.cancha}
                              </small>
                              <small className="text-muted d-block">
                                <i className="bi bi-calendar3 me-1"></i>
                                {formatearFecha(reserva.fecha)}
                              </small>
                              <small className="text-muted d-block">
                                <i className="bi bi-clock me-1"></i>
                                {reserva.hora}hs
                              </small>
                            </div>
                            <div className="mt-auto">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <small className="text-muted">
                                  Duración: 1 hora
                                </small>
                              </div>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => cancelarReserva(reserva.id)}
                                disabled={loading}
                              >
                                <i className="bi bi-x-circle me-1"></i>
                                Cancelar
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}
