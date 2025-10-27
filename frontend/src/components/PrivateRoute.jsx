import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function PrivateRoute({ children, allowedRoles = [] }) {
  const { isAuthenticated, loading, user, hasRole } = useAuth();

  if (loading) return <div style={{ padding: 16 }}>Verificando autorización…</div>;

  if (!isAuthenticated || !user) {
    return <Navigate to="/IniciarSesion" replace />;
  }

  if (!allowedRoles.length) {
    return children;
  }

  const permitido = hasRole(allowedRoles);
  if (permitido) return children;

  switch (user.role) {
    case 'SOCIO':
      return <Navigate to="/inicioSocio" replace />;
    case 'ADMINISTRATIVO':
    case 'ADMIN':
      return <Navigate to="/inicio" replace />;
    default:
      return <Navigate to="/inicio" replace />;
  }
}