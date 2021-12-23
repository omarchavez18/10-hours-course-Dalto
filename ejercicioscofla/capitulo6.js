// // agregar a la calculadora funciones como calcular potencias, raices cuadradas, y cubicas.

// //EJERCICIO 3
// //crear calculadora. con funciones
// class Calculadora {
//   constructor() {}
//   sumar(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
//   }
//   restar(num1, num2) {
//     return parseInt(num1) - parseInt(num2);
//   }
//   multiplicar(num1, num2) {
//     return parseInt(num1) * parseInt(num2);
//   }
//   dividir(num1, num2) {
//     return parseInt(num1) / parseInt(num2);
//   }
//   potenciar(num, exp) {
//     let numero = num;
//     for (let i = 1; i < exp; i++) {
//       numero = numero * num;
//     }
//     return numero;
//   }
//   raizCuadrada(num) {
//     return Math.sqrt(num);
//   }
//   raizCubica(num) {
//     return Math.cbrt(num);
//   }
// }
// const calculadora = new Calculadora();

// alert("que operacion deseas realizar?");
// let operacion = prompt(
//   "1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: potenciar, 6: raiz cuadrada, 7: raiz cubica"
// );
// if (operacion == 1) {
//   let numero1 = prompt("primer numero para sumar");
//   let numero2 = prompt("segundo numero para sumar");
//   resultado = calculadora.sumar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 2) {
//   let numero1 = prompt("primer numero para restar");
//   let numero2 = prompt("segundo numero para restar");
//   resultado = calculadora.restar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 3) {
//   let numero1 = prompt("primer numero para multiplicar");
//   let numero2 = prompt("segundo numero para multiplicar");
//   resultado = calculadora.multiplicar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 4) {
//   let numero1 = prompt("primer numero para dividir");
//   let numero2 = prompt("segundo numero para dividir");
//   resultado = calculadora.dividir(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 5) {
//   let numero1 = prompt("numero a potenciar");
//   let numero2 = prompt("exponente");
//   resultado = calculadora.potenciar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 6) {
//   let numero1 = prompt("numero al cual sacar raiz cuadrada");
//   resultado = calculadora.raizCuadrada(numero1);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 7) {
//   let numero1 = prompt("numero al cual sacar raiz cubica");
//   resultado = calculadora.raizCubica(numero1);
//   alert(`tu resultado es ${resultado}`);
// } else {
//   alert("no se encuentra esa funcion");
// }

// EJERCICIO 6 B
/* la facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor
y todos los alumnos que se anotaron en dichas clases, pero se necesita ver esto mas ordenadamente.
CREAR SOLUCIONES.

crear una funcion que al pasarle como parametro la materia nos devuelva:
profesor asignado
el nombre de todos los alumnos.*/
//funcion que nos diga en cuantas clases esta cofla.
//nombrar las clases en las que esta y los profesores de cada una

const obtenerInformacion = (nombreMateria) => {
  arraymaterias = {
    fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
  };
  if (arraymaterias[nombreMateria] !== undefined) {
    return [arraymaterias[nombreMateria], nombreMateria, arraymaterias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (nombreMateria) => {
  let informacion = obtenerInformacion(nombreMateria);

  if (informacion !== false) {
    let profesor = obtenerInformacion(nombreMateria)[0][0];
    let alumnos = obtenerInformacion(nombreMateria)[0];
    alumnos.shift();
    console.log(
      `el profesor de  ${informacion[1]}: es ${profesor} y los alumnos son : ${alumnos}`
    );
  }
};

const cantidadDeClases = (alumno) => {
  let informacion = obtenerInformacion();
  let cantidadTotal = 0;
  for (info in obtenerInformacion) {
    if (obtenerInformacion[info].includes(alumno)) {
    }
  }
  return cantidadTotal;
};

obtenerInformacion("programacion");
obtenerInformacion("fisica");
obtenerInformacion("logica");
obtenerInformacion("quimica");

console.log(cantidadDeClases("cofla"));

//no funciona
