import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const parametrosRecibidos = {
    name: "Nombre 3",
    clave: 60,
    fecha: '2026-03-12'
  }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App {...parametrosRecibidos}/>
  </StrictMode>,
)
