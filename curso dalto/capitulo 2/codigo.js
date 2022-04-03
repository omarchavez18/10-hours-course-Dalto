//arrays

array = ["omar", "chavez", "surf", 18, "mango"];
console.log(`el ${array[2]} es lo mejor o mi nombre no es ${array[0]}`);

//array asociativo.

let pc = {
  nombre: "omarPC",
  procesador: "ryzen 5",
  ram: "12 GB",
  memoria: "1TB",
};
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let memoria = pc["memoria"];

frase = `el nombre de mi pc es: ${nombre} <br>
el procesador es: ${procesador}<br>
la ram es de: ${ram}<br>
la memoria es de: ${memoria}`;

console.log(ram);

//

//for loop

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`el numero ${i} es par`);
  } else {
    console.log(`el numero ${i} es impar`);
  }
}

//while loop
let index = 1;
while (index <= 10) {
  if (index % 2 === 0) {
    console.log(`el numero ${index} es par`);
  } else {
    console.log(`el numero ${index} es impar`);
  }
  index++;
}

// do while.

let ind = 1;
do {
  if (ind % 2 === 0) {
    console.log(`el numero ${ind} es par`);
  } else {
    console.log(`el numero ${ind} es impar`);
  }
  ind++;
} while (ind <= 10);

//foor loop with continue.

for (let index = 1; index <= 6; index++) {
  if (index == 4) {
    // continue le indica que si index = 4, la brinque, no la considere y continue ejecutando lo siguiente.
    continue;
  }
  console.log(index);
}

// FOR IN.
// muestra la posicion en la que se encuntra los elementos.

let animales = ["gato", "perro", "oso"];
for (avion in animales) {
  console.log(avion);
}

// FOR OF.
//te muestra el valor de los elementos.

for (avion of animales) {
  console.log(avion);
}

// while loop

// let password = prompt("cual es tu contraseña?");
// while (password !== "chelsea") {
//   password = prompt("esa no es tu contraseña, vuelve a intentarlo");
// }

// function/parametros.
//lo que se encuentra dentro de los () son los parametros.
function sumar(num1, num2) {
  console.log(num1 + num2);
}
sumar(5, 8); // el 5 y el 8 son argumentos
sumar(5, 100);
sumar(47, 100);
sumar(100, 100);

// function/ restar
function restar(num3, num4) {
  console.log(num3 - num4);
}
//aqui defines las variables dentro de los parametros.
restar(175, 25);
restar(100, 75);

// function/ Return.

function saludar() {
  console.log("hello my friend");
  return "whats up";
}
let saludo = saludar();
console.log(saludo);

//arrow function

//function normal
function saludar(nam) {
  let saludo = `hola ${nam} como estas hoy?`;
  console.log(saludo);
}
saludar("beto");
saludar("omar");

//arrow function
//se quita la palabra function por un =>
saludar = (nam) => {
  let saludo = `hola ${nam} como estas hoy?`;
  console.log(saludo);
};
saludar("beto");
saludar("omar");

// Arrow function example.
hunting = (animal, animal2) => {
  let hunter = `the species that I want to hunt are ${animal} and ${animal2} `;
  console.log(hunter);
};
hunting("deers", "moose");
hunting("turkeys", "goose");
