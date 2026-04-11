
// const operacion = (n) => n + 1

import RenderInicial from "./components/RenderInicial"
import RenderizadoAND from "./components/RenderizadoAND";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoLista from "./components/RenderizadoListas";
import RenderizadoOR from "./components/RenderizadoOR";
import RenderSwitch from "./components/RenderSwitch";

function App() {
  return (
    <>
      <RenderInicial />
      <RenderizadoAND />
      <RenderizadoCondicional />
      <RenderizadoOR />
      <RenderSwitch />
      <RenderizadoLista />
    </>
  );
}

export default App
