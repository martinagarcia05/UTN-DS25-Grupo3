import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/generarCuotas.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generarCuotaSchema } from "../validations/generarCuotaSchema";
import axios from "axios";

const MESES = [
  "ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO",
  "JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"
];

function GenerarCuotaPage() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState([]);
  const [resultado, setResultado] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(generarCuotaSchema),
    defaultValues: { mes: "ENERO", montoBase: "" },
  });

  const token = localStorage.getItem("token");

  const onPreview = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/cuotas/admin/generar`,
        {
          actividadId: 0,
          mes: values.mes,
          montoBase: Number(values.montoBase || 0),
          preview: true,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPreview(data.previewItems || []);
      setResultado(null);
    } catch (err) {
      console.error(err);
      alert("Error generando previsualización");
    } finally {
      setLoading(false);
    }
  };

  const onGenerar = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/cuotas/admin/generar`,
        {
          actividadId: 0,
          mes: values.mes,
          montoBase: Number(values.montoBase || 0),
          preview: false,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResultado(data);
      setPreview([]);
    } catch (err) {
      console.error(err);
      alert("Error generando cuotas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="gc-container container mt-5">
        <div className="card shadow-lg border-0">
          <div className="card-header bg-dark text-white text-center py-3">
            <h3 className="m-0">Generar Cuotas</h3>
          </div>

          <div className="card-body px-5 py-4">
            <form noValidate>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Mes</label>
                  <select
                    className={`form-select ${errors.mes ? "is-invalid" : ""}`}
                    {...register("mes")}
                  >
                    {MESES.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  {errors.mes && (
                    <div className="invalid-feedback">{errors.mes.message}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Monto Base (opcional)</label>
                  <input
                    type="number"
                    className={`form-control ${errors.montoBase ? "is-invalid" : ""}`}
                    placeholder="Ingrese monto base"
                    {...register("montoBase")}
                  />
                  {errors.montoBase && (
                    <div className="invalid-feedback">{errors.montoBase.message}</div>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => handleSubmit(onPreview)()}
                  className="btn btn-primary px-4"
                  disabled={isSubmitting || loading}
                >
                  Previsualizar
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit(onGenerar)()}
                  className="btn btn-success px-4"
                  disabled={loading || !preview.length}
                >
                  Generar Cuotas
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- Vista previa --- */}
        {!!preview.length && (
          <div className="card shadow-sm mt-5 border-0">
            <div className="card-header bg-secondary text-white">
              <h5 className="m-0">Vista previa de cuotas</h5>
            </div>
            <div className="card-body table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Socio</th>
                    <th>Total</th>
                    <th>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {preview.map((p, i) => (
                    <tr key={i}>
                      <td><strong>ID {p.socioId}</strong></td>
                      <td>${p.total}</td>
                      <td>
                        {p.detalle.map((d, j) => (
                          <div key={j}>
                            {d.tipo === "base"
                              ? <span className="text-muted">Base: ${d.monto}</span>
                              : <span>{d.nombre}: ${d.monto}</span>}
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- Resultado final --- */}
        {resultado && (
          <div className="card shadow-sm mt-5 border-0">
            <div className="card-header bg-success text-white">
              <h5 className="m-0">Resultado final</h5>
            </div>
            <div className="card-body text-center fs-5">
              <p className="mb-1">
                <strong>Procesados:</strong> {resultado.processedSocios}
              </p>
              <p className="mb-1 text-success fw-semibold">
                Generadas: {resultado.created}
              </p>
              <p className="mb-1 text-primary fw-semibold">
                Actualizadas: {resultado.updated}
              </p>
              <p className="mb-0 text-muted">
                Omitidas: {resultado.skips}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GenerarCuotaPage;
