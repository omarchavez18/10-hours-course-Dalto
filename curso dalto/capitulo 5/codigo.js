// console.table([]) va forzozamente con un array, te crea una tabla con la info
console.table(["diego", "omar", "beto", "german", "nacho"]);

// console.count() nos indica cuantas veces se ejecuto en la funcion
console.time();
function sumar(n1, n2) {
  console.log(n1 + n2);
  console.timeLog();
  console.count();
}
sumar(2, 3);
sumar(3, 3);
sumar(5, 3);
sumar(29, 3);
sumar(2, 31);
sumar(21, 3);
sumar(2, 83);
sumar(23, 43);

console.timeEnd();
// console.group() crea un grupo al cual le podemos ingresar cosas
console.group("frutas");
console.log("pera");
console.log("manzana");
console.log("piña");

console.groupEnd(); // cierra el grupo

// console.time() arriba se implemento
console.time(); // incia un temporizador
console.timeLog(); // te dice cuanto tiempo va desde que se ejecuto la funcion
console.timeEnd(); // indica terminar con el temporizador
