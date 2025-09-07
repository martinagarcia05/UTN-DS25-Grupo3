import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CuotasAdminPage from './pages/CuotasAdminPage';
import Layout from './components/Layout';
import AdminEventos from './pages/AdminEventos';
import ReservaCanchasAdmin from './pages/ReservaCanchaAdmin';
import SocioEditForm from './pages/SocioEditForm';
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
import GenerarCuota from './pages/generarCuota';


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
          <Route path="/socio-mod" element={<SocioEditForm/>}  />
          <Route path="/cuotas-table" element={<CuotasTable/>}  />
          <Route path="/inicio" element={<HomePage/>}  />
          <Route path="/registro" element={<Registrarse/>}  />
          <Route path="/actividades" element={<ActividadesAdmin/>}  />
          <Route path="/clases/:actividadId" element={<ClasesAdmin/>}  />
          <Route path="/inicioSocio" element={<HomePageUser/>}  />
          <Route path="/entradasSocio" element={<SocioEntradas/>}  />
          <Route path='/perfil' element={<MiPerfil />} />
          <Route path='/versocios' element={<VerSocios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/generar-cuota' element={<GenerarCuota />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;