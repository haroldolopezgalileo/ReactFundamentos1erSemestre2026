export default function RenderSwitch() {

  function renderStep(step) {
    switch(step) {
      case 1:
        return <p>Paso 1</p>;
      case 2:
        return <p>Paso 2</p>;
      case 3:
        return <p>Paso 3</p>;
      default:
        return <p>No encontrado</p>;
    }
  }

  const steps = {
    1: <p>Paso 1</p>,
    2: <p>Paso 2</p>,
    3: <p>Paso 3</p>,
  }

  return (
    <>
      {renderStep(3)}
      {steps[2] ?? <p>No encontrado</p>}
    </>
  );
}