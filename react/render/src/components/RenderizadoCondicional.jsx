

export default function RenderizadoCondicional() {
  const isOpen = false;

  const Promo = () => (
    <div>
      <p>Esta es una alerta que se muestra cuando abre</p>
    </div>
  );

  const Content = () => (
    <div>
      <p>Este es el contenido del componente normal!</p>
    </div>
  );

  return (
    <>
      {/* Usando renderizado con un ternario */}
      {
        !isOpen ? <Promo/> : <Content/>
      }
    </>
  );
}