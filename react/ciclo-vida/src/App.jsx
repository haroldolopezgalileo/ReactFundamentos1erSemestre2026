import { useState } from 'react'
import './App.css'
import NuevoComponente from './components/NuevoComponente'
import { ViejoComponente } from './components/ViejoComponente'

function App() {

  const [visible, setVisible] = useState(true);

  return (
    <>
     {/* <ViejoComponente titulo={"titulo de la app"}/> */}
     {visible && <NuevoComponente />}
     <button onClick={()=>setVisible(!visible)}>Apagar</button>
    </>
  )
}

export default App
