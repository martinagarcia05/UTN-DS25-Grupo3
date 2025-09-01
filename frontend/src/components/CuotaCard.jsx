import { Button, Badge, Image } from 'react-bootstrap';
import '../styles/CuotaCard.css';
import avatarDefault from '../assets/logoUniversal.png';

<<<<<<< HEAD
function CuotaCard({ cuota, verComprobante }) {
  const estadoColor = {
    Aprobada: 'success',
    Rechazada: 'danger',
    Pendiente: 'secondary',
=======
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
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
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
<<<<<<< HEAD
          {cuota.estado}
        </Badge>
        <Button
          variant={cuota.estado === 'Pendiente' ? 'primary' : 'outline-primary'}
          size="sm"
          onClick={verComprobante}
        >
          Ver comprobante
        </Button>
=======
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
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
      </div>
    </div>
  );
}

export default CuotaCard;
