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

<<<<<<< HEAD
  switch (user.role) {
    case 'SOCIO':
      return <Navigate to="/inicioSocio" replace />;
    case 'ADMINISTRATIVO':
    case 'ADMIN':
=======
  switch (user.rol) {
    case 'SOCIO':
      return <Navigate to="/inicioSocio" replace />;
    case 'ADMIN':
    case 'ADMINISTRATIVO':
>>>>>>> a4e44e3ac6de5083927132cf0f66267fddd2d823
      return <Navigate to="/inicio" replace />;
    default:
      return <Navigate to="/inicio" replace />;
  }
}