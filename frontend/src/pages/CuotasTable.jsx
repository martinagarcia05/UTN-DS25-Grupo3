import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AdjuntarComprobante from '../components/AdjuntarComprobante';
import { supabase } from './supabaseClient';

const CuotasTable = () => {
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagoEnProceso, setPagoEnProceso] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [showAdjuntarModal, setShowAdjuntarModal] = useState(false);
  const [cuotaSeleccionada, setCuotaSeleccionada] = useState(null);

  useEffect(() => {
    const fetchCuotas = async () => {
      setLoading(true);
      try {
        const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
        const socioId = usuario?.socio?.id;
        if (!socioId) throw new Error('No tengo socio.id en localStorage');

        // Nombre EXACTO de la tabla (con mayúscula inicial)
        const { data, error } = await supabase
          .from('Cuota')
          .select(`
            id,
            monto,
            estado,
            socio_id,
            created_at,
            fecha_pago,
            metodo_pago
          `)
          .eq('socio_id', socioId)
          .order('created_at', { ascending: true });

        if (error) throw error;

        // Adaptamos a lo que hoy espera tu UI
        const adaptadas = (data ?? []).map((r, i) => ({
          id: r.id,
          nroCuota: i + 1,
          mes: r.Mes,                
          fechaVencimiento: r.created_at,
          monto: r.monto,
          estado: String(r.estado || '').toLowerCase(), // 'PENDIENTE' -> 'pendiente'
        }));

        setCuotas(adaptadas);
      } catch (e) {
        console.error('Error al obtener cuotas:', e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCuotas();
  }, []);

  const handlePagar = (cuotaId) => {
    setPagoEnProceso(cuotaId);
  };

  const handleArchivoChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  // Simula envío de comprobante (actualiza estado local)
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

  // Versión segura: sube archivo y actualiza estado; inserción en "Comprobante" queda comentada hasta que exista la tabla
  const handleAdjuntar = async (cuotaId, archivo) => {
    if (!archivo) return;

    try {
      const fileExtension = archivo.name.split('.').pop();
      const fileName = `${cuotaId}_${Date.now()}.${fileExtension}`;
      const filePath = `public/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('comprobantes')
        .upload(filePath, archivo);

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from('comprobantes')
        .getPublicUrl(filePath);

      const comprobanteUrl = publicUrlData.publicUrl;

      const { error: insertError } = await supabase
        .from('Comprobante')
        .insert({ cuotaId: cuotaId, url: comprobanteUrl, activo: true });

      if (insertError) throw insertError;

      const { error: updateError } = await supabase
        .from('Cuota')
        .update({ estado: 'EN_REVISION' }) // si tu enum es mayúscula en DB
        .eq('id', cuotaId);

      if (updateError) throw updateError;

      // reflejamos en UI (minúscula para que tus badges y botones funcionen)
      setCuotas(prev =>
        prev.map(cuota =>
          cuota.id === cuotaId ? { ...cuota, estado: 'en_revision' } : cuota
        )
      );

      console.log('Comprobante adjuntado y estado actualizado.');
    } catch (error) {
      console.error('Error al adjuntar comprobante:', error.message);
    }
  };

  const getEstadoBadge = (estado) => {
    const key = String(estado).toLowerCase();
    const estadoConfig = {
      aprobada: { bg: 'success', text: 'Aprobada' },
      vencida: { bg: 'danger', text: 'Vencida' },
      en_revision: { bg: 'secondary', text: 'En revisión' },
      pendiente: { bg: 'warning', text: 'Pendiente' },
      rechazada: { bg: 'danger', text: 'Rechazada' }
    };
    const config = estadoConfig[key] || { bg: 'secondary', text: estado };
    return <span className={`badge bg-${config.bg}`}>{config.text}</span>;
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
                            {(cuota.estado === 'vencida' || cuota.estado === 'pendiente' || cuota.estado === 'rechazada') && (
                              <>
                                {pagoEnProceso === cuota.id ? (
                                  <div className="mt-2">
                                    <input
                                      type="file"
                                      accept="image/jpeg,image/jpg,image/png,application/pdf"
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
