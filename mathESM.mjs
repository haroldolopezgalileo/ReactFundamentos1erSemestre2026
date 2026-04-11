export const PI = 3.1416;
export function area(r) { return PI * r * r; }

const x = 10;

function test(){
  console.log("Función de test!");
}

export { x, test }

const secret = 123;

export { secret as token };

// export default const valor = "set elemento";

// export default "set selemento";
// export default 42;
// export default { name: "Usuario" };

// export default () => "función flecha";

// export default secret;

export default "valor t"
