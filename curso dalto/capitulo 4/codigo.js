//METODOS DE CADENAS.

let string = "cadena de prueba";
let string2 = " paleta de hielo";
let string3 = "    VAMOS A trabajar EN EPAM";
let number = 18;

// concat(). concatenar. junta 2 o mas strings.

resultado = string.concat(string2);
console.log(resultado);

//startsWith() revisa si el string comienza con tal palabra
resultado = string.startsWith("cadena");
console.log(resultado);

//endsWith() revisa si el string termina con tal palabra
resultado = string.endsWith("prueba");
console.log(resultado);

//includes() revisa si el string tiene cierta palabra o texto
resultado = string2.includes("hielo");
console.log(resultado);

//repeat() nos permite repetir el string el # de veces que le indiquemos.
resultado = string2.repeat(2);
console.log(resultado);

//indexOf() nos indica la posicion  en base al caracter asignado
resultado = string2.indexOf("hielo");
console.log(resultado);

//split() divide el string como le pidamos, y nos lo da en array.
resultado = string2.split(" ");
console.log(resultado[3]);

/*substring() nos imprime caracteres en base a los parametros de posicion, 
primero de donde inicia y el segundo numero de donde termina */
resultado = string2.substring(2, 7);
console.log(resultado);

// toLowerCase() convierte el string a minusculas.
resultado = string3.toLowerCase();
console.log(resultado);

// toUpperCase() convierte el string a mayusculas.
resultado = string3.toUpperCase();
console.log(resultado);

//toString() convierte un numero en string.
resultado = number.toString();
console.log(resultado);

//trim() nos elimina los espacios en blanco del string del inicio y del final
//trimStart() nos elimina los espacios en blanco del inicio del string
//trimEnd() nos elimina los espacios en blanco del final del string
resultado = string3.trim();
console.log(resultado);

// length() nos indica cuantos caracteres tiene nuestro string.
console.log(resultado.length);

// METODOS DE ARRAYS/ METODOS TRANSFORMADORES.

let arrayNombres = ["pedro", "maria", "jorge"];

// pop() elimina el ultimo elemento de un array y lo devuelve
let result = arrayNombres.pop();
console.log(result);
console.log(arrayNombres); // aqui aparece el array con el elemento "jorge" ya eliminado.

//shift() elimina el primer elemento de un array y lo devuelve
let resulta = arrayNombres.shift();
console.log(resulta);
console.log(arrayNombres); // como el en array solo quedaban 2 nombres ahora solo muestra 1

//push() agrega un elemento al array al final de la lista
arrayNombres.push("omar", "eduardo", "daniel");
console.log(arrayNombres);

// reverse() invierte el orden de los elementos de un array.
arrayNombres.reverse();
console.log(arrayNombres);

// unshift() agrega 1 o mas elementos al inicio del array y devuelve la nueva longitud del array
newArray = arrayNombres.unshift("lalo", "meño");
console.log(arrayNombres);
console.log(newArray);

/* sort() ordena los elementos de un array localmente y devuelve el array ordenado.
 se basa en el orden numerico 1,2,3 etc y en en texto en orden alfabetico*/
arrayNombres.sort();
console.log(arrayNombres);

/* splice()  sirve para eliminar elementos del array especificando donde empiezas y donde terminas
osea  cuantos elementos segun su posicion y/o puede agregar elementos
dentro del parentesis lo primero es desde donde emepezaras a trabajar, en que posicion del array
luego cuantos deseas eliminar y si no deseas eliminar se pone 0, luego los que deseas agregar
arrayNombres.splice(2,0,"nacho", "claguas") */

arrayNombres.splice(1, 3, "chimo", "beto", "bishu");
// aqui le indica que empieze en la posicion 1 y elimine 3 elementos y agrega 2 elementos en su lugar
console.log(arrayNombres);

//METODOS ACCESORES.
/* join() une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve,
lo convierte el array en un string, y se le puede agregar un separador declarado dentro del parentesis */
let resultadoJoin = arrayNombres.join(" / ");
console.log("elemento: " + resultadoJoin);

/*slice() crea un nuevo array tomando elementos de otro array, especificando cuales sin contar el ultimo
ejemplo abajo empieza en la posicion 1 y cuenta hasta la posicion 3 sin agregar el de la posicion 3,
para agregar todos los elementos despues de la posicion de inicio solo seria dejarlo vacio*/
let arraySlice = arrayNombres.slice(1, 3);
console.log(arraySlice);

//METODOS DE REPETICION.

/* filter() crea un nuevo array con todos los elementos que cumplan la condicion, es un loop,
se le declaran funciones para compluir con las condiciones*/
let array2 = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"];

let array3 = array2.filter((arra) => arra.length > 5);
console.log(array3);

/*forEach() - ejecuta la funcion indicada una vez por cada elemento del array */

array2.forEach((element) => console.log(element));

// map() retorna un nuevo array con accion de alguna funcion previa

let numeros = [10, 20, 45, 15, 5];
let numerosMap = numeros.map(multiplicar);
function multiplicar(num) {
  return num * 2;
}
console.log(numerosMap);
