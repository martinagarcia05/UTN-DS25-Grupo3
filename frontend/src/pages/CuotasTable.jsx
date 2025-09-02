import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AdjuntarComprobante from '../components/AdjuntarComprobante';

const CuotasTable = () => {
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagoEnProceso, setPagoEnProceso] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [showAdjuntarModal, setShowAdjuntarModal] = useState(false);
  const [cuotaSeleccionada, setCuotaSeleccionada] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 8, nroCuota: 8, mes: 'Julio', fechaVencimiento: '2024-07-29', monto: 20000, estado: 'aprobada' },
      { id: 7, nroCuota: 7, mes: 'Junio', fechaVencimiento: '2024-06-29', monto: 19000, estado: 'vencida' },
      { id: 6, nroCuota: 6, mes: 'Mayo', fechaVencimiento: '2024-05-29', monto: 20000, estado: 'en_revision' },
      { id: 5, nroCuota: 5, mes: 'Abril', fechaVencimiento: '2024-04-29', monto: 25000, estado: 'aprobada' },
      { id: 4, nroCuota: 4, mes: 'Febrero', fechaVencimiento: '2024-02-29', monto: 20000, estado: 'en_revision' },
      { id: 3, nroCuota: 3, mes: 'Enero', fechaVencimiento: '2024-01-29', monto: 20000, estado: 'aprobada' },
      { id: 2, nroCuota: 2, mes: 'Diciembre', fechaVencimiento: '2023-12-29', monto: 19000, estado: 'vencida' },
      { id: 1, nroCuota: 1, mes: 'Noviembre', fechaVencimiento: '2023-11-29', monto: 14000, estado: 'en_revision' },
      { id: 9, nroCuota: 9, mes: 'Octubre', fechaVencimiento: '2024-10-29', monto: 20000, estado: 'pendiente' },
      { id: 10, nroCuota: 10, mes: 'Noviembre', fechaVencimiento: '2024-11-29', monto: 20000, estado: 'pendiente' }
    ];
    setTimeout(() => {
      setCuotas(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const handlePagar = (cuotaId) => {
    setPagoEnProceso(cuotaId);
  };

  const handleArchivoChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleEnviarComprobante = (cuotaId) => {
    setCuotas(prev =>
      prev.map(cuota =>
        cuota.id === cuotaId ? { ...cuota, estado: 'en_revision' } : cuota
      )
    );
    setPagoEnProceso(null);
    setArchivo(null);
  };

  const handleAdjuntarComprobante = (cuotaId) => {
    setCuotaSeleccionada(cuotaId);
    setShowAdjuntarModal(true);
  };

  const handleAdjuntar = async (cuotaId, archivo) => {
    // Simular envío del comprobante
    console.log('Adjuntando comprobante para cuota:', cuotaId, 'Archivo:', archivo.name);
    
    // Cambiar estado a "En revisión"
    setCuotas(prev =>
      prev.map(cuota =>
        cuota.id === cuotaId ? { ...cuota, estado: 'en_revision' } : cuota
      )
    );
    
    // Aquí iría la llamada real a la API
    // await axios.post(`/api/cuotas/${cuotaId}/comprobante`, formData);
    
    return Promise.resolve();
  };

  const getEstadoBadge = (estado) => {
    const estadoConfig = {
      aprobada: { bg: 'success', text: 'Aprobada' },
      vencida: { bg: 'danger', text: 'Vencida' },
      en_revision: { bg: 'secondary', text: 'En revisión' },
      pendiente: { bg: 'warning', text: 'Pendiente' }
    };
    
    const config = estadoConfig[estado] || { bg: 'secondary', text: estado };
    
    return (
      <span className={`badge bg-${config.bg}`}>
        {config.text}
      </span>
    );
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4>Estado de Cuotas</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Nro. Cuota</th>
                        <th>Mes</th>
                        <th>Fecha de Vencimiento</th>
                        <th>Monto</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cuotas.map((cuota) => (
                        <tr key={cuota.id}>
                          <td>{cuota.nroCuota}</td>
                          <td>{cuota.mes}</td>
                          <td>{formatDate(cuota.fechaVencimiento)}</td>
                          <td>{formatCurrency(cuota.monto)}</td>
                          <td>{getEstadoBadge(cuota.estado)}</td>
                          <td>
                            {/* Botón para cuotas vencidas */}
                            {cuota.estado === 'vencida' && (
                              <>
                                {pagoEnProceso === cuota.id ? (
                                  <div className="mt-2">
                                    <input
                                      type="file"
                                      accept="image/jpeg,image/jpg"
                                      onChange={handleArchivoChange}
                                      className="form-control form-control-sm mb-2"
                                    />
                                    <button
                                      className="btn btn-primary btn-sm"
                                      onClick={() => handleEnviarComprobante(cuota.id)}
                                      disabled={!archivo}
                                    >
                                      Enviar comprobante
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => handlePagar(cuota.id)}
                                  >
                                    Pagar Cuota
                                  </button>
                                )}
                              </>
                            )}
                            
                            {/* Botón para cuotas pendientes */}
                            {cuota.estado === 'pendiente' && (
                              <>
                                {pagoEnProceso === cuota.id ? (
                                  <div className="mt-2">
                                    <input
                                      type="file"
                                      accept="image/jpeg,image/jpg"
                                      onChange={handleArchivoChange}
                                      className="form-control form-control-sm mb-2"
                                    />
                                    <button
                                      className="btn btn-primary btn-sm"
                                      onClick={() => handleEnviarComprobante(cuota.id)}
                                      disabled={!archivo}
                                    >
                                      Enviar comprobante
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => handlePagar(cuota.id)}
                                  >
                                    Pagar Cuota
                                  </button>
                                )}
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para adjuntar comprobante */}
      <AdjuntarComprobante
        show={showAdjuntarModal}
        onHide={() => setShowAdjuntarModal(false)}
        cuotaId={cuotaSeleccionada}
        onAdjuntar={handleAdjuntar}
      />
    </>
  );
};

export default CuotasTable;
