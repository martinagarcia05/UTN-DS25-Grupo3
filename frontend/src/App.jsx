import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CuotasAdminPage from './pages/CuotasAdminPage';
import Layout from './components/Layout';
import AdminEventos from './pages/AdminEventos';
import ReservaCanchasAdmin from './pages/ReservaCanchaAdmin';
import CuotasTable from './pages/CuotasTable';
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import ActividadesAdmin from './pages/ActividadesAdmin';
import HomePageUser from './pages/HomePageUser'
import ReservaCancha from './pages/ReservaCanchaSocio';
import SocioEntradas from './pages/SocioEntradas';
import ClasesAdmin from './pages/ClasesAdmin';
import MiPerfil from './pages/MiPerfil';
import VerSocios from './pages/VerSocios';
import Contacto from './pages/Contacto';
import React from 'react';
import GenerarCuota from './pages/generarCuota';
import ActividadesSocio from './pages/ActividadesSocio';
import CrearAdministrativos from './pages/CrearAdministrativos';
import HomePageAdmin from './pages/HomePageAdmin';
import ModificarDatos from './pages/ModificarDatos';
import AdministrativosList from './pages/ListAdministrativos';
import SociosList from './pages/ListSocios';
import ListProfesores from './pages/ListProfesor';
import Canchas from './pages/Canchas';

// Au
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';


function App() {
  return (
    <BrowserRouter>
      <Layout withBackground={true}>
        <Routes>
          <Route path="/" element={<IniciarSesion />} />
          //Rutas publicas
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registrarse/>}  />
          <Route path="/inicio" element={<HomePage/>}  />
          <Route path='/contacto' element={<Contacto />} />

          //Rutas privadas: Admin
          <Route path="/cuotas-admin" element={ <PrivateRoute requiredRole="ADMIN"><CuotasAdminPage /></PrivateRoute>} />
          <Route path='/generar-cuota' element={<PrivateRoute requiredRole="ADMIN"><GenerarCuota /></PrivateRoute>} />

          
          // Rutas privadas: Socio
          <Route path="/cuotas-table" element={ <PrivateRoute requiredRole="USER"> <CuotasTable/> </PrivateRoute>}  />

          //Faltan seleccionar estas rutas
          <Route path="/eventos" element={<AdminEventos/>}  />
          <Route path="/canchas" element={<ReservaCanchasAdmin/>}  />
          <Route path="/canchasSocio" element={<ReservaCancha/>}  />
          <Route path="/modDatos" element={<ModificarDatos/>}  />
          <Route path="/actividades" element={<ActividadesAdmin/>}  />
          <Route path="/clases/:actividadId" element={<ClasesAdmin/>}  />
          <Route path="/inicioSocio" element={<HomePageUser/>}  />
          <Route path="/entradasSocio" element={<SocioEntradas/>}  />
          <Route path='/perfil' element={<MiPerfil />} />
          <Route path='/versocios' element={<VerSocios />} />
          <Route path='/actividadesSocio' element={<ActividadesSocio />} />
          <Route path='/administrativos' element={<AdministrativosList />} />
          <Route path='/crear-administrativo' element={<CrearAdministrativos />} />
          <Route path="/inicioAdmin" element={<HomePageAdmin/>}  />
          <Route path="/socios" element={<SociosList/>}  />
          <Route path="/profesores" element={<ListProfesores/>}  />
          <Route path="/gestionCanchas" element={<Canchas/>}  />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;