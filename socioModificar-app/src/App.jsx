import Header from './components/Header';
import Layout from './components/Layout';
import SocioEditForm from './components/SocioEditForm';
import './styles/fondo.css';

function App() {
  return (
    <>
      <Header />
      <div className="background-main">
        <Layout>
          <SocioEditForm />
        </Layout>
      </div>
    </>
    
  );
}

export default App;