import AlmacenWithDesctructuring from "./components/AlmacenWithDesctructuring";
import AlmacenWithPropsObj from "./components/AlmacenWithPropsObj"

function App(parametrosRecibidos) {

  const nombreApp = "Nombre app";
  const claveApp = 58;
  const fechaApp = '2026-02-12';

  return (
    <>
      <h2>Props usando el objeto</h2>
      <AlmacenWithPropsObj nombre={nombreApp} clave={claveApp} fecha={fechaApp} />

      <h2>Props usando destructuración</h2>
      <AlmacenWithDesctructuring nombre={nombreApp} clave={claveApp} fecha={fechaApp} />

      <h2>Props usando destructuración en el componente para reducir el envío de props</h2>
      <AlmacenWithDesctructuring {...parametrosRecibidos}/>
      <AlmacenWithPropsObj {...parametrosRecibidos}/>
    </>
  )
}

export default App
