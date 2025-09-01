import { Button, Badge, Image } from 'react-bootstrap';
import '../styles/CuotaCard.css';
import avatarDefault from '../assets/logoUniversal.png';
import React from 'react';

function CuotaCard({ cuota, verComprobante }) {
  const estadoColor = {
    Aprobada: 'success',
    Rechazada: 'danger',
    Pendiente: 'secondary',
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
          {cuota.estado}
        </Badge>
        <Button
          variant={cuota.estado === 'Pendiente' ? 'primary' : 'outline-primary'}
          size="sm"
          onClick={verComprobante}
        >
          Ver comprobante
        </Button>
      </div>
    </div>
  );
}

export default CuotaCard;
