import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ComprobantePage.css';


function ComprobantePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const usuario = {
    id,
    nombre: `Usuario ${id}`,
    mes: 'Junio',
    monto: '$5000',
    comprobanteUrl: '' // Reemplazá por comprobante real
  };

  const manejarDecision = (accion) => {
    alert(`Comprobante del usuario ${usuario.nombre} fue ${accion}`);
    navigate('/cuotas-admin');
  };

  return (
    <div className="comprobante-page">
      <div className="comprobante-container">
        <h3>Comprobante de {usuario.nombre}</h3>
        <p>Mes: {usuario.mes} — Monto: {usuario.monto}</p>
        <img src={usuario.comprobanteUrl} alt="Comprobante" className="imagen-comprobante" />

        <div className="botones-comprobante">
          <button className="btn btn-success" onClick={() => manejarDecision('Aprobado')}>Aprobar</button>
          <button className="btn btn-danger" onClick={() => manejarDecision('Rechazado')}>Rechazar</button>
        </div>
      </div>
    </div>
  );
}

export default ComprobantePage;
