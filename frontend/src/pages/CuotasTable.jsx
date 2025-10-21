import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import AdjuntarComprobante from '../components/AdjuntarComprobante';
import axios from 'axios';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(Number(amount || 0));

const formatDate = (dateString) => {
  if (!dateString) return '—';
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const getEstadoBadge = (estadoDb) => {
  const estado = String(estadoDb || '').toUpperCase();

  const map = {
    PAGADA: { bg: 'success', text: 'Aprobada' },
    EN_REVISION: { bg: 'warning text-dark', text: 'En revisión' },
    PENDIENTE: { bg: 'secondary', text: 'Pendiente' },
    VENCIDA: { bg: 'danger', text: 'Vencida' },
  };

  const cfg = map[estado] || { bg: 'light', text: estado || '—' };
  return <span className={`badge bg-${cfg.bg}`}>{cfg.text}</span>;
};

const CuotasTable = () => {
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdjuntarModal, setShowAdjuntarModal] = useState(false);
  const [cuotaSeleccionada, setCuotaSeleccionada] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchCuotas = useCallback(async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No se encontró token de autenticación');

      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/cuotas/socio`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const adaptadas = (data.cuotas ?? []).map((r, i) => ({
        id: r.id,
        nroCuota: i + 1,
        mes: r.mes || '—',
        fechaVencimiento: r.fechaVencimiento || r.createdAt,
        monto: r.monto,
        estadoDb: r.estado,
      }));

      setCuotas(adaptadas);
    } catch (e) {
      console.error('Error al obtener cuotas:', e);
      setErrorMsg(e.response?.data?.message || e.message || 'Error cargando cuotas');
      setCuotas([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCuotas();
  }, [fetchCuotas]);

  const abrirModalAdjuntar = (cuotaId) => {
    setCuotaSeleccionada(cuotaId);
    setShowAdjuntarModal(true);
  };

  const cerrarModalAdjuntar = () => {
    setShowAdjuntarModal(false);
    setCuotaSeleccionada(null);
  };

  const handleAdjuntar = async (cuotaId, archivo) => {
    try {
      setErrorMsg('');

      const token = localStorage.getItem('token');
      if (!token) throw new Error('No se encontró token de autenticación');

      const formData = new FormData();
      formData.append('comprobante', archivo);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/cuotas/socio/${cuotaId}/comprobante`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (data.success) {
        // Refrescar tabla
        await fetchCuotas();
      }
    } catch (error) {
      console.error('Error al adjuntar comprobante:', error);
      setErrorMsg(error.response?.data?.message || error.message || 'No se pudo adjuntar el comprobante');
    }
  };

  const puedePagar = (estadoDb) => {
    const estado = String(estadoDb || '').toUpperCase();
    return estado === 'PENDIENTE' || estado === 'VENCIDA'; // solo esos dos
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Estado de Cuotas</h4>
                {loading && (
                  <div
                    className="spinner-border spinner-border-sm text-success"
                    role="status"
                  />
                )}
              </div>

              <div className="card-body">
                {errorMsg && (
                  <div className="alert alert-danger" role="alert">
                    {errorMsg}
                  </div>
                )}

                <div className="table-responsive">
                  <table className="table table-striped align-middle">
                    <thead>
                      <tr>
                        <th>Nro.</th>
                        <th>Mes</th>
                        <th>Vencimiento</th>
                        <th>Monto</th>
                        <th>Estado</th>
                        <th className="text-end">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!loading && cuotas.length === 0 && (
                        <tr>
                          <td colSpan="6" className="text-muted text-center py-4">
                            No hay cuotas para mostrar.
                          </td>
                        </tr>
                      )}

                      {cuotas.map((cuota) => (
                        <tr key={cuota.id}>
                          <td>{cuota.nroCuota}</td>
                          <td>{cuota.mes}</td>
                          <td>{formatDate(cuota.fechaVencimiento)}</td>
                          <td>{formatCurrency(cuota.monto)}</td>
                          <td>{getEstadoBadge(cuota.estadoDb)}</td>
                          <td className="text-end">
                            {puedePagar(cuota.estadoDb) ? (
                              <button
                                className="btn btn-success btn-sm"
                                onClick={() => abrirModalAdjuntar(cuota.id)}
                              >
                                Adjuntar comprobante
                              </button>
                            ) : (
                              <button className="btn btn-outline-secondary btn-sm" disabled>
                                Sin acciones
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}

                      {loading && (
                        <tr>
                          <td colSpan="6" className="text-center py-4">
                            <div className="spinner-border text-success" role="status" />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdjuntarComprobante
        show={showAdjuntarModal}
        onHide={cerrarModalAdjuntar}
        cuotaId={cuotaSeleccionada}
        onAdjuntar={handleAdjuntar}
      />
    </>
  );
};

export default CuotasTable;
