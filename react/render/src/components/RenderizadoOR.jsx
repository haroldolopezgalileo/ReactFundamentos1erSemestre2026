export default function RenderizadoOR() {
  
  const message = "";
  
  return (
    <>
      <p>Con OR:</p>{message || <p>Mensaje puede ser false,0, -0, 0n, "", null, undefined,NaN,etc.</p>}
      <br />
      <p>Con ??:</p>'{message ?? <p>El mensaje solo puede ser null o undefined.</p>}'
    </>
  );
}