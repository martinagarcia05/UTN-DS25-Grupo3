import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import IniciarSesion from './pages/IniciarSesion' 
import Registrarse from './pages/Registrarse'
import TabsExample from './components/navbar'
import Header from './components/HeaderIni'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    
<BrowserRouter>
<Header />
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