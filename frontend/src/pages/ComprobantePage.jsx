// src/pages/ComprobantePage.jsx
import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ComprobantePage.css';
import { supabase } from './supabaseClient';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// --- Yup schema para RECHAZO (motivo requerido) ---
const decisionSchema = yup.object({
  motivo: yup.string().trim().min(5, 'Especificá un motivo (≥ 5 caracteres)').required('El motivo es obligatorio para rechazar')
});

export default function ComprobantePage() {
  const { id } = useParams();          // id = cuotaId
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cuota, setCuota] = useState(null);
  const [socio, setSocio] = useState(null);
  const [comprobantes, setComprobantes] = useState([]);
  const [selectedCompId, setSelectedCompId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // RHF solo para rechazo (campo motivo)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(decisionSchema),
    defaultValues: { motivo: '' }
  });

  // comp activo preferido
  const compActivo = useMemo(
    () => comprobantes.find(c => c.activo) || comprobantes[0] || null,
    [comprobantes]
  );

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setErrorMsg('');

        // 1) Cuota
        const { data: cuotaDb, error: cuotaErr } = await supabase
          .from('Cuota')
          .select('id, socio_id, mes, monto, estado, fecha_pago, metodo_pago, created_at')
          .eq('id', Number(id))
          .maybeSingle();

        if (cuotaErr) throw cuotaErr;
        if (!cuotaDb) {
          setErrorMsg('No se encontró la cuota');
          return;
        }

        setCuota(cuotaDb);

        // 2) Socio de esa cuota
        let socioObj = null;
        if (cuotaDb.socio_id) {
          const { data: socioDb, error: socioErr } = await supabase
            .from('Socio')
            .select('id, dni, nombre, apellido, email')
            .eq('id', cuotaDb.socio_id)
            .maybeSingle();

          if (!socioErr) socioObj = socioDb || null;
        }
        setSocio(socioObj);

        // 3) Comprobantes por cuotaId
        const { data: compDb, error: compErr } = await supabase
          .from('Comprobante')
          .select('id, url, activo, created_at')
          .eq('cuotaId', Number(id))
          .order('created_at', { ascending: false });

        if (compErr) throw compErr;
        setComprobantes(Array.isArray(compDb) ? compDb : []);

        // pre-selección para aprobar
        setSelectedCompId((compDb || []).find(c => c.activo)?.id || (compDb?.[0]?.id ?? null));
      } catch (err) {
        console.error(err);
        setErrorMsg(err.message || 'Error cargando comprobante');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  const handleAprobar = async () => {
    if (!selectedCompId) {
      setErrorMsg('Seleccioná un comprobante para aprobar');
      return;
    }
    try {
      setSaving(true);
      setErrorMsg('');

      // 1) Estado de cuota
      const { error: cuoErr } = await supabase
        .from('Cuota')
        .update({ estado: 'APROBADA', fecha_pago: new Date().toISOString(), metodo_pago: 'TRANSFERENCIA' })
        .eq('id', Number(id));

      if (cuoErr) throw cuoErr;

      // 2) Activar solo el comprobante elegido
      const compIds = comprobantes.map(c => c.id);
      if (compIds.length) {
        // Desactivar todos
        const { error: desErr } = await supabase
          .from('Comprobante')
          .update({ activo: false })
          .in('id', compIds);
        if (desErr) throw desErr;

        // Activar el seleccionado
        const { error: actErr } = await supabase
          .from('Comprobante')
          .update({ activo: true })
          .eq('id', selectedCompId);
        if (actErr) throw actErr;
      }

      alert('Comprobante aprobado ✔');
      navigate('/cuotas-admin', { replace: true });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'No se pudo aprobar el comprobante');
    } finally {
      setSaving(false);
    }
  };

  // Submit exclusivo para RECHAZO (requiere motivo)
  const onRechazar = async ({ motivo }) => {
    try {
      setSaving(true);
      setErrorMsg('');
    
      // 1) Estado de cuota -> RECHAZADA
      const { error: cuoErr } = await supabase
        .from('Cuota')
        .update({ estado: 'RECHAZADA' })
        .eq('id', Number(id));
      if (cuoErr) throw cuoErr;
    
      // 2) Desactivar TODOS los comprobantes y guardar motivo (NOT NULL)
      if (comprobantes.length) {
        const compIds = comprobantes.map(c => c.id);
        const { error: desErr } = await supabase
          .from('Comprobante')
          .update({ activo: false, motivo })
          .in('id', compIds);
        if (desErr) throw desErr;
      }
    
      alert('Comprobante rechazado ✖');
      navigate('/cuotas-admin', { replace: true });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'No se pudo rechazar el comprobante');
    } finally {
      setSaving(false);
      reset({ motivo: '' });
    }
  };


  if (loading) return <div className="p-4">Cargando…</div>;
  if (errorMsg) return <div className="p-4 text-danger">{errorMsg}</div>;
  if (!cuota) return <div className="p-4">No se encontró la cuota</div>;

  const nombreSocio = (socio?.nombre || socio?.apellido)
    ? `${socio?.nombre ?? ''} ${socio?.apellido ?? ''}`.trim()
    : (socio?.dni ? `Socio DNI ${socio.dni}` : `Socio #${cuota.socio_id}`);

  return (
    <div className="comprobante-page">
      <div className="comprobante-container">
        <h3>Comprobante de {nombreSocio}</h3>
        <p>Mes: {cuota.mes || '—'} — Monto: ${cuota.monto ?? '—'}</p>

        {/* Selector de comprobante si hay más de uno */}
        {comprobantes.length > 1 && (
          <div className="mb-3">
            <label className="form-label">Seleccionar comprobante</label>
            <select
              className="form-select"
              value={selectedCompId || ''}
              onChange={(e) => setSelectedCompId(Number(e.target.value))}
            >
              {comprobantes.map(c => (
                <option key={c.id} value={c.id}>
                  #{c.id} · {new Date(c.created_at).toLocaleString('es-AR')} {c.activo ? ' (activo)' : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Vista del comprobante activo/seleccionado */}
        {comprobantes.length > 0 ? (
          <img
            src={(comprobantes.find(c => c.id === selectedCompId)?.url) || compActivo?.url}
            alt="Comprobante"
            className="imagen-comprobante"
          />
        ) : (
          <div className="text-muted mb-3">No hay comprobantes subidos para esta cuota.</div>
        )}

        {/* Botones de decisión */}
        <div className="botones-comprobante">
          <button className="btn btn-success" onClick={handleAprobar} disabled={saving || comprobantes.length === 0}>
            Aprobar
          </button>

          {/* Rechazar exige motivo (validado con RHF + Yup) */}
          <form onSubmit={handleSubmit(onRechazar)} className="d-inline-block ms-2">
            <div className="d-flex align-items-start" style={{ gap: 8 }}>
              <input
                className={`form-control ${errors.motivo ? 'is-invalid' : ''}`}
                placeholder="Motivo del rechazo"
                {...register('motivo')}
                style={{ width: 260 }}
              />
              <button className="btn btn-danger" type="submit" disabled={saving}>
                Rechazar
              </button>
            </div>
            {errors.motivo && <div className="invalid-feedback d-block">{errors.motivo.message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
