const Eventos = () => {

  const handleClick = () => {
    console.log("El usuario dio click!");
  }

  const handleHover = (isHover) => {
    console.log("Es Hover? ", isHover);
  }

  return (
    <div>
      <h2>Eventos en React</h2>
      <button onClick={handleClick}>Haz click</button>

      <div
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        style={{
          padding: "1rem",
          marginTop: "1rem",
          background: "#4ade80",
          borderRadius: 8
        }}
      >
        PRobar evento de hover
      </div>

      <input 
        placeholder="Prueba focus / blur"
        onFocus={() => console.log("Input enfocado")}
        onBlur={() => console.log("Input perdió el foco")}
        style={{ marginTop: "1rem"}}
      />
    </div>
  )
}

export default Eventos;