import { useEffect, useState } from "react";


export default function NuevoComponente() {

  // similar al constructor() en componente viejo de clase
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);

  const aumentar = () => {
    setContador((prev) => {
      return prev + 1
    });
    console.log(contador);
  }

  useEffect(()=>{
    console.log("2. ComponentDidMount() - Solo se ejecuta una vez al montar");
    return () => {
      console.log("5. componentWillUnmount() - Se ejecuta al desmontar");
    }
  },[]);

  // Equivalente a componentDidUpdate() para 'contador'
  useEffect(()=>{
    if(contador !== 0){
      console.log("3. componentDidUpdate() - contador ha cambiado");
      console.log(contador);
    }
  },[contador, visible]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}