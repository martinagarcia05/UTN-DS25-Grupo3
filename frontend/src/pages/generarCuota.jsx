import { supabase } from './supabaseClient';
import Header from '../components/Header';
import '../styles/generarCuotas.css';
import React, { useState, useEffect } from "react";

const CuotasAdmin = () => {
  const [actividades, setActividades] = useState([]);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [actividadId, setActividadId] = useState("");
  const [montoBase, setMontoBase] = useState("");
  const [fechaVenc, setFechaVenc] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 10);
    return d.toISOString().slice(0, 10);
  });
  const [mes, setMes] = useState("ENERO");
  const [socios, setSocios] = useState([]);
  const [preview, setPreview] = useState([]);
  const [generadas, setGeneradas] = useState([]);
  const [loading, setLoading] = useState(false);

  // Cargar las actividades de Supabase
  useEffect(() => {
    const fetchActividades = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Actividad')
          .select('*')
          .eq('activo', true)
          .order('nombre');

        if (error) {
          console.error('Error cargando actividades:', error);
          alert('Error cargando actividades: ' + error.message);
        } else {
          setActividades(data || []);
        }
      } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al cargar actividades: ' + (error?.message || 'sin detalles'));
      } finally {
        setLoading(false);
      }
    };

    fetchActividades();
  }, []);

  // Cargar los socios de la actividad seleccionada
  useEffect(() => {
    const fetchSocios = async () => {
      if (!actividadId) {
        setSocios([]);
        return;
      }

      try {
        setLoading(true);
        // 1) Obtener IDs de clases activas de la actividad
        const { data: clases, error: errClases } = await supabase
          .from('Clase')
          .select('id')
          .eq('actividadId', actividadId)
          .eq('activo', true);

        if (errClases) {
          console.error('Error cargando clases:', errClases);
          alert('Error cargando clases: ' + errClases.message);
          return;
        }

        const claseIds = (clases || []).map(c => c.id);
        if (!claseIds.length) {
          setSocios([]);
          return;
        }

        // 2) Traer socios de esas clases
        const { data, error } = await supabase
          .from('ClaseSocio')
          .select(`
            socioId,
            Socio (
              id,
              nombre,
              apellido,
              email,
              dni
            )
          `)
          .in('claseId', claseIds);

        if (error) {
          console.error('Error cargando socios:', error);
          alert('Error cargando socios: ' + error.message);
        } else {
          const sociosUnicos = {};
          data?.forEach(item => {
            if (item.Socio && !sociosUnicos[item.Socio.id]) {
              sociosUnicos[item.Socio.id] = {
                id: item.Socio.id,
                nombre: item.Socio.nombre,
                apellido: item.Socio.apellido,
                email: item.Socio.email,
                dni: item.Socio.dni
              };
            }
          });
          setSocios(Object.values(sociosUnicos));
        }
      } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al cargar socios');
      } finally {
        setLoading(false);
      }
    };

    fetchSocios();
  }, [actividadId]);

  // Actualizar monto base cuando se selecciona una actividad
  useEffect(() => {
    if (actividadSeleccionada) {
      setMontoBase(actividadSeleccionada.monto.toString());
    }
  }, [actividadSeleccionada]);

  // Manejar cambio de actividad
  const handleActividadChange = (e) => {
    const selectedId = e.target.value;
    setActividadId(selectedId);
    
    const actividad = actividades.find(a => a.id.toString() === selectedId);
    setActividadSeleccionada(actividad);
  };

  // Previsualización de las cuotas a generar
  const onPreview = async () => {
    if (!actividadId) return alert("Selecciona una actividad");
    if (!montoBase || Number(montoBase) <= 0) return alert("Ingresa un monto base válido");
    if (socios.length === 0) return alert("No hay socios inscritos en esta actividad");

    const nuevasCuotas = socios.map((socio) => ({
      socio_id: socio.id,
      actividad_id: parseInt(actividadId),
      mes: mes,
      monto: parseFloat(montoBase),
      estado: 'PENDIENTE',
      metodo_pago: null,
      fecha_pago: null
    }));

    setPreview(nuevasCuotas);
  };

  // Generar las cuotas en Supabase
  const onGenerar = async () => {
    if (!preview.length) return alert("Primero genera la previsualización");
    
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('Cuota')
        .insert(preview)
        .select();

      if (error) {
        console.error('Error generando cuotas:', error);
        alert('Error generando cuotas: ' + error.message);
      } else {
        setGeneradas((prev) => [...prev, ...data]);
        setPreview([]);
        alert(`Se generaron ${data.length} cuotas exitosamente`);
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      alert('Error inesperado al generar cuotas');
    } finally {
      setLoading(false);
    }
  };

  // Usar la enumeración Mes del schema de Prisma
  const meses = [
    { value: 'ENERO', label: 'Enero' },
    { value: 'FEBRERO', label: 'Febrero' },
    { value: 'MARZO', label: 'Marzo' },
    { value: 'ABRIL', label: 'Abril' },
    { value: 'MAYO', label: 'Mayo' },
    { value: 'JUNIO', label: 'Junio' },
    { value: 'JULIO', label: 'Julio' },
    { value: 'AGOSTO', label: 'Agosto' },
    { value: 'SEPTIEMBRE', label: 'Septiembre' },
    { value: 'OCTUBRE', label: 'Octubre' },
    { value: 'NOVIEMBRE', label: 'Noviembre' },
    { value: 'DICIEMBRE', label: 'Diciembre' }
  ];

  return (
    <>
      <Header />
      <div className="gc-container">
      <h1 className="gc-title">Generar Cuotas</h1>
      
      {loading && <p>Cargando...</p>}
      
      <div className="gc-field">
        <label className="gc-label">
          Seleccionar Actividad:
        </label>
        <select 
          onChange={handleActividadChange} 
          value={actividadId}
          className="gc-select"
        >
          <option value="">Seleccionar actividad</option>
          {actividades.map((actividad) => (
            <option key={actividad.id} value={actividad.id}>
              {actividad.nombre} - ${actividad.monto}
            </option>
          ))}
        </select>
      </div>

      {actividadSeleccionada && (
        <div className="gc-info">
          <h3>Información de la Actividad</h3>
          <p><strong>Nombre:</strong> {actividadSeleccionada.nombre}</p>
          <p><strong>Monto base de la actividad:</strong> ${actividadSeleccionada.monto}</p>
          <p><strong>Socios inscritos:</strong> {socios.length}</p>
        </div>
      )}

      <div className="gc-field">
        <label className="gc-label">
          Monto Base de la Cuota (puede modificar el monto de la actividad):
        </label>
        <input
          type="number"
          placeholder="Monto base"
          value={montoBase} 
          onChange={(e) => setMontoBase(e.target.value)}
          className="gc-input"
          min="0"
          step="0.01"
        />
      </div>

      <div className="gc-field">
        <label className="gc-label">
          Mes:
        </label>
        <select 
          onChange={(e) => setMes(e.target.value)} 
          value={mes}
          className="gc-select gc-select--sm"
        >
          {meses.map((mes) => (
            <option key={mes.value} value={mes.value}>
              {mes.label}
            </option>
          ))}
        </select>
      </div>

      <div className="gc-field">
        <label className="gc-label">
          Fecha de Vencimiento:
        </label>
        <input
          type="date"
          value={fechaVenc}
          onChange={(e) => setFechaVenc(e.target.value)}
          className="gc-date"
        />
      </div>

      <div className="gc-actions">
        <button 
          onClick={onPreview}
          className="gc-button primary"
        >
          Previsualizar Cuotas
        </button>
        <button 
          onClick={onGenerar}
          disabled={!preview.length || loading}
          className="gc-button success"
        >
          Generar Cuotas
        </button>
      </div>

      {/* Previsualización */}
      {preview.length > 0 && (
        <div className="gc-field">
          <h2>Previsualización de Cuotas</h2>
          <div className="gc-card gc-preview-card">
            <table className="gc-table">
              <thead>
                <tr>
                  <th>Socio</th>
                  <th>Email</th>
                  <th>Monto</th>
                  <th>Mes</th>
                </tr>
              </thead>
              <tbody>
                {preview.map((cuota, index) => {
                  const socio = socios.find(s => s.id === cuota.socio_id);
                  return (
                    <tr key={index}>
                      <td>
                        {socio ? `${socio.nombre} ${socio.apellido}` : 'N/A'}
                      </td>
                      <td>
                        {socio ? socio.email : 'N/A'}
                      </td>
                      <td>
                        ${cuota.monto}
                      </td>
                      <td>
                        {cuota.mes}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Listado de cuotas generadas */}
      {generadas.length > 0 && (
        <div>
          <h2>Cuotas Generadas Exitosamente</h2>
          <div className="gc-card gc-gen-card">
            <table className="gc-table">
              <thead>
                <tr>
                  <th>ID Cuota</th>
                  <th>Socio</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {generadas.map((cuota, index) => (
                  <tr key={index}>
                    <td>
                      {cuota.id}
                    </td>
                    <td>
                      ID: {cuota.socio_id}
                    </td>
                    <td>
                      ${cuota.monto}
                    </td>
                    <td>
                      {cuota.estado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default CuotasAdmin;