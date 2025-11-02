import '../styles/CuotasAdmin.css';
import React, { useEffect, useMemo, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { api } from '../service/api';
import { useAuth } from '../contexts/AuthContext';

const toUiEstado = (estadoDb) => {
  const e = String(estadoDb || '').toUpperCase();
  if (e === 'EN_REVISION') return 'En Revisión';
  if (e === 'PAGADA' || e === 'APROBADA') return 'Aprobada';
  return 'Pendiente';
};

function CuotasAdminPage() {
  const location = useLocation();
  const defId = location.state?.defId || '';
  const [busqueda, setBusqueda] = useState(defId.toString());
  const [filtro, setFiltro] = useState('Todas');
  const [loading, setLoading] = useState(false);
  const [cuotas, setCuotas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCuota, setSelectedCuota] = useState(null);
  const navigate = useNavigate();
  const { hasRole } = useAuth();

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      try {
        setLoading(true);
        const res = await api.get('/api/cuotas/administrativo');
        const cuotasDb = Array.isArray(res.data?.cuotas)
          ? res.data.cuotas
          : Array.isArray(res.data)
          ? res.data
          : [];

        if (!cuotasDb?.length) {
          if (mounted) setCuotas([]);
          return;
        }

        const rows = cuotasDb.map((r) => {
          const nombre =
            r.socioNombre ||
            (r.dni ? `Socio DNI ${r.dni}` : 'Socio');
          const dni = r.dni ?? '';
          const uiEstado = toUiEstado(r.estado);
          const comprobanteUrl =
            r.comprobanteUrl ??
            (Array.isArray(r.comprobantes)
              ? r.comprobantes.find((c) => c.activo)?.url ?? null
              : null);

          return {
            id: r.id,
            nombre,
            dni,
            monto: r.monto,
            estadoUi: uiEstado,
            estadoDb: r.estado,
            comprobanteUrl,
            mes: r.mes,
            fotoCarnet: r.fotoCarnet ?? null, 
          };
        });

        if (mounted) setCuotas(rows);
      } catch (err) {
        console.error('Error cargando cuotas:', err);
        alert('No se pudieron cargar las cuotas. Intentá nuevamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
    return () => {
      mounted = false;
    };
  }, []);

  // Filtro
  const cuotasFiltradas = useMemo(() => {
    const q = (busqueda || '').toLowerCase().trim();
    return cuotas.filter((c) => {
      const coincideEstado = filtro === 'Todas' || c.estadoUi === filtro;
      const nombre = (c.nombre || '').toLowerCase();
      const dni = String(c.dni || '').toLowerCase();
      const coincideBusqueda = !q || nombre.includes(q) || dni.includes(q);
      return coincideEstado && coincideBusqueda;
    });
  }, [cuotas, filtro, busqueda]);

  // Modal comprobante
  const abrirModal = (cuota) => {
    setSelectedCuota(cuota);
    setShowModal(true);
  };
  const cerrarModal = () => {
    setSelectedCuota(null);
    setShowModal(false);
  };

  // Cambiar estado de cuota
  const cambiarEstado = async (cuotaId, estado) => {
    try {
      const res = await api.patch(`/api/cuotas/administrativo/${cuotaId}/estado`, { estado });

      if (res.status === 200 && res.data) {
        setCuotas((prev) =>
          prev.map((c) =>
            c.id === cuotaId
              ? {
                  ...c,
                  estadoUi: estado === 'Aprobada' ? 'Aprobada' : 'Pendiente',
                  estadoDb: estado === 'Aprobada' ? 'PAGADA' : 'PENDIENTE',
                  comprobanteUrl: estado === 'Rechazada' ? null : c.comprobanteUrl,
                }
              : c
          )
        );
        cerrarModal();
        alert(`✅ Cuota ${estado === 'Aprobada' ? 'aprobada' : 'rechazada'} correctamente.`);
      } else {
        console.warn('⚠️ Respuesta inesperada:', res.status, res.data);
        alert('No se pudo actualizar el estado (respuesta inesperada).');
      }
    } catch (err) {
      console.error('❌ Error al cambiar estado:', err);
      alert('No se pudo actualizar el estado.');
    }
  };

  const handleGenerarCuotas = () => navigate('/generar-cuota');

  return (
    <div className="cuotas-page">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">
                  <b>Cuotas</b>
                </h4>
                {loading && <div className="spinner-border spinner-border-sm text-success" role="status" />}
              </div>
              <div className="card-body">
                <div className="filtros d-flex align-items-center flex-wrap" style={{ gap: 8 }}>
                  <Form.Control
                    type="text"
                    placeholder="Buscar por nombre o DNI…"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ maxWidth: 280 }}
                  />

                  {['Todas', 'Aprobada', 'Pendiente', 'En Revisión'].map((estado) => (
                    <Button
                      key={estado}
                      variant={filtro === estado ? 'dark' : 'outline-secondary'}
                      onClick={() => setFiltro(estado)}
                    >
                      {estado}
                    </Button>
                  ))}
                </div>

                <div
                  className="tarjetas"
                  style={{
                    marginTop: 16,
                    maxHeight: 480,
                    overflowY: 'auto',
                    paddingRight: 8,
                    border: '1px solid #e5e5e5',
                    borderRadius: 8,
                  }}
                >
                  {loading && <div className="p-3">Cargando…</div>}
                  {!loading && cuotasFiltradas.length === 0 && (
                    <div className="p-3 text-muted">No hay resultados</div>
                  )}

                  {!loading &&
                    cuotasFiltradas.map((c) => (
                      <div key={c.id} className="col-12 mb-2">
                        <div
                          className="d-flex align-items-center justify-content-between p-3"
                          style={{
                            background: '#fafafa',
                            borderRadius: 12,
                            border: '1px solid #eee',
                          }}
                        >
                          <div className="d-flex align-items-center" style={{ gap: 12 }}>
                            <div
                              style={{
                                position: 'relative',
                                width: 46,
                                height: 46,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '2px solid #ccc',
                                flexShrink: 0,
                              }}
                            >
                              <img
                                src={c.fotoCarnet || '/img/default-user.png'}
                                alt={`Foto de ${c.nombre}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => (e.target.src = '/img/default-user.png')}
                              />
                              <span
                                style={{
                                  position: 'absolute',
                                  bottom: 2,
                                  right: 2,
                                  width: 10,
                                  height: 10,
                                  borderRadius: '50%',
                                  backgroundColor: c.comprobanteUrl ? '#198754' : '#adb5bd',
                                  border: '1px solid white',
                                }}
                                title={c.comprobanteUrl ? 'Tiene comprobante' : 'Sin comprobante'}
                              />
                            </div>

                            <div>
                              <div style={{ fontWeight: 600 }}>{c.nombre}</div>
                              <div className="text-muted" style={{ fontSize: 13 }}>
                                DNI: {c.dni || '—'} · Mes: {c.mes || '—'}
                              </div>
                            </div>
                          </div>

                          <div className="d-flex align-items-center" style={{ gap: 12 }}>
                            <span className="badge bg-light text-dark" style={{ fontSize: 12 }}>
                              ${c.monto}
                            </span>
                            <span
                              className={
                                c.estadoUi === 'Aprobada'
                                  ? 'badge bg-success'
                                  : c.estadoUi === 'En Revisión'
                                  ? 'badge bg-warning text-dark'
                                  : 'badge bg-secondary'
                              }
                              style={{ fontSize: 12 }}
                            >
                              {c.estadoUi}
                            </span>

                            {c.estadoUi === 'En Revisión' && c.comprobanteUrl && (
                              <Button variant="outline-primary" size="sm" onClick={() => abrirModal(c)}>
                                Ver comprobante
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {hasRole(['ADMIN', 'ADMINISTRATIVO']) && (
        <Button
          variant="dark"
          onClick={handleGenerarCuotas}
          style={{
            position: 'fixed',
            right: 24,
            bottom: 24,
            borderRadius: 24,
            padding: '10px 16px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            zIndex: 2000,
          }}
        >
          Generar cuotas
        </Button>
      )}

      {/* Modal comprobante */}
      <Modal show={showModal} onHide={cerrarModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Comprobante de {selectedCuota?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
          {selectedCuota?.comprobanteUrl ? (
            selectedCuota.comprobanteUrl.endsWith('.pdf') ? (
              <embed
                src={selectedCuota.comprobanteUrl}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            ) : (
              <img
                src={selectedCuota.comprobanteUrl}
                alt="Comprobante"
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            )
          ) : (
            <p className="text-muted">No se encontró el comprobante.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={() => cambiarEstado(selectedCuota.id, 'Rechazada')}>
            Rechazar
          </Button>
          <Button variant="success" onClick={() => cambiarEstado(selectedCuota.id, 'Aprobada')}>
            Aprobar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CuotasAdminPage;
