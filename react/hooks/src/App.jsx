import { useState } from 'react'
import Reducer from '../components/Reducer'
import './App.css'
import Memo from '../components/Memo';
import Callback from '../components/Callback';
import { LanguageProvider } from './context/LanguageContext';
import Greeting from '../components/ContextExample/Greeting';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Reducer />

      <h2>Ejemplo de useMemo</h2>
      <button onClick={()=>setCount(count+1)}>Aumentar</button>
      <Memo count={count} />

      <h2>Callback</h2>
      <Callback />

      

      <LanguageProvider>
        <div>
          <h1>Mi aplicacion multilenguaje</h1>
          <Greeting />
        </div>
      </LanguageProvider>

    </>
  )
}

export default App
