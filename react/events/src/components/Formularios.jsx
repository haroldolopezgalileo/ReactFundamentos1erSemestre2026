

export default function Formulario() {

  let valorInput = "valor de input prueba";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valor Enviado: ", valorInput);
  }

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text"
        value={valorInput}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        onKeyDown={(e)=> console.log(e.key)}
      />
      <button type="submit">Enviar</button>
    </form>
  );

}