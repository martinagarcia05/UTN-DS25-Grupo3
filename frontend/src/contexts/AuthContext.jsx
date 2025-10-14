// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Helpers locales (evitamos dependencias externas)
function getToken() {
  return localStorage.getItem('token');
}
function parseJWT(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}
function isTokenExpired() {
  const token = getToken();
  if (!token) return true;
  const payload = parseJWT(token);
  if (!payload?.exp) return false;
  return payload.exp * 1000 < Date.now();
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // { email, role, ... } o lo que tengas
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1) Si hay token: decodifica
    const token = getToken();
    if (token && !isTokenExpired()) {
      const payload = parseJWT(token) || {};
      // Normalizamos un poco el rol
      const role = payload.role || payload.rol || payload.userRole || null;
      setUser({ ...payload, role });
      setLoading(false);
      return;
    } else if (token) {
      localStorage.removeItem('token');
    }

    // 2) Si no hay token, probamos objeto 'usuario' (muy usado en proyectos UTN)
    try {
      const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');
      if (usuario) {
        const role =
          usuario.role ||
          usuario.rol ||
          (usuario.isAdmin ? 'ADMIN' : 'USER') ||
          null;
        setUser({ ...usuario, role });
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
    setLoading(false);
  }, []);

  // derivadas útiles
  const isAuthenticated = !!user;
  const isAdmin = (user?.role || '').toUpperCase() === 'ADMIN';

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated,
      isAdmin,
      hasRole: (role) => (user?.role || '').toUpperCase() === String(role || '').toUpperCase(),
      logout: () => {
        localStorage.removeItem('token');
        setUser(null);
      },
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
