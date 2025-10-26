import { createContext, useState, useContext, useEffect } from 'react';
import {
  setAuth,
  getUser,
  clearAuth as logoutHelper,
  isAuthenticated as isAuthenticatedHelper
} from '../helpers/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticatedHelper()) { //si la sesión es válida
      //obtenemos los datos completos del usuario:
      const currentUser = getUser();
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  // Función de login que se usará en los componentes: reeplaza onsubmit
  const login = async (emailOdni, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOdni, password })
      });

      const responseBody = await res.json();

      if (!res.ok) {
        throw new Error(responseBody.message || "Credenciales inválidas");
      }

      const { token, user: userFromResponse } = responseBody.data;


      setAuth(token, userFromResponse.role, userFromResponse);
      // Actualizar el estado del contexto
      setUser(userFromResponse);

      return { success: true, user: userFromResponse };

    } catch (error) {
      console.error("Error en el login del contexto:", error);
      return { success: false, error: error.message };
    }
  };

  // Función de logout
  const logout = () => {
    logoutHelper(); // Limpia localStorage
    setUser(null);  // Limpia el estado
  };

  // Verificar expiración del token periódicamente (cada minuto)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAuthenticatedHelper()) {
        // Si el token expiró (o fue borrado), isAuthenticatedHelper devuelve false y llama a logoutHelper.
        // Aquí solo necesitamos actualizar el estado del componente.
        setUser(null);
      }
    }, 60000); // 60000 ms = 1 minuto

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  // 3. Definir el valor que proveerá el contexto a toda la app
  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user, // True si hay usuario, false si no

    // Helpers de roles adaptados a tu dominio
    isAdmin: user?.role === 'ADMIN',
    isSocio: user?.role === 'SOCIO',
    isAdministrativo: user?.role === 'ADMINISTRATIVO',
    hasRole: (role) => user?.role === role,
  };

  // 4. Retornar el proveedor
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}