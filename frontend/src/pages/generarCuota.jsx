import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import "../styles/generarCuotas.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../service/api";

const MESES = [
  "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO",
  "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
];

const TODAY = new Date().toISOString().slice(0, 10);

const schema = yup.object({
  actividadId: yup.string().trim().required('Debes seleccionar una actividad'),
  montoBase: yup
    .number()
    .typeError('El monto base debe ser un número')
    .min(0, 'El monto base no puede ser negativo')
    .max(1000000, 'El monto base es demasiado alto')
    .nullable()
    .transform((v, o) => (o === '' || o === null ? 0 : v)),
  mes: yup.string().oneOf(MESES, 'Mes inválido').required('Debes seleccionar un mes'),
  fechaVenc: yup
    .string()
    .required('Debes seleccionar una fecha de vencimiento')
    .test('no-pasado', 'La fecha de vencimiento no puede ser pasada', (v) => v && v >= TODAY),
});

function CuotasAdmin() {
  const [loading, setLoading] = useState(false);
  const [actividades, setActividades] = useState([]);
  const [actividadId, setActividadId] = useState("");
  const [montoActividad, setMontoActividad] = useState(0);
  const [socios, setSocios] = useState([]);

  const [preview, setPreview] = useState([]);
  const [generadas, setGeneradas] = useState([]);

  const defaultFecha = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 10);
    return d.toISOString().slice(0, 10);
  })();

  const {
    register, handleSubmit,
    formState: { errors, isSubmitting },
    watch, setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      actividadId: "",
      montoBase: "",
      mes: "ENERO",
      fechaVenc: defaultFecha,
    }
  });

  const watchActividadId = watch("actividadId");

  // Cargar actividades (desde API)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/api/actividades/activas');
        const lista = Array.isArray(data) ? data : (Array.isArray(data?.actividades) ? data.actividades : []);
        setActividades(lista);
      } catch (err) {
        console.error(err);
        alert("No se pudieron cargar las actividades. Intentá nuevamente.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const actividadSeleccionada = useMemo(
    () => actividades.find(a => String(a.id) === String(actividadId)) ?? null,
    [actividades, actividadId]
  );

  // Cuando cambia la actividad → setear monto y cargar socios de esa actividad
  useEffect(() => {
    setActividadId(watchActividadId || "");
    setPreview([]);
    setGeneradas([]);

    const act = actividades.find(a => String(a.id) === String(watchActividadId));
    setMontoActividad(Number(act?.monto ?? 0));

    (async () => {
      if (!watchActividadId) { setSocios([]); return; }
      try {
        setLoading(true);
        const { data } = await api.get(`/api/actividades/${watchActividadId}/socios`);
        setSocios(Array.isArray(data) ? data : (Array.isArray(data?.socios) ? data.socios : []));
      } catch (e) {
        console.error(e);
        alert("No se pudieron cargar los socios de la actividad.");
        setSocios([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [watchActividadId, actividades]);

  // PREVIEW (validado)
  const onPreviewSubmit = async (values) => {
    if (!socios.length) {
      alert("No hay socios inscriptos para esta actividad");
      return;
    }
    try {
      setLoading(true);
      const { data } = await api.post('/api/cuotas/admin/generar', {
        actividadId: Number(values.actividadId),
        mes: values.mes,
        montoBase: Number(values.montoBase || 0),
        fechaVencimiento: values.fechaVenc,
        preview: true,
      });

      setPreview(Array.isArray(data?.preview) ? data.preview : []);
      setGeneradas([]);
    } catch (err) {
      console.error(err);
      alert("No se pudo generar la previsualización. Intentá nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // GENERAR definitivo
  const onGenerar = async () => {
    if (!preview.length) {
      alert("Primero genera la previsualización");
      return;
    }
    try {
      setLoading(true);
      const { data } = await api.post('/api/cuotas/admin/generar', {
        preview: false,
      });
      setGeneradas(Array.isArray(data) ? data : (Array.isArray(data?.cuotas) ? data.cuotas : []));
      setPreview([]);
      alert(`Se generaron/actualizaron ${Array.isArray(data) ? data.length : (data?.cuotas?.length || 0)} cuota(s)`);
    } catch (err) {
      console.error(err);
      alert("No se pudieron generar las cuotas. Intentá nuevamente.");
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

        <form onSubmit={handleSubmit(onPreviewSubmit)} noValidate>
          <div className="gc-field">
            <label className="gc-label">Seleccionar Actividad:</label>
            <select
              className={`gc-select ${errors.actividadId ? 'input-error' : ''}`}
              {...register("actividadId")}
              onChange={(e) => {
                setValue("actividadId", e.target.value, { shouldValidate: true });
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

        {!!preview.length && (
          <div className="gc-preview">
            <h3>Previsualización</h3>
            <table className="gc-table">
              <thead>
                <tr>
                  <th>Socio</th>
                  <th>Mes</th>
                  <th>Monto</th>
                  <th>Estado</th>
                  <th>Vencimiento</th>
                </tr>
              </thead>
              <tbody>
                {preview.map((c, idx) => (
                  <tr key={idx}>
                    <td>{c.socioNombre || `Socio #${c.socioId}`}</td>
                    <td>{c.mes}</td>
                    <td>${c.monto}</td>
                    <td>{c.estado}</td>
                    <td>{c.fechaVencimiento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
                    <td>{c.socioId}</td>
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
