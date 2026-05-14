export default function RenderizadoLista() {

  const listadoUsuarios = [
    {
      "id": "jsdlajfoa7890-3456kk-35",
      "nombre": "Usuario 1",
      "edad": 23,
      "perfil": "https://profile.com/usuario1"
    },
    {
      "id": "jsdlajfoa7890-3456kk-36",
      "nombre": "Usuario 2",
      "edad": 31,
      "perfil": "https://profile.com/usuario2"
    },
    {
      "id": "jsdlajfoa7890-3456kk-37",
      "nombre": "Usuario 3",
      "edad": 53,
      "perfil": "https://profile.com/usuario3"
    },
    {
      "id": "jsdlajfoa7890-3456kk-38",
      "nombre": "Usuario 4",
      "edad": 26,
      "perfil": "https://profile.com/usuario4"
    },
  ];

  return (

    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Perfil</th>
        </tr>
      </thead>
      <tbody>
        {listadoUsuarios.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.nombre}</td>
              <td>{value.edad}</td>
              <td>{value.perfil}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}