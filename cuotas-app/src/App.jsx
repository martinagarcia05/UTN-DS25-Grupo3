import Header from './components/Header';
import Layout from './components/Layout';
import CuotasTable from './components/CuotasTable';
import './styles/fondo.css';

function App() {
  return (
    <>
      <Header />
      <div className="background-main">
        <Layout>
          <CuotasTable />
        </Layout>
      </div>
    </>
  );
}

export default App;