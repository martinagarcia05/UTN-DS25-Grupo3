import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const CuotasTable = () => {
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagoEnProceso, setPagoEnProceso] = useState(null);
  const [archivo, setArchivo] = useState(null);

  useEffect(() => {
    const mockData = [
      { id: 8, nroCuota: 8, mes: 'Julio', fechaVencimiento: '2024-07-29', monto: 20000, estado: 'aprobada' },
      { id: 7, nroCuota: 7, mes: 'Junio', fechaVencimiento: '2024-06-29', monto: 19000, estado: 'vencida' },
      { id: 6, nroCuota: 6, mes: 'Mayo', fechaVencimiento: '2024-05-29', monto: 20000, estado: 'en_revision' },
      { id: 5, nroCuota: 5, mes: 'Abril', fechaVencimiento: '2024-04-29', monto: 25000, estado: 'aprobada' },
      { id: 4, nroCuota: 4, mes: 'Febrero', fechaVencimiento: '2024-02-29', monto: 20000, estado: 'en_revision' },
      { id: 3, nroCuota: 3, mes: 'Enero', fechaVencimiento: '2024-01-29', monto: 20000, estado: 'aprobada' },
      { id: 2, nroCuota: 2, mes: 'Diciembre', fechaVencimiento: '2023-12-29', monto: 19000, estado: 'vencida' },
      { id: 1, nroCuota: 1, mes: 'Noviembre', fechaVencimiento: '2023-11-29', monto: 14000, estado: 'en_revision' }
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

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case 'aprobada':
        return <span className="badge bg-success">Aprobada</span>;
      case 'vencida':
        return <span className="badge bg-danger">Vencida</span>;
      case 'en_revision':
        return <span className="badge bg-secondary">En revisión</span>;
      default:
        return <span className="badge bg-light text-dark">{estado}</span>;
    }
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
    <Header></Header>
    <div className="container my-5">
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="mb-4 text-center">Mis Cuotas</h3>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>NRO CUOTA</th>
                    <th>MES</th>
                    <th>VENCIMIENTO</th>
                    <th>MONTO</th>
                    <th>ESTADO</th>
                    <th></th>
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
  </>
  );
};

export default CuotasTable;
