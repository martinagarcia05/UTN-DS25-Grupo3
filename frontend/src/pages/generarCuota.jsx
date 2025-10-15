import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import { supabase } from "./supabaseClient";
import "../styles/generarCuotas.css";

// 🔹 NUEVO: RHF + Yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generarCuotaSchema } from "../validations/generarCuotaSchema";

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

  const [montoActividad, setMontoActividad] = useState(0);

  // Socios de la actividad seleccionada
  const [socios, setSocios] = useState([]);

  // Previsualización y resultado
  const [preview, setPreview] = useState([]);
  const [generadas, setGeneradas] = useState([]);

  // 🔹 RHF setup (con defaults equivalentes a los que tenías)
  const defaultFecha = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 10);
    return d.toISOString().slice(0, 10);
  })();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(generarCuotaSchema),
    defaultValues: {
      actividadId: "",
      montoBase: "",      // se transforma a 0 en el schema si viene vacío
      mes: "ENERO",
      fechaVenc: defaultFecha,
    }
  });

  // Sincronizo actividadId de RHF con el estado que usa la lógica de efectos
  const watchActividadId = watch("actividadId");
  useEffect(() => {
    setActividadId(watchActividadId || "");
    setPreview([]);
    setGeneradas([]);
  }, [watchActividadId]);

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

  // Cuando cambia la actividad, guardamos SU monto
  useEffect(() => {
    setMontoActividad(Number(actividadSeleccionada?.monto ?? 0));
  }, [actividadSeleccionada]);

  // Cargar socios de esa actividad
  useEffect(() => {
    (async () => {
      if (!actividadId) {
        setSocios([]);
        return;
      }

      try {
        setLoading(true);

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
  // Handlers de Form
  // ---------------------------

  // ⛳️ Submit validado → genera PREVIEW
  const onPreviewSubmit = (values) => {
    if (!socios.length) {
      alert("No hay socios inscriptos para esta actividad");
      return;
    }

    const actividadNombre =
      actividadSeleccionada?.nombre ??
      (actividades.find(a => String(a.id) === String(values.actividadId))?.nombre || `Actividad #${values.actividadId}`);

    const base = Number(values.montoBase || 0);
    const actMonto = Number(montoActividad || 0);
    const totalPorSocio = actMonto + base;

    const nuevasCuotas = socios.map((s) => ({
      socio_id: s.id,
      mes: values.mes,
      monto: totalPorSocio,
      estado: "PENDIENTE",
      metodo_pago: null,
      fecha_pago: null,
      fecha_vencimiento: values.fechaVenc,
      socio_nombre: s.nombre ?? "",
      socio_apellido: s.apellido ?? "",
      actividad_id: Number(values.actividadId),
      actividad_nombre: actividadNombre,
      actividad_monto: actMonto,
      monto_base: base,
      monto_total: totalPorSocio,
      vencimiento_ui: values.fechaVenc,
    }));

    setPreview(nuevasCuotas);
    setGeneradas([]);
  };

  const onGenerar = async () => {
    if (!preview.length) {
      alert("Primero genera la previsualización");
      return;
    }
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
        const { montoBase } = getFormValuesSafe();
        const totalInsertado = Number(montoActividad) + Number(montoBase || 0);

        const cuotaXactividadRows = data.map(cuota => ({
          cuotaId: cuota.id,
          actividadId: Number(actividadId),
          monto: totalInsertado,
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

  // Helper para leer valores actuales del form (sin re-render extra)
  const getFormValuesSafe = () => {
    const actividadIdVal = watch("actividadId");
    const montoBaseVal = watch("montoBase");
    const mesVal = watch("mes");
    const fechaVencVal = watch("fechaVenc");
    return { actividadId: actividadIdVal, montoBase: montoBaseVal, mes: mesVal, fechaVenc: fechaVencVal };
  };

  return (
    <>
      <Header />
      <div className="gc-container">
        <h1 className="gc-title">Generar Cuotas</h1>
        {loading && <p>Cargando...</p>}

        {/* 🔹 FORM con RHF */}
        <form onSubmit={handleSubmit(onPreviewSubmit)} noValidate>
          <div className="gc-field">
            <label className="gc-label">Seleccionar Actividad:</label>
            <select
              className={`gc-select ${errors.actividadId ? 'input-error' : ''}`}
              {...register("actividadId")}
              onChange={(e) => {
                setValue("actividadId", e.target.value, { shouldValidate: true });
                setActividadId(e.target.value);
              }}
            >
              <option value="">Seleccionar actividad</option>
              {actividades.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nombre}
                </option>
              ))}
            </select>
            {errors.actividadId && <span className="field-error">{errors.actividadId.message}</span>}
          </div>

          {actividadSeleccionada && (
            <div className="gc-info">
              <strong>Actividad:</strong> {actividadSeleccionada.nombre} ·{" "}
              <strong>Monto actividad:</strong> ${montoActividad}
            </div>
          )}

          <div className="gc-field">
            <label className="gc-label">Monto Base de la Cuota (adicional):</label>
            <input
              className={`gc-input ${errors.montoBase ? 'input-error' : ''}`}
              type="number"
              placeholder="Monto base"
              {...register("montoBase")}
              min="0"
              step="0.01"
            />
            {errors.montoBase && <span className="field-error">{errors.montoBase.message}</span>}
          </div>

          <div className="gc-field">
            <label className="gc-label">Mes:</label>
            <select
              className={`gc-select ${errors.mes ? 'input-error' : ''}`}
              {...register("mes")}
            >
              {MESES.map((m) => (
                <option key={m} value={m}>
                  {m[0] + m.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
            {errors.mes && <span className="field-error">{errors.mes.message}</span>}
          </div>

          <div className="gc-field">
            <label className="gc-label">Fecha de Vencimiento:</label>
            <input
              className={`gc-date ${errors.fechaVenc ? 'input-error' : ''}`}
              type="date"
              {...register("fechaVenc")}
            />
            {errors.fechaVenc && <span className="field-error">{errors.fechaVenc.message}</span>}
          </div>

          <div className="gc-actions">
            <button className="gc-button primary" type="submit" disabled={isSubmitting || loading}>
              Previsualizar Cuotas
            </button>
            <button
              className="gc-button success"
              type="button"
              onClick={onGenerar}
              disabled={!preview.length || loading}
            >
              Generar Cuotas
            </button>
          </div>
        </form>

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
            <div style={{ marginTop: 8, fontSize: 13, color: "#666" }}>
              <em>
                Monto total = Monto actividad (${montoActividad}) + Monto base (${Number(getFormValuesSafe().montoBase || 0)}).
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
