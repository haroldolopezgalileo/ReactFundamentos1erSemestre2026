export default function AlmacenWithDesctructuring({name,clave,fecha}) {
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
          <td>{name}</td>
          <td>{clave}</td>
          <td>{fecha}</td>
        </tr>
      </tbody>
    </table>
  )
}