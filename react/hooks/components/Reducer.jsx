import { useReducer } from "react"


// Este es el estado inicial
const initialState = {
  count: 0,
  history: []
}

// Función que se ejecuta cuando se llama a la función dispatch
// esto se hace de forma interna automáticamente
function reducer(state, action) { // state={count:2,history:['Incremento 1','Incremento 2', 'Decremento a 1']} action = {type: 'decrement'}
  switch(action.type){
    case 'increment':
      return {
        count: state.count + 1, // 2
        history: [...state.history, 'Incrementó a '+(state.count + 1)]
      };
    case 'decrement':
      return {
        count: state.count - 1, // 1
        history: [...state.history, 'Decrementó a '+(state.count - 1)]
      };
    case 'reset':
      return {
        count: 0,
        history: [...state.history, 'Se reinició el contador']
      };
    default:
      return state;
  }
}

export default function Reducer() {

  const [state, dispatch] = useReducer(reducer, initialState);
  // state = {count:1,history:['Incrementó a 1','Incrementó a 2','Decremento a 1']}

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <button onClick={() => dispatch({type: 'increment'})}>Incrementar</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrementar</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reiniciar</button>

      <h3>Historial:</h3>
      <ul>
        {state.history.map((h, index)=>(
          <li key={index}>{h}</li>
        ))}
      </ul>
    </div>
  )
}