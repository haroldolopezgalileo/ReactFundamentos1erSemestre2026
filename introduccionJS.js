// ======================================================
// FUNCIONES EN JAVASCRIPT
// ======================================================

// Función declarativa
// Esta función puede invocarse antes o después de su definición
// debido al comportamiento de elevación conocido como hoisting.
function mostrarMensajeDeclarativo(nombrePersona) {
  return `Bienvenido ${nombrePersona}`;
}

console.log(mostrarMensajeDeclarativo("Nombre"));


// Expresión de función
// En este caso, la función se asigna a una constante.
// A diferencia de la función declarativa, no puede utilizarse
// antes de su definición.
const solicitarCreditoExpresion = function (nombreSolicitante) {
  return "El crédito fue hecho por " + nombreSolicitante;
};

console.log(solicitarCreditoExpresion("Nombre"));


// Arrow function
// Esta es una forma más breve de declarar funciones en JavaScript.
const generarCreditoArrow = () => {
  console.log("Generando crédito");
};

generarCreditoArrow();


// ======================================================
// OPERADOR SPREAD EN ARREGLOS
// ======================================================

// El operador spread permite copiar y combinar arreglos
// de forma sencilla y expresiva.
const coloresBase = ["rojo", "verde", "amarillo"];
const coloresAdicionales = ["negro"];

const inventarioColores = [...coloresBase, ...coloresAdicionales, "blanco"];

console.log("El inventario es:", inventarioColores);


// ======================================================
// OBJETOS LITERALES Y DESESTRUCTURACIÓN
// ======================================================

// Se define un objeto con propiedades simples y anidadas.
const personaEjemplo = {
  nombre: "Pedro",
  edad: 20,
  ciudad: "Guatemala",
  nacionalidad: "guatemalteca",
  vivienda: {
    latitud: 30,
    longitud: 40
  }
};


// Desestructuración de objeto
// Permite extraer propiedades del objeto y asignarlas
// a variables independientes.
const {
  nombre: nombrePersonaObjeto,
  nacionalidad: nacionalidadPersonaObjeto,
  edad: edadPersonaObjeto,
  vivienda: viviendaPersonaObjeto
} = personaEjemplo;

console.log("El nombre es:", nombrePersonaObjeto);
console.log("La nacionalidad es:", nacionalidadPersonaObjeto);
console.log("La edad es:", edadPersonaObjeto);
console.log("La vivienda es:", viviendaPersonaObjeto);


// Desestructuración en parámetros
// La función extrae propiedades directamente desde el objeto recibido.
function mostrarInformacionPersona({
  nombre,
  nacionalidad,
  ...atributosRestantes
}) {
  console.log("El nombre recibido en la función es:", nombre);
  console.log("La nacionalidad recibida en la función es:", nacionalidad);
  console.log("Los atributos restantes son:", atributosRestantes);
  console.log("La vivienda es:", atributosRestantes.vivienda);
}

mostrarInformacionPersona(personaEjemplo);


// ======================================================
// DESESTRUCTURACIÓN DE ARREGLOS
// ======================================================

// Se define un arreglo que contiene un número y una función.
const notasMixtas = [20, () => "20"];

// La desestructuración permite asignar cada valor del arreglo
// a variables separadas.
const [valorNota, obtenerValorNota] = notasMixtas;

console.log(valorNota, obtenerValorNota());


// Arrow function con retorno implícito
// Cuando la función posee una sola expresión, esta puede
// devolverse sin utilizar la palabra return.
const mostrarMensajeArrow = (nombreAutor) =>
  "Bienvenido, esta es mi aplicación creada por " + nombreAutor;

console.log(mostrarMensajeArrow("Haroldo"));


// ======================================================
// MÉTODOS DE ARREGLOS
// ======================================================

console.log("Arreglos en JavaScript");

const numerosBase = [1, 2, 3, 4, 5];
const resultadoForTradicional = [];

// Bucle tradicional
// Este enfoque recorre cada elemento del arreglo y construye
// manualmente uno nuevo.
for (const numeroActual of numerosBase) {
  resultadoForTradicional.push(numeroActual * 2);
}

console.log("Resultado con for tradicional:", resultadoForTradicional);


// Método map con retorno implícito
// Genera un nuevo arreglo transformando cada elemento.
const resultadoConMap = numerosBase.map((numeroMap) => numeroMap * 2);
console.log("Resultado con map:", resultadoConMap);


// Método map con retorno explícito
const resultadoConMapExplicito = numerosBase.map((numeroMapExplicito) => {
  return numeroMapExplicito * 2;
});

console.log("Resultado con map explícito:", resultadoConMapExplicito);


// Método forEach
// Recorre los elementos del arreglo, pero no retorna uno nuevo.
// Generalmente se usa para ejecutar efectos secundarios.
const resultadoConForEach = [];
numerosBase.forEach((numeroForEach) => {
  resultadoConForEach.push(numeroForEach * 2);
});

console.log("Resultado con forEach:", resultadoConForEach);


// Método filter
// Permite construir un nuevo arreglo con los elementos
// que cumplan una condición.
const notasNumericas = [29, 40, 60, 100];
const valoresFiltrados = notasNumericas.filter((notaActual) => notaActual < 60);

console.log("Valores filtrados:", valoresFiltrados);


// Equivalente imperativo de filter usando forEach
const notasFiltradasManual = [];
notasNumericas.forEach((notaManual) => {
  if (notaManual < 60) {
    notasFiltradasManual.push(notaManual);
  }
});

console.log("Valores filtrados manualmente:", notasFiltradasManual);


// Método reduce
// Reduce todos los elementos del arreglo a un solo valor.
const sumaNotas = notasNumericas.reduce((acumulador, notaReduce) => {
  return acumulador + notaReduce;
}, 0);

console.log("Suma total:", sumaNotas);


// Ejemplo de reduce con cadenas
const palabrasFrase = ["hola", "mundo", "javascript"];
const fraseFinal = palabrasFrase.reduce((acumuladorTexto, palabraActual) => {
  return acumuladorTexto + " " + palabraActual;
});

console.log("Frase construida:", fraseFinal.trim());


// ======================================================
// PROGRAMACIÓN ORIENTADA A OBJETOS
// ======================================================

// JavaScript permite trabajar con clases para modelar objetos.
class PersonaClase {
  constructor(nombreParametro, dpiParametro, edadParametro) {
    console.log("El constructor de PersonaClase fue llamado");
    this.nombre = nombreParametro;
    this.dpi = dpiParametro;
    this.edad = edadParametro;
  }

  darNombre() {
    return this.nombre;
  }

  saludar() {
    return "Hola, le saluda " + this.nombre;
  }
}

const colaboradorInterno = new PersonaClase("Haroldo", "399848484748", 32);
console.log("El nombre del colaborador es:", colaboradorInterno.nombre);
console.log(colaboradorInterno.saludar());

const colaboradorInternoDos = new PersonaClase("Otro", "8474789487404", 30);
console.log("El nombre del segundo colaborador es:", colaboradorInternoDos.nombre);
console.log(colaboradorInternoDos.saludar());


// Objetos literales
// También es posible representar entidades mediante objetos literales.
const colaboradorExternoUno = {
  nombre: "Colaborador",
  dpi: "8474739894",
  edad: 20,
  darNombre() {
    return this.nombre;
  },
  saludar() {
    return "Hola, le saluda " + this.nombre;
  }
};

const colaboradorExternoDos = {
  nombre: "Colaborador 2",
  dpi: "5844749894",
  edad: 22,
  darNombre() {
    return this.nombre;
  },
  saludar() {
    return "Hola, le saluda " + this.nombre;
  }
};

console.log(colaboradorExternoUno.darNombre());
console.log(colaboradorExternoDos.saludar());


// ======================================================
// HERENCIA
// ======================================================

// La herencia permite que una clase hija reutilice
// propiedades y métodos de una clase padre.
class Animal {
  constructor(nombreAnimal) {
    this.nombre = nombreAnimal;
  }

  respirar() {
    console.log("El animal está respirando");
  }

  comer() {
    console.log("El animal se está alimentando");
  }

  hacerSonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombrePerro, razaPerro) {
    super(nombrePerro);
    this.raza = razaPerro;
  }

  traerPalo() {
    console.log("El perro trae el palo");
  }

  hacerSonido() {
    console.log("El perro está ladrando");
  }
}

const aveEjemplo = new Animal("Pajarito");
aveEjemplo.comer();
aveEjemplo.hacerSonido();

const perroEjemplo = new Perro("Perrito", "Pastor Belga");
perroEjemplo.respirar();
perroEjemplo.hacerSonido();
perroEjemplo.traerPalo();

console.log("El nombre del perro es:", perroEjemplo.nombre);
console.log("La raza del perro es:", perroEjemplo.raza);


// ======================================================
// TEMPLATE LITERALS
// ======================================================

// Los template literals permiten crear cadenas multilínea
// e interpolar valores de manera clara.
const contenidoTemplate = `Bienvenido:
1. Hola
2. Mundo
3. Nombre del animal: ${aveEjemplo.nombre}
`;

console.log(contenidoTemplate);


// ======================================================
// MÓDULOS
// ======================================================

// CommonJS utiliza require y module.exports.
// Este sistema es frecuente en entornos Node.js tradicionales.

// const moduloMatematicaCJS = require("./math.cjs");
// console.log("La suma es:", moduloMatematicaCJS.b);


// ECMAScript Modules utiliza import y export.
// Es el sistema moderno de módulos en JavaScript.

// import funcionPrincipal, { valorExportado } from "./mathESM.mjs";
// console.log(valorExportado);


// ======================================================
// OPTIONAL CHAINING
// ======================================================

// Optional chaining permite acceder a propiedades profundas
// sin provocar errores cuando un valor intermedio es null o undefined.
const usuarioNulo = null;

// Ejemplo inseguro:
// console.log(usuarioNulo.nombre);

// Ejemplo seguro:
// console.log(usuarioNulo?.nombre);


// Antes de optional chaining, se solían encadenar validaciones manuales.
const ciudadManual =
  usuarioNulo &&
  usuarioNulo.direccion &&
  usuarioNulo.direccion.ciudad;

console.log("Ciudad con validación manual:", ciudadManual);


// Con optional chaining
const ciudadConOptionalChaining = usuarioNulo?.direccion?.ciudad;
console.log("Ciudad con optional chaining:", ciudadConOptionalChaining);


// Evaluación lógica con operador AND
const textoEvaluado = (1 == 1) && (0 == 0) && "texto3";
console.log("Resultado lógico:", textoEvaluado);


// Optional chaining con arreglos
const listaNula = null;

if (listaNula?.[0]) {
  console.log("Primer valor encontrado");
} else {
  console.log("No existen registros");
}


// Optional chaining con funciones
const usuarioSinMetodo = {};

console.log(usuarioSinMetodo.saludar?.());


// ======================================================
// NULLISH COALESCING
// ======================================================

// El operador || considera falsy valores como 0, "", false, null o undefined.
const edadValorCero = 0;
const valorEdadConOr = edadValorCero || 18;
console.log("Valor con operador OR:", valorEdadConOr);


// El operador ?? solo reemplaza cuando el valor es null o undefined.
const edadValorCeroNullish = 0;
const valorEdadConNullish = edadValorCeroNullish ?? 18;
console.log("Valor con nullish coalescing:", valorEdadConNullish);


const respuestaNula = null;
const nombreUsuarioFinal = respuestaNula?.user?.name ?? "Usuario anónimo";
console.log(nombreUsuarioFinal);


// ======================================================
// PROGRAMACIÓN FUNCIONAL
// ======================================================

// Función pura
// Una función pura produce siempre el mismo resultado
// para los mismos argumentos y no altera estados externos.
function sumarValores(numeroA, numeroB) {
  return numeroA + numeroB;
}

console.log("Resultado de función pura:", sumarValores(2, 3));


// Inmutabilidad
// La programación funcional favorece no modificar directamente
// las estructuras de datos existentes.
const numerosOriginalesMutables = [1, 2, 3];

// Ejemplo mutable
numerosOriginalesMutables.push(4);
console.log("Arreglo mutable:", numerosOriginalesMutables);


// Ejemplo inmutable
const numerosOriginalesInmutables = [1, 2, 3];
const numerosExtendidosInmutables = [...numerosOriginalesInmutables, 4];

console.log("Arreglo original inmutable:", numerosOriginalesInmutables);
console.log("Nuevo arreglo inmutable:", numerosExtendidosInmutables);


// Funciones como ciudadanos de primera clase
// Una función puede almacenarse en una variable, pasarse como argumento
// y retornarse desde otra función.
const funcionSaludoPrimeraClase = () => "Hola desde función";

function ejecutarFuncionRecibida(funcionParametro) {
  return funcionParametro();
}

console.log(ejecutarFuncionRecibida(funcionSaludoPrimeraClase));


// Funciones de orden superior
// Son aquellas que reciben funciones o retornan funciones.
const numerosHOF = [1, 2, 3, 4, 5];
const numerosDoblesHOF = numerosHOF.map((numeroHOF) => numeroHOF * 2);

console.log("Lista original:", numerosHOF);
console.log("Lista transformada:", numerosDoblesHOF);


// Composición de funciones
// Permite encadenar varias transformaciones pequeñas.
const resultadoPipeline = numerosHOF
  .filter((numeroPipeline) => numeroPipeline % 2 === 0)
  .map((numeroFiltrado) => numeroFiltrado * 3)
  .reduce((acumuladorPipeline, numeroReducido) => acumuladorPipeline + numeroReducido, 0);

console.log("Resultado del pipeline:", resultadoPipeline);


// Evitar efectos secundarios
// En lugar de modificar el objeto original, se crea uno nuevo.
function prepararUsuarioActivo(usuarioEntrada) {
  return { ...usuarioEntrada, activo: true };
}

const usuarioAplicacionOriginal = { nombre: "user1" };
const usuarioAplicacionPreparado = prepararUsuarioActivo(usuarioAplicacionOriginal);

console.log("Usuario original:", usuarioAplicacionOriginal);
console.log("Usuario nuevo:", usuarioAplicacionPreparado);


// ======================================================
// PROGRAMACIÓN DECLARATIVA E IMPERATIVA
// ======================================================

const listaNombresBase = ["nombre 1", "nombre 2"];

// En programación declarativa se expresa qué se desea obtener.
const nombresEtiquetadosDeclarativo = listaNombresBase.map(
  (nombreLista) => nombreLista + " tag"
);

console.log("Resultado declarativo:", nombresEtiquetadosDeclarativo);


// En programación imperativa se describe paso a paso cómo lograrlo.
const nombresEtiquetadosImperativo = [];

for (let indiceNombre = 0; indiceNombre < listaNombresBase.length; indiceNombre++) {
  nombresEtiquetadosImperativo.push(listaNombresBase[indiceNombre] + " tag");
}

console.log("Resultado imperativo:", nombresEtiquetadosImperativo);