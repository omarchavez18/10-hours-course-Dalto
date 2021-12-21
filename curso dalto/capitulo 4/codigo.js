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
resultado = string2.repeat(3);
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

// METODOS DE ARRAYS.
