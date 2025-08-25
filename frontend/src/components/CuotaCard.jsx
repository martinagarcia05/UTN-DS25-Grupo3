import { Button, Badge, Image } from 'react-bootstrap';
import '../styles/CuotaCard.css';
import avatarDefault from '../assets/logoUniversal.png';

function CuotaCard({ cuota, verComprobante, adjuntarComprobante }) {
  const estadoColor = {
    Aprobada: 'success',
    Rechazada: 'danger',
    Pendiente: 'warning',
    'En revisión': 'secondary',
  };

  const getEstadoText = (estado) => {
    if (estado === 'Pendiente') return 'Pendiente';
    return estado;
  };

  return (
    <div className="cuota-card">
      {/* Avatar y nombre */}
      <div className="usuario">
        <Image
          src={cuota.avatar ? avatarDefault : 'https://via.placeholder.com/40x40.png?text=A'}
          alt="avatar"
        />
        <strong>{cuota.nombre}</strong>
      </div>

      <div className="acciones-derecha">
        <Badge bg={estadoColor[cuota.estado]}>
          {getEstadoText(cuota.estado)}
        </Badge>
        
        {/* Botón para ver comprobante si existe */}
        {cuota.comprobanteUrl && (
          <Button
            variant="outline-primary"
            size="sm"
            onClick={verComprobante}
            className="me-2"
          >
            Ver comprobante
          </Button>
        )}
        
        {/* Botón para adjuntar comprobante si está pendiente */}
        {cuota.estado === 'Pendiente' && (
          <Button
            variant="warning"
            size="sm"
            onClick={() => adjuntarComprobante(cuota.id)}
          >
            Adjuntar comprobante
          </Button>
        )}
      </div>
    </div>
  );
}

export default CuotaCard;
