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

// let password = prompt("cual es tu contraseña");

// if (password === "superguapo123") {
//   alert("acesso concedido");
// } else {
//   prompt("esa no es tu contraseña, vuelve a intentarlo");
// }

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

// FOOR IN.
// muestra la posicion en la que se encuntra los elementos.

let animales = ["gato", "perro", "oso"];
for (avion in animales) {
  console.log(avion);
}

// FOOR OF.
//te muestra el valor d los elementos.

for (avion of animales) {
  console.log(avion);
}
