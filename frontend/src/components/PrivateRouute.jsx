// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function PrivateRoute({ children, requiredRole = null }) {
  const { isAuthenticated, loading, user, hasRole } = useAuth();

  if (loading) return <div style={{ padding: 16 }}>Verificando autorización…</div>;

  if (!isAuthenticated) {
    return <Navigate to="/IniciarSesion" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/inicio" replace />;
  }

  return children;
}
