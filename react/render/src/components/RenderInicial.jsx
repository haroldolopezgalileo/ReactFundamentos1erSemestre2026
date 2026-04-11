

export default function RenderInicial() {
  let valor = 10;

  if(valor > 5) {
    return (
      <div>
        <p>Validando la información...</p>
      </div>
    );
  }

  return (
    <>
      <p>Contenido cargado correctamente: {valor}</p>
    </>
  )
}