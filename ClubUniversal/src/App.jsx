import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import IniciarSesion from './pages/IniciarSesion' 
import Registrarse from './pages/Registrarse'
import TabsExample from './components/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  //Estado
  //Ciclo de vida: como interactua nuestro componente con el tiempo
  
  //JSX:
  return(
    
<BrowserRouter>
<TabsExample />
    <div>
      {/*<div>
        <Link to="/login" className='btn btn-outline-primary me-2'>Iniciar Sesión</Link> |{' '}
        <Link to="/registro" className='btn btn-outline-primary me-2'>Registrarse</Link>
      </div>*/}
   
      <Routes>
        <Route path="/login" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/" element={<h1>Bienvenido al sitio</h1>}/>
          {/*<>
            <h1>Inicio</h1>
            <p>Bienvenido al sitio</p>
          </>}/>*/}
        
      </Routes>
        </div>
    </BrowserRouter>
    
  )
}
export default App