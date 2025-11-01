import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import AdjuntarComprobante from '../components/AdjuntarComprobante';
import { api } from '../service/api';

const CuotasTable = () => {
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdjuntarModal, setShowAdjuntarModal] = useState(false);
  const [cuotaSeleccionada, setCuotaSeleccionada] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(Number(amount || 0));

  const formatDate = (dateString) => {
    if (!dateString) return '—';
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  const getEstadoBadge = (estadoDb) => {
    const key = String(estadoDb || '').toUpperCase();
    const map = {
      PAGADA: { bg: 'success', text: 'Pagada' },
      EN_REVISION: { bg: 'secondary', text: 'En revisión' },
      PENDIENTE: { bg: 'warning', text: 'Pendiente' },
      VENCIDA: { bg: 'danger', text: 'Vencida' },
    };
    const cfg = map[key] || { bg: 'light', text: key || '—' };
    return <span className={`badge bg-${cfg.bg}`}>{cfg.text}</span>;
  };

  const fetchCuotas = useCallback(async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const { data } = await api.get('/api/cuotas/socio');
      const lista = Array.isArray(data?.cuotas) ? data.cuotas : (Array.isArray(data) ? data : []);
      const adaptadas = lista.map((r, i) => ({
        id: r.id,
        nroCuota: i + 1,
        mes: r.mes || '—',
        fechaVencimiento: r.fechaVencimiento || r.createdAt || r.created_at,
        monto: r.monto,
        estadoDb: r.estado,
      }));
      setCuotas(adaptadas);
    } catch (e) {
      console.error('Error al obtener cuotas:', e);
      setErrorMsg('No se pudieron cargar tus cuotas. Probá nuevamente.');
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

  // Sube archivo al backend (backend guarda en storage y crea registro)
  const handleAdjuntar = async (cuotaId, archivo) => {
    try {
      setErrorMsg('');
      const formData = new FormData();
      formData.append('comprobante', archivo);

      await api.post(`/api/cuotas/socio/${cuotaId}/comprobante`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      await fetchCuotas();
    } catch (error) {
      console.error('Error al adjuntar comprobante:', error);
      setErrorMsg('No se pudo adjuntar el comprobante. Revisá el archivo y probá de nuevo.');
    }
  };

  const puedePagar = (estadoDb) => {
    const key = String(estadoDb || '').toUpperCase();
    return key === 'PENDIENTE' || key === 'VENCIDA';
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Estado de Cuotas</h4>
                {loading && <div className="spinner-border spinner-border-sm text-success" role="status" />}
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
