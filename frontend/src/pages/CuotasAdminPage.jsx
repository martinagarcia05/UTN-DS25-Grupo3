import '../styles/CuotasAdmin.css';
import React, { useEffect, useMemo, useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';

const toUiEstado = (estadoDb) => {
  const estado = String(estadoDb || '').toUpperCase();
  switch (estado) {
    case 'EN_REVISION':
      return 'En revisión';
    case 'PAGADA':
      return 'Aprobada';
    case 'VENCIDA':
      return 'Vencida';
    default:
      return 'Pendiente';
  }
};

function CuotasAdminPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const defId = location.state?.defId || '';
  const [busqueda, setBusqueda] = useState(defId.toString());
  const [filtro, setFiltro] = useState('Todas');
  const [loading, setLoading] = useState(false);
  const [cuotas, setCuotas] = useState([]);

  useEffect(() => {
    let active = true;
    const fetchCuotas = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${import.meta.env.VITE_API_URL}api/cuotas/administrativo`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data?.cuotas || res.data || [];
        if (!Array.isArray(data)) throw new Error('Respuesta inesperada del servidor');

        const mapped = data.map((c) => ({
          id: c.id,
          nombre: c.socioNombre || `Socio #${c.socioId}`,
          dni: c.dni || c.socioDni || '',
          email: c.email || '',
          monto: c.monto || 0,
          mes: (c.mes || '').toLowerCase(),
          estadoDb: c.estado,
          estadoUi: toUiEstado(c.estado),
          comprobanteUrl: c.comprobanteUrl || null,
        }));

        if (active) setCuotas(mapped);
      } catch (err) {
        console.error('Error cargando cuotas:', err);
        alert('Error al cargar las cuotas.');
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchCuotas();
    return () => {
      active = false;
    };
  }, []);

  const handleChangeEstado = async (cuotaId, nuevoEstado) => {
    try {
      const token = localStorage.getItem('token');
      const body =
        nuevoEstado === 'Aprobada'
          ? { estado: 'Aprobada' }
          : { estado: 'En revisión', motivo: 'Revisión manual' };

      await axios.patch(
        `${import.meta.env.VITE_API_URL}api/cuotas/administrativo/${cuotaId}/estado`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCuotas((prev) =>
        prev.map((c) =>
          c.id === cuotaId
            ? { ...c, estadoUi: nuevoEstado, estadoDb: nuevoEstado.toUpperCase() }
            : c
        )
      );
    } catch (err) {
      console.error('Error cambiando estado:', err);
      alert('No se pudo actualizar el estado de la cuota.');
    }
  };


  const cuotasFiltradas = useMemo(() => {
    if (!cuotas.length) return [];
    const q = busqueda.toLowerCase().trim();

    return cuotas.filter((c) => {
      const coincideEstado = filtro === 'Todas' || c.estadoUi === filtro;
      const coincideBusqueda =
        !q ||
        (c.nombre && c.nombre.toLowerCase().includes(q)) ||
        (c.dni && String(c.dni).includes(q));
      return coincideEstado && coincideBusqueda;
    });
  }, [cuotas, filtro, busqueda]);


  const handleVerComprobante = (id) => navigate(`/comprobante/${id}`);
  const handleGenerarCuotas = () => navigate('/generar-cuota');


  return (
    <div className="cuotas-page">
      <Header />

      <div className="cuotas-contenido container py-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="fw-bold mb-0">Gestión de Cuotas</h4>
          <Button
            variant="success"
            onClick={handleGenerarCuotas}
            className="shadow-sm rounded-pill px-3 py-2"
          >
            Generar cuotas
          </Button>
        </div>

        {/* FILTROS */}
        <div className="d-flex align-items-center flex-wrap gap-2 mb-3">
          <Form.Control
            type="text"
            placeholder="Buscar por nombre o DNI…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ maxWidth: 280 }}
          />
          {['Todas', 'Aprobada', 'Pendiente', 'En revisión', 'Vencida'].map((estado) => (
            <Button
              key={estado}
              variant={filtro === estado ? 'dark' : 'outline-secondary'}
              onClick={() => setFiltro(estado)}
              size="sm"
            >
              {estado}
            </Button>
          ))}
        </div>

        {/* LISTA DE CUOTAS */}
        <div
          className="tarjetas bg-white border rounded shadow-sm p-3"
          style={{ maxHeight: 480, overflowY: 'auto' }}
        >
          {loading ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="dark" />
              <div className="mt-2 text-muted">Cargando cuotas…</div>
            </div>
          ) : cuotasFiltradas.length === 0 ? (
            <div className="text-center text-muted py-4">No se encontraron cuotas.</div>
          ) : (
            <div className="row g-3">
              {cuotasFiltradas.map((c) => (
                <div key={c.id} className="col-12">
                  <div className="d-flex justify-content-between align-items-center p-3 border rounded bg-light">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: c.comprobanteUrl ? '#198754' : '#adb5bd',
                        }}
                        title={c.comprobanteUrl ? 'Tiene comprobante' : 'Sin comprobante'}
                      ></div>
                      <div>
                        <div className="fw-semibold">{c.nombre}</div>
                        <div className="text-muted small">
                          DNI: {c.dni || '—'} · mes: {c.mes || '—'}
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-secondary text-light">
                        ${c.monto.toFixed(2)}
                      </span>

                      <Form.Select
                        size="sm"
                        value={c.estadoUi}
                        onChange={(e) => handleChangeEstado(c.id, e.target.value)}
                        style={{ width: 'auto', minWidth: 140 }}
                      >
                        <option value="Pendiente">Pendiente</option>
                        <option value="En revisión">En revisión</option>
                        <option value="Aprobada">Aprobada</option>
                        <option value="Vencida">Vencida</option>
                      </Form.Select>

                      {c.estadoUi === 'En revisión' && (
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
      </div>
    </div>
  );
}

export default CuotasAdminPage;
