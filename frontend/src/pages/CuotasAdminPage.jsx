import '../styles/CuotasAdmin.css';
import React, { useEffect, useMemo, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { supabase } from './supabaseClient';

// Estado de BD → etiqueta UI
const toUiEstado = (estadoDb, comprobantes) => {
  const e = String(estadoDb || '').toUpperCase();
  const tieneActivo = Array.isArray(comprobantes) && comprobantes.some(c => c.activo);
  if (e === 'EN_REVISION') return 'En Revisión';
  if (tieneActivo && (e === 'PENDIENTE' || e === 'VENCIDA')) return 'En Revisión';
  if (e === 'PAGADA' || e === 'APROBADA') return 'Aprobada';
  if (e === 'RECHAZADA') return 'Rechazada';
  return 'Pendiente';
};

function CuotasAdminPage() {
  const location = useLocation();
  const defId = location.state?.defId || '';
  const [busqueda, setBusqueda] = useState(defId.toString());
  const [filtro, setFiltro] = useState('Todas');
  const [loading, setLoading] = useState(false);
  const [cuotas, setCuotas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      try {
        setLoading(true);

        // 1) Traer cuotas (socio_id es snake_case según tu schema)
        const { data: cuotasDb, error: cuotasErr } = await supabase
          .from('Cuota')
          .select('id, monto, estado, mes, created_at, fecha_pago, metodo_pago, socio_id')
          .order('id', { ascending: true });

        if (cuotasErr) {
          console.error('[Cuota] error:', cuotasErr);
          alert('Error cargando cuotas: ' + (cuotasErr.message || ''));
          return;
        }

        if (!cuotasDb?.length) {
          console.warn('[Cuota] 0 filas. Si existen datos, revisá RLS/policies.');
          if (mounted) setCuotas([]);
          return;
        }

        // 2) Traer socios por ID para obtener DNI/Nombre
        const socioIds = Array.from(new Set(cuotasDb.map(r => r.socio_id).filter(Boolean)));
        let sociosMapById = {};
        if (socioIds.length) {
          const { data: sociosDb, error: sociosErr } = await supabase
            .from('Socio')
            .select('id, dni, nombre, apellido, email')
            .in('id', socioIds);

          if (!sociosErr && Array.isArray(sociosDb)) {
            sociosMapById = Object.fromEntries(sociosDb.map(s => [String(s.id), s]));
          } else {
            console.log('[Socio] no se pudieron traer socios por ID.', sociosErr);
          }
        }

        // 3) Traer comprobantes por cuotaId (camelCase según tu schema)
        let compPorCuota = {};
        {
          const cuotaIds = cuotasDb.map(c => c.id);
          if (cuotaIds.length) {
            const { data: compDb, error: compErr } = await supabase
              .from('Comprobante')
              .select('id, url, activo, cuotaId')
              .in('cuotaId', cuotaIds);

            if (!compErr && Array.isArray(compDb)) {
              for (const c of compDb) {
                const key = c.cuotaId;
                if (!key) continue;
                if (!compPorCuota[key]) compPorCuota[key] = [];
                compPorCuota[key].push(c);
              }
            } else {
              console.log('[Comprobante] no se pudieron traer.', compErr);
            }
          }
        }

        // 4) Mapear a la forma esperada por la UI: socio_id → Socio → dni/nombre
        const rows = cuotasDb.map(r => {
          const socio = sociosMapById[String(r.socio_id)] || null;

          const compList = compPorCuota[r.id] || [];
          const uiEstado = toUiEstado(r.estado, compList);
          const comprobanteActivo = compList.find(c => c.activo);

          const dni = socio?.dni ?? '';
          const nombre = (socio?.nombre || socio?.apellido)
            ? `${socio?.nombre ?? ''} ${socio?.apellido ?? ''}`.trim()
            : (dni ? `Socio DNI ${dni}` : (r.socio_id ? `Socio #${r.socio_id}` : 'Socio'));

          return {
            id: r.id,
            nombre,
            dni,
            email: socio?.email ?? '',
            monto: r.monto,
            estadoUi: uiEstado,
            estadoDb: r.estado,
            avatar: Boolean(comprobanteActivo?.url),
            comprobanteUrl: comprobanteActivo?.url || null,
            mes: r.mes,
            raw: { cuota: r, socio, comprobantes: compList },
          };
        });

        if (mounted) setCuotas(rows);
      } catch (err) {
        console.error('Error inesperado:', err);
        alert('Error inesperado cargando cuotas');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
    return () => { mounted = false; };
  }, []);

  // Filtro por estado + búsqueda (nombre o DNI)
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

  const handleVerComprobante = (cuotaId) => navigate(`/comprobante/${cuotaId}`);
  const handleGenerarCuotas = () => navigate('/generar-cuota');

  return (
    <div className="cuotas-page">
      <Header />
      <div className="cuotas-contenido">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="mb-0"><b>Cuotas</b></h4>
        </div>

        {/* Filtros */}
        <div className="filtros d-flex align-items-center flex-wrap" style={{ gap: 8 }}>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre o DNI…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ maxWidth: 280 }}
          />

          {['Todas', 'Aprobada', 'Pendiente', 'Rechazada', 'En Revisión'].map((estado) => (
            <Button
              key={estado}
              variant={filtro === estado ? 'dark' : 'outline-secondary'}
              onClick={() => setFiltro(estado)}
            >
              {estado}
            </Button>
          ))}
        </div>

        {/* Listado */}
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

          {!loading && cuotasFiltradas.length > 0 && (
            <div className="row g-3 p-3">
              {cuotasFiltradas.map((c) => (
                <div key={c.id} className="col-12">
                  <div
                    className="d-flex align-items-center justify-content-between p-3"
                    style={{ background: '#fafafa', borderRadius: 12, border: '1px solid #eee' }}
                  >
                    <div className="d-flex align-items-center" style={{ gap: 12 }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: c.avatar ? '#198754' : '#adb5bd',
                        }}
                        title={c.avatar ? 'Tiene comprobante' : 'Sin comprobante'}
                      />
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
                          c.estadoUi === 'Aprobada' ? 'badge bg-success' :
                          c.estadoUi === 'Rechazada' ? 'badge bg-danger' :
                          c.estadoUi === 'En Revisión' ? 'badge bg-warning text-dark' :
                          'badge bg-secondary'
                        }
                        style={{ fontSize: 12 }}
                      >
                        {c.estadoUi}
                      </span>

                      {/* Ver comprobante si está en revisión */}
                      {c.estadoUi === 'En Revisión' && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleVerComprobante(c.id)}
                        >
                          Ver comprobante
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Acción para generar cuotas */}
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
          }}
        >
          Generar cuotas
        </Button>
      </div>
    </div>
  );
}

export default CuotasAdminPage;
