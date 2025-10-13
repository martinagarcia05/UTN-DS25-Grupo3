import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export function PrivateRoute({ children, requiredRole = null }) {
const { isAuthenticated, user, loading } = useAuth();
if (loading) {
 return <div>Verificando autorización...</div>;
 }
 if (!isAuthenticated) {    
    return <Navigate to="/" replace />;
 }
if (requiredRole && user.role !== requiredRole) {
    if (user.role === 'ADMINISTRATIVO') {
      return <Navigate to="/inicio" replace />;
    } else if (user.role === 'SOCIO') {
      return <Navigate to="/inicioSocio" replace />;
    } else if (user.role === 'ADMIN') {
      return <Navigate to="/inicioAdmin" replace />;
    }
    // Por si acaso, un fallback a la página de login si el rol es desconocido
    return <Navigate to="/" replace />;
  }
return children;
}
