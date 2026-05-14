import React from "react";


export class ViejoComponente extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      isVisible: false,

    }
    console.log("1. constructor()");
  }

  // Se llam justo antes de renderizar, se usa para ajustar el estado de las props si es necesario
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps");
    return null;
  }

  // Se llama después de que el componente se haya montado en el DOM
  componentDidMount() {
    console.log("4. componentDidMount()");
  }

  // Decide si el componente debe rederizarse o no ante un campo de props o estado
  // Puede utilizarse para optimizar el rendimiento
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. shouldComponentUpdate() - ", nextProps, nextState);
    return true; // si retorna false, se evita el renderizado
  }

  // Se ejecuta después de que el componente se actualiza
  // útil para operar con el DOM o hacer nuevas llamadas según cambio
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("7. componentDidUpdate()", prevProps, prevState, snapshot);
  }

  // Se llama justo antes de que el componente sea eliminado del DOM
  // Se usa para limpiar timers, cancelar suscripciones, etc.
  componentWillUnmount() {
    console.log("8. componentWillUnmont()");
  }

  aumentar = () => {
    this.setState((prevState) => ({contador: prevState.contador + 1}))
  }

  // Método obligatorio: devuelve los elementos JSX a renderizar
  render() {
    console.log("3. render()");
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    )
  }

}