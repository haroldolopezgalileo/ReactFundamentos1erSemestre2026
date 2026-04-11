import './Navbar.css'

const estilos = {
  color: "white",
  backgroundColor: "yellow",
  padding: "15px",
  borderRadius: "5px"
}

class MiObjeto {

}

export default function Navbar() {
  return (
    <nav style={{ color: "blue", fontSize: "20px", backgroundColor: "lightblue", padding: "10px"}}>
      <ul style={estilos}>
        <li className="mi-componente"><a href="#">Home</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ubicaciones</a></li>
      </ul>
    </nav>
  )
}