import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import IniciarSesion from './pages/IniciarSesion' // o la ruta correcta
import Registrarse from './pages/Registrarse'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  //Estado
  //Ciclo de vida: como interactua nuestro componente con el tiempo
  
  //JSX:
  return(
<Router>
    <div>
      <nav>
        <Link to="/login">Iniciar Sesión</Link> |{' '}
        <Link to="/registro">Registrarse</Link>
      </nav>
   
      <Routes>
        <Route path="/login" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/" element={<h2>Bienvenido al sitio</h2>}/>
          {/*<>
            <h1>Inicio</h1>
            <p>Bienvenido al sitio</p>
          </>}/>*/}
        
      </Routes>
        </div>
    </Router>
  )
}
export default App