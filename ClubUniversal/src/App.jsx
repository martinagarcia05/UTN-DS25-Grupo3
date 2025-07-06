import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import IniciarSesion from './pages/IniciarSesion' 
import Registrarse from './pages/Registrarse'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    
<BrowserRouter>

    <div>   
      <Routes>
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/" element={
          <IniciarSesion />
      }/>
        
      </Routes>
        </div>
    </BrowserRouter>
    
  )
}
export default App