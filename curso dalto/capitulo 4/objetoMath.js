// OBJETO MATH BASICOS.

//METODOS. todos los metodos matematicos inician con Math. y lo que deseas ejecutar.
// calcular la raiz cuadrada seria con el metodo Math.sqrt()
let numero = Math.sqrt(25);
console.log(numero);

/*Math.cbrt() seria la raiz cubica*/
numero = Math.cbrt(27);
console.log(numero);

// max() te regresa el numero mayor de los que tengas disponibles.
let numbers = Math.max(3, 5, 8, 2, 87, 342, 18, 1);
console.log(numbers);

// min() te regresa el numero menor de los que tengas disponibles.
numbers = Math.min(5, 4, 78, 154, 98, 2, 45, 1);
console.log(numbers);

// random() devuelve un numero aleatorio entre 0 y 1
numbers = Math.random() * 100;
console.log(numbers);

//round() convierte el numero a entero mas cercano
numbers = Math.round(numbers);
console.log(numbers);

//trunc() elimina los decimales y solo deja numeros enteros.
numbers = Math.trunc(9.98);
console.log(numbers);

//trunc() elimina los decimales y solo deja numeros enteros.
numbers = Math.PI;
console.log(numbers);
