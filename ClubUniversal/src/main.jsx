import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Registrarse from '../src/pages/Registrarse.jsx'
import IniciarSesion from '../src/pages/IniciarSesion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <IniciarSesion />
    <Registrarse />
  </StrictMode>,
)
