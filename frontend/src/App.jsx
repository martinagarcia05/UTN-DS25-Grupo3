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
import Contacto from './pages/Contacto';
import React from 'react';
import GenerarCuota from './pages/generarCuota';
import ActividadesSocio from './pages/ActividadesSocio';
import CrearAdministrativos from './pages/CrearAdministrativos';
import ModificarDatos from './pages/ModificarDatos';
import AdministrativosList from './pages/ListAdministrativos';
import SociosList from './pages/ListSocios';
import ListProfesores from './pages/ListProfesor';
import Canchas from './pages/Canchas';

function App() {
  return (
    <BrowserRouter>
      <Layout withBackground={true}>
        <Routes>
          <Route path="/" element={<IniciarSesion />} />
          <Route path="/cuotas-admin" element={<CuotasAdminPage />} />
          <Route path="/eventos" element={<AdminEventos/>}  />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/canchas" element={<ReservaCanchasAdmin/>}  />
          <Route path="/canchasSocio" element={<ReservaCancha/>}  />
          <Route path="/modDatos" element={<ModificarDatos/>}  />
          <Route path="/cuotas-table" element={<CuotasTable/>}  />
          <Route path="/inicio" element={<HomePage/>}  />
          <Route path="/registro" element={<Registrarse/>}  />
          <Route path="/actividades" element={<ActividadesAdmin/>}  />
          <Route path="/clases/:actividadId" element={<ClasesAdmin/>}  />
          <Route path="/inicioSocio" element={<HomePageUser/>}  />
          <Route path="/entradasSocio" element={<SocioEntradas/>}  />
          <Route path='/perfil' element={<MiPerfil />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/generar-cuota' element={<GenerarCuota />} />
          <Route path='/actividadesSocio' element={<ActividadesSocio />} />
          <Route path='/administrativos' element={<AdministrativosList />} />
          <Route path='/crear-administrativo' element={<CrearAdministrativos />} />
          <Route path="/socios" element={<SociosList/>}  />
          <Route path="/profesores" element={<ListProfesores/>}  />
          <Route path="/gestionCanchas" element={<Canchas/>}  />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;