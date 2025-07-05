import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CuotasAdminPage from './pages/CuotasAdminPage';
import Layout from './components/Layout';
import AdminEventos from './pages/AdminEventos';
import Header from './components/Header';
import ReservaCanchasAdmin from './pages/ReservaCanchaAdmin';

function App() {
  return (
    <BrowserRouter>
      <Layout withBackground={true}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cuotas-admin" element={<CuotasAdminPage />} />
          <Route path="/eventos" element={<AdminEventos/>}  />
          <Route path="/canchas" element={<ReservaCanchasAdmin/>}  />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
