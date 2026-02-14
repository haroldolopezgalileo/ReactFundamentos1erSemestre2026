// Función declarativa
// Puede ser llamada antes o después de su definición debido al hoisting
function mostrarMensaje(nombre) {
  return `Bienvenido ${nombre}`;
}
mostrarMensaje("Nombre");



// Expresión de función
// Se asigna una función a una constante, no se eleva como las declarativas
const solicitarCredito = function(nombre) {
  return "El crédito fue hecho por " + nombre;
}
solicitarCredito("Nombre");


// Arrow function
// Sintaxis corta para definir funciones
const generarCredito = () => {
  console.log("Generando crédito!");
}


// Uso del operador spread en arreglos
// Permite combinar varios arreglos en uno nuevo
const colores = ["rojo","verde","amarillo"];
const nuevoColores = ["negro"];

const inventario = [...colores, ...nuevoColores, "blanco"];

console.log("El inventario es: ", inventario);



// Objeto literal con propiedades anidadas
const persona = {
  nombreP: "Pedro",
  edad: 20,
  ciudad: "Guatemala",
  nacionalidad: "guatelmalteca",
  vivienda: {
    lat:30,
    lng:40
  }
}


// Desestructuración de objeto
// Extrae propiedades del objeto en variables independientes
const {nombreP, nacionalidad, edad} = persona;

console.log("El nombre es: ", nombreP);
console.log("Nacionalidad: ", nacionalidad);


// Desestructuración en parámetros de función
// Extrae propiedades directamente desde el objeto recibido
function mostrarInfo({nombreP, nacionalidad, ...atributos}) {
  console.log("El nombre en funcion es: ", nombreP);
  console.log("Nacionalidad en funcion es: ", nacionalidad);
  console.log(atributos.vivienda);
}

mostrarInfo(persona)


// Arreglo con valores mixtos
// Contiene un número y una función
const notas = [20,() => "20"];

// Desestructuración de arreglo
// Se asignan los valores a variables separadas
const [value,getValue] = notas;

console.log(value, getValue());


// Arrow function con retorno implícito
// Devuelve una cadena construida con el nombre recibido
const mostrarMensaje = (nombre) => (
  "Bienvenido"+
  +"esta es mi aplicación creada por"+
  ""+nombre
);

console.log(mostrarMensaje("Haroldo"));




// Métodos de arreglos
// Se crea un arreglo base
const numeros = [1,2,3,4,5];

const resultado = [];

// Ejemplo comentado de bucle tradicional
// for(numero of numeros){
//   resultado.push(numero*2);
// }

console.log(resultado);


// Uso de map con retorno implícito
// Crea un nuevo arreglo multiplicando cada valor
const resultadoMap = numeros.map((n)=> (
  n*2
));


// Uso de map con retorno explícito
// Hace lo mismo pero con bloque de código
const resultadoMapRet = numeros.map((n)=>{ 
  return n*2;
});


// Uso de forEach
// Recorre el arreglo y llena otro manualmente
numeros.forEach((n)=>{
  resultado.push(n*2);
});

console.log(resultado);