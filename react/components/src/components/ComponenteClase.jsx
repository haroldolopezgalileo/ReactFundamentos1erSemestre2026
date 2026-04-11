import React from "react";


// Componente viejo, antiguo no se usa actualmente
export default class ComponenteClase extends React.Component {
  constructor() {
    super();
  }

  // Muestra el contenido del componente
  render() { // <React.Fragment> = <>
    return (
      <>
        <h1>Titulo del componente</h1>
        <div>
          <h2>Componente antiguo de clase!</h2>
        </div>
      </>
    );
  }
}