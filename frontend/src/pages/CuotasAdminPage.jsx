import '../styles/CuotasAdmin.css';
import { useEffect, useMemo, useState } from 'react';
import CuotaCard from '../components/CuotaCard';
import { Form, Button, Spinner } from 'react-bootstrap';
import Header from '../components/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';



function CuotasAdminPage() {
  const [filtro, setFiltro] = useState('Todas');
  const location = useLocation();
  const defId = location.state?.defId || '';
  const [busqueda, setBusqueda] = useState(defId.toString());
  const [cuotas, setCuotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Cargar cuotas desde Supabase
  useEffect(() => {
    const fetchCuotas = async () => {
      try {
        setLoading(true);
        setError('');
        const { data, error } = await supabase
          .from('Cuota')
          .select(`
            id,
            monto,
            estado,
            socio_id,
            actividad_id,
            fecha_pago,
            metodo_pago,
            Socio (
              id,
              nombre,
              apellido,
              email
            ),
            Comprobante (
              id,
              url,
              activo,
              subido_en
            )
          `)
          .order('id', { ascending: true });

        if (error) throw error;

        const mapped = (data || []).map((row) => {
          const comprobantes = Array.isArray(row.Comprobante) ? row.Comprobante : [];
          const comprobanteActivo = comprobantes.find(c => c.activo);
          const huboRechazo = comprobantes.some(c => !c.activo);
          // Mapear estado de la cuota a estado admin esperado
          let estadoAdmin = 'Pendiente';
          const cuotaEstado = String(row.estado || '').toUpperCase();
          if (cuotaEstado === 'PAGADA') estadoAdmin = 'Aprobada';
          else if (cuotaEstado === 'EN_REVISION') estadoAdmin = 'En revisión';
          else if (!comprobanteActivo && huboRechazo) estadoAdmin = 'Rechazada';
          else if (comprobanteActivo && (cuotaEstado === 'PENDIENTE' || cuotaEstado === 'VENCIDA')) estadoAdmin = 'En revisión';

          return {
            id: row.id,
            nombre: row.Socio ? `${row.Socio.nombre} ${row.Socio.apellido}` : `Socio ${row.socio_id}`,
            estado: estadoAdmin,
            avatar: Boolean(comprobanteActivo?.url),
            comprobanteUrl: comprobanteActivo?.url || null,
            raw: row,
          };
        });

        setCuotas(mapped);
      } catch (e) {
        console.error('Error cargando cuotas:', e);
        setError('No se pudieron cargar las cuotas');
      } finally {
        setLoading(false);
      }
    };

    fetchCuotas();
  }, []);

  const verComprobante = (cuota) => {
    if (cuota?.comprobanteUrl) {
      window.open(cuota.comprobanteUrl, '_blank');
    } else {
      alert('La cuota no tiene comprobante activo');
    }
  };

  const cuotasFiltradas = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return cuotas.filter(c => {
      const coincideEstado = filtro === 'Todas' || c.estado === filtro;
      const coincideBusqueda = !q || c.nombre.toLowerCase().includes(q);
      return coincideEstado && coincideBusqueda;
    });
  }, [cuotas, filtro, busqueda]);

  return (
    <div className="cuotas-page">
      <Header />
      <div className="cuotas-contenido">
        <h4 className="mb-4"><b>Cuotas</b></h4>

        <div className="filtros">
          <Form.Control
            type="text"
            placeholder="Buscar socio..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {["Todas", "Aprobada", "En revisión", "Pendiente", "Rechazada"].map((estado) => (
            <Button
              key={estado}
              variant={filtro === estado ? "dark" : "outline-secondary"}
              onClick={() => setFiltro(estado)}
            >
              {estado}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center p-5">
            <Spinner animation="border" role="status" />
          </div>
        ) : (
          <>
            {error && (
              <div className="alert alert-danger" role="alert">{error}</div>
            )}

            <div style={{
              background: '#fff',
              border: '1px solid #dee2e6',
              borderRadius: 8,
              padding: 12,
              maxHeight: 420,
              overflowY: 'auto'
            }}>
              <div className="tarjetas">
                {cuotasFiltradas.map((cuota) => (
                  <CuotaCard
                    key={cuota.id}
                    cuota={cuota}
                    verComprobante={() => verComprobante(cuota)}
                  />
                ))}
                {!cuotasFiltradas.length && (
                  <div className="text-center text-muted py-3">Sin resultados</div>
                )}
              </div>
            </div>

            <div className="mt-3 d-flex justify-content-end">
              <Button variant="success" onClick={() => navigate('/generarCuota')}>
                Generar cuotas
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default CuotasAdminPage;
