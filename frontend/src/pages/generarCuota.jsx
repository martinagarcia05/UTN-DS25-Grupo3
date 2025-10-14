import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import { supabase } from "./supabaseClient";
import "../styles/generarCuotas.css";

const MESES = [
  "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO",
  "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
];

function CuotasAdmin() {
  // UI state
  const [loading, setLoading] = useState(false);

  // Datos principales
  const [actividades, setActividades] = useState([]);
  const [actividadId, setActividadId] = useState("");
  const actividadSeleccionada = useMemo(
    () => actividades.find(a => String(a.id) === String(actividadId)) ?? null,
    [actividades, actividadId]
  );

  // 💡 NUEVO: monto de la actividad (guardado aparte)
  const [montoActividad, setMontoActividad] = useState(0);

  // 💡 Monto base que agrega el admin (solo adicional)
  const [montoBase, setMontoBase] = useState("");

  const [mes, setMes] = useState("ENERO");
  const [fechaVenc, setFechaVenc] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 10);
    return d.toISOString().slice(0, 10);
  });

  // Socios de la actividad seleccionada
  const [socios, setSocios] = useState([]);

  // Previsualización y resultado
  const [preview, setPreview] = useState([]);
  const [generadas, setGeneradas] = useState([]);

  // ---------------------------
  // Carga de actividades
  // ---------------------------
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Actividad')
          .select('id, nombre, monto')
          .eq("activo", true)
          .order('nombre', { ascending: true });

        if (error) throw error;
        setActividades(data ?? []);
      } catch (err) {
        console.error(err);
        alert("Error cargando actividades");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 💡 Cuando cambia la actividad, guardamos SU monto (NO tocamos el base)
  useEffect(() => {
    setMontoActividad(Number(actividadSeleccionada?.monto ?? 0));
  }, [actividadSeleccionada]);

  // Cargar socios de esa actividad (Clase -> ClaseSocio -> Socio)
  useEffect(() => {
    (async () => {
      if (!actividadId) {
        setSocios([]);
        return;
      }

      try {
        setLoading(true);

        // 1) Clases activas de esa actividad
        const { data: clases, error: claseErr } = await supabase
          .from('Clase')
          .select("id")
          .eq("actividadId", Number(actividadId))
          .eq("activo", true);

        if (claseErr) throw claseErr;
        const claseIds = (clases ?? []).map(c => c.id);
        if (!claseIds.length) {
          setSocios([]);
          return;
        }

        // 2) Inscripciones en esas clases
        const { data: inscripciones, error: inscErr } = await supabase
          .from('ClaseSocio')
          .select("socioId")
          .in("claseId", claseIds);

        if (inscErr) throw inscErr;
        const socioIds = Array.from(new Set((inscripciones ?? []).map(i => i.socioId)));
        if (!socioIds.length) {
          setSocios([]);
          return;
        }

        // 3) Datos de esos socios
        const { data: sociosDb, error: socioErr } = await supabase
          .from('Socio')
          .select('id, nombre, apellido, email, dni')
          .in("id", socioIds);

        if (socioErr) throw socioErr;
        setSocios(sociosDb ?? []);
      } catch (err) {
        console.error(err);
        alert("Error cargando socios de la actividad");
      } finally {
        setLoading(false);
      }
    })();
  }, [actividadId]);

  // ---------------------------
  // Handlers UI
  // ---------------------------
  const handleActividadChange = (e) => {
    setActividadId(e.target.value);
    setPreview([]);
    setGeneradas([]);
  };

  const onPreview = () => {
    if (!actividadId) return alert("Selecciona una actividad");
    const base = Number(montoBase || 0);
    if (base < 0) return alert("El monto base no puede ser negativo");
    if (!mes) return alert("Selecciona un mes");
    if (!fechaVenc) return alert("Selecciona una fecha de vencimiento");
    if (!socios.length) return alert("No hay socios inscriptos para esta actividad");

    const actividadNombre =
      actividadSeleccionada?.nombre ??
      (actividades.find(a => String(a.id) === String(actividadId))?.nombre || `Actividad #${actividadId}`);

    const actMonto = Number(montoActividad || 0);

    // Items para la PREVISUALIZACIÓN (incluye campos de UI)
    const nuevasCuotas = socios.map((s) => {
      const total = actMonto + base; // total = actividad + base
      return {
        // --- DB (para insertar luego) ---
        socio_id: s.id,
        mes,
        monto: total,              
        estado: "PENDIENTE",
        metodo_pago: null,
        fecha_pago: null,
        fecha_vencimiento: fechaVenc,

        // --- SOLO UI (no enviar a la DB) ---
        socio_nombre: s.nombre ?? "",
        socio_apellido: s.apellido ?? "",
        actividad_id: Number(actividadId),
        actividad_nombre: actividadNombre,
        actividad_monto: actMonto,
        monto_base: base,
        monto_total: total,
        vencimiento_ui: fechaVenc,
      };
    });

    setPreview(nuevasCuotas);
    setGeneradas([]);
  };

  const onGenerar = async () => {
    if (!preview.length) return alert("Primero genera la previsualización");
    try {
      setLoading(true);
    
      const rows = preview.map(({ socio_id, mes, monto, monto_total, fecha_vencimiento }) => ({
        socio_id: Number(socio_id),
        mes: String(mes),
        monto: Number(monto ?? monto_total ?? 0),
        estado: "PENDIENTE",
        metodo_pago: null,
        fecha_pago: null,
        ...(fecha_vencimiento ? { fecha_vencimiento } : {}),
      }));
    
      const { data, error } = await supabase
        .from("Cuota")
        .upsert(rows, { onConflict: "socio_id,mes" })
        .select("id, socio_id, monto, estado");
    
      if (error) throw error;
    
      if (data && data.length) {
        // data: [{id, socio_id, monto, estado}]
        const cuotaXactividadRows = data.map(cuota => ({
          cuotaId: cuota.id,
          actividadId: Number(actividadId),
          monto: Number(montoActividad) + Number(montoBase || 0),
        }));
      
        const { error: errorCxa } = await supabase
          .from('cuotaXactividad')
          .upsert(cuotaXactividadRows, { onConflict: 'cuotaId,actividadId' });
      
        if (errorCxa) throw errorCxa;
      }

      setGeneradas(data ?? []);
      setPreview([]);
      alert(`Se generaron/actualizaron ${data?.length ?? 0} cuota(s)`);
    } catch (err) {
      console.error("Supabase upsert error:", err);
      alert(
        "Error generando cuotas:\n" +
        (err.message || "") + "\n" +
        (err.details || "") + "\n" +
        (err.hint || "")
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Header />
      <div className="gc-container">
        <h1 className="gc-title">Generar Cuotas</h1>

        {loading && <p>Cargando...</p>}

        <div className="gc-field">
          <label className="gc-label">Seleccionar Actividad:</label>
          <select
            className="gc-select"
            value={actividadId}
            onChange={handleActividadChange}
          >
            <option value="">Seleccionar actividad</option>
            {actividades.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Info de la actividad seleccionada */}
        {actividadSeleccionada && (
          <div className="gc-info">
            <strong>Actividad:</strong> {actividadSeleccionada.nombre} ·{" "}
            <strong>Monto actividad:</strong> ${montoActividad}
          </div>
        )}

        <div className="gc-field">
          <label className="gc-label">
            Monto Base de la Cuota (adicional):
          </label>
          <input
            className="gc-input"
            type="number"
            placeholder="Monto base"
            value={montoBase}
            onChange={(e) => setMontoBase(e.target.value)}
            min="0"
          />
        </div>

        <div className="gc-field">
          <label className="gc-label">Mes:</label>
          <select
            className="gc-select"
            value={mes}
            onChange={(e) => setMes(e.target.value)}
          >
            {MESES.map((m) => (
              <option key={m} value={m}>
                {m[0] + m.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="gc-field">
          <label className="gc-label">Fecha de Vencimiento:</label>
          <input
            className="gc-date"
            type="date"
            value={fechaVenc}
            onChange={(e) => setFechaVenc(e.target.value)}
          />
        </div>

        <div className="gc-actions">
          <button className="gc-button primary" onClick={onPreview}>
            Previsualizar Cuotas
          </button>
          <button
            className="gc-button success"
            onClick={onGenerar}
            disabled={!preview.length || loading}
          >
            Generar Cuotas
          </button>
        </div>

        {/* PREVIEW */}
        {!!preview.length && (
          <div className="gc-preview">
            <h3>Previsualización</h3>
            <table className="gc-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Actividad</th>
                  <th>Mes</th>
                  <th>Monto</th> 
                  <th>Estado</th>
                  <th>Vencimiento</th>
                </tr>
              </thead>
              <tbody>
                {preview.map((c, idx) => (
                  <tr key={idx}>
                    <td>{c.socio_nombre}</td>
                    <td>{c.socio_apellido}</td>
                    <td>{c.actividad_nombre}</td>
                    <td>{c.mes}</td>
                    <td>${c.monto_total}</td> 
                    <td>{c.estado}</td>
                    <td>{c.vencimiento_ui}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* (Opcional) breakdown debajo */}
            <div style={{ marginTop: 8, fontSize: 13, color: "#666" }}>
              <em>
                Monto total = Monto actividad (${montoActividad}) + Monto base (${Number(montoBase || 0)}).
              </em>
            </div>
          </div>
        )}

        {/* RESULTADO */}
        {!!generadas.length && (
          <div className="gc-preview">
            <h3>Cuotas generadas/actualizadas</h3>
            <table className="gc-table">
              <thead>
                <tr>
                  <th>Cuota ID</th>
                  <th>Socio ID</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {generadas.map((c) => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.socio_id}</td>
                    <td>${c.monto}</td>
                    <td>{c.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default CuotasAdmin;
