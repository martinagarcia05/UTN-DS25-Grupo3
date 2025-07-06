import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CuotasAdminPage from './pages/CuotasAdminPage';
import Layout from './components/Layout';
import AdminEventos from './pages/AdminEventos';
import ReservaCanchasAdmin from './pages/ReservaCanchaAdmin';
import ActividadesAdmin from './pages/ActividadesAdmin';
import ComprobantePage from './pages/ComprobantePage';



function App() {
  return (
    <BrowserRouter>
      <Layout withBackground={true}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cuotas-admin" element={<CuotasAdminPage />} />
          <Route path="/eventos" element={<AdminEventos/>}  />
          <Route path="/canchas" element={<ReservaCanchasAdmin/>}  />
          <Route path="/actividades" element={<ActividadesAdmin />} />
          <Route path="/comprobante/:id" element={<ComprobantePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
