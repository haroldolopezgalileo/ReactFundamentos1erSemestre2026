// props = {
//     nombre: "Nombre 1",
//     clave: 21,
//     fecha: '2024-03-02'
//   }

export default function AlmacenWithPropsObj(props) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Clave</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.clave}</td>
          <td>{props.fecha}</td>
        </tr>
      </tbody>
    </table>
  )

}