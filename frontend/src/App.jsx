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
<<<<<<< HEAD
import ComprobantePage from './pages/ComprobantePage';
=======
import ClasesAdmin from './pages/ClasesAdmin';
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03


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
<<<<<<< HEAD
          <Route path="/inicioSocio" element={<HomePageUser/>}  />
          <Route path="/entradasSocio" element={<SocioEntradas/>}  />
          <Route path="/comprobante/:id" element={<ComprobantePage />} />
=======
          <Route path="/clases/:actividadId" element={<ClasesAdmin/>}  />
          <Route path="/inicioSocio" element={<HomePageUser/>}  />
          <Route path="/entradasSocio" element={<SocioEntradas/>}  />
>>>>>>> 23c934599abc419559a27546c68404de6df9dc03
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;