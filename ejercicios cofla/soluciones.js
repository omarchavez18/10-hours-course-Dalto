// // ejercicio 1.
// /* cofla y sus amigos quieren comprar el helado mas caro que puedan con la plata que tienen, veamos como podemos ayudarlos
// roberto tiene $1.5 USD,
//  pedro tiene $1.7 USD,
//   y cofla tiene $3 USD

// Los precios de los helados son los siguientes:
// palito helado de agua :$0.6 USD
// palito helado de crema: $1 USD
// bombon helado marca heladix: $1.6 USD
// bombon helado marca heladovich: $1.7 USD
// bombon helado marca helardo: $1.8 USD
// potecito de helado con confites: $2.9 USD
// pote de 1/4 KG -> $2.9 USD.

// CREAR SOLUCIONES:
// -Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar.
// - si hay 2 o mas con el mismo precio, mostrar ambos.
// -indicar el vuelto.

// */ // aqui se les pregunta el dinero que tienen y cual helado les alcanza, tambien cuanto es el cambio.
// dineroCofla = prompt("cuanto dinero tienes Cofla?");
// dineroCofla = parseInt(dineroCofla); // parseInt convierte el string a numero
// dineroRoberto = prompt("cuanto dinero tienes Roberto?");
// dineroRoberto = parseInt(dineroRoberto);
// dineroPedro = prompt("cuanto dinero tienes Pedro?");
// dineroPedro = parseInt(dineroPedro);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//   console.log("cofla comprate el helado de agua");
//   console.log("y te sobran " + (dineroCofla - 0.6));
// } else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//   console.log("cofla comprate el helado de crema");
//   console.log("y te sobran " + (dineroCofla - 1));
// } else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
//   console.log("cofla comprate el helado de bombon heladix");
//   console.log("y te sobran " + (dineroCofla - 1.6));
// } else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
//   console.log("cofla comprate el helado de bombon heladovich");
//   console.log("y te sobran " + (dineroCofla - 1.7));
// } else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//   console.log("cofla comprate el helado de bombon helardo");
//   console.log("y te sobran " + (dineroCofla - 1.8));
// } else if (dineroCofla >= 2.9) {
//   console.log("cofla comprate el helado con confites o un pote de 1/4 de kg");
//   console.log("y te sobran " + (dineroCofla - 2.9));
// } else {
//   console.log(" cofla mejor robate uno no te alcanza nada ");
// }

// //
// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//   console.log("roberto comprate el helado de agua");
//   console.log("y te sobran " + (dineroRoberto - 0.6));
// } else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//   console.log("roberto comprate el helado de crema");
//   console.log("y te sobran " + (dineroRoberto - 1));
// } else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//   console.log("roberto comprate el helado de bombon heladix");
//   console.log("y te sobran " + (dineroRoberto - 1.6));
// } else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
//   console.log("roberto comprate el helado de bombon heladovich");
//   console.log("y te sobran " + (dineroRoberto - 1.7));
// } else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
//   console.log("roberto comprate el helado de bombon helardo");
//   console.log("y te sobran " + (dineroRoberto - 1.8));
// } else if (dineroRoberto >= 2.9) {
//   console.log("roberto comprate el helado con confites o un pote de 1/4 de kg");
//   console.log("y te sobran " + (dineroRoberto - 2.9));
// } else {
//   console.log(" roberto no te alcanza nada jodido");
// }

// //
// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//   console.log("pedro comprate el helado de agua");
//   console.log("y te sobran " + (dineroPedro - 0.6));
// } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//   console.log("pedro comprate el helado de crema");
//   console.log("y te sobran " + (dineroPedro - 1));
// } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//   console.log("pedro comprate el helado de bombon heladix");
//   console.log("y te sobran " + (dineroPedro - 1.6));
// } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//   console.log("pedro comprate el helado de bombon heladovich");
//   console.log("y te sobran " + (dineroPedro - 1.7));
// } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//   console.log("pedro comprate el helado de bombon helardo");
//   console.log("y te sobran " + (dineroPedro - 1.8));
// } else if (dineroPedro >= 2.9) {
//   console.log("pedro comprate el helado con confites o un pote de 1/4 de kg");
//   console.log("y te sobran " + (dineroPedro - 2.9));
// } else {
//   console.log("pedro no te alcanza nada pobreton ");
// }

// /*EJERCICIO 2
// crear una maquina que deje pasar solo a los mayores de edad.
// la primer persona que entre despues de las 2 am , no paga*/
// let free = false;
// const validarCliente = (time) => {
//   let edad = prompt("cual es tu edad?");
//   if (edad >= 18) {
//     if (time >= 2 && time < 7 && free == false) {
//       alert(
//         "puedes pasar gratis porque eres las primer persona despues de las 2 AM"
//       );
//       free == true;
//     } else {
//       alert(
//         `son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`
//       );
//     }
//   } else {
//     alert("eres menor de edad, no puedes pasar");
//   }
// };
// validarCliente(23);
// validarCliente(24);
// validarCliente(2);
// validarCliente(3);

// //EJERCICIO 3
// //crear calculadora. con funciones

// const sumar = (num1, num2) => {
//   return parseInt(num1) + parseInt(num2);
// };

// const restar = (num1, num2) => {
//   return parseInt(num1) - parseInt(num2);
// };

// const multiplicar = (num1, num2) => {
//   return parseInt(num1) * parseInt(num2);
// };

// const dividir = (num1, num2) => {
//   return parseInt(num1) / parseInt(num2);
// };

// alert("que operacion deseas realizar?");
// let operacion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir");

// if (operacion == 1) {
//   let numero1 = prompt("primer numero para sumar");
//   let numero2 = prompt("segundo numero para sumar");
//   resultado = sumar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 2) {
//   let numero1 = prompt("primer numero para restar");
//   let numero2 = prompt("segundo numero para restar");
//   resultado = restar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 3) {
//   let numero1 = prompt("primer numero para multiplicar");
//   let numero2 = prompt("segundo numero para multiplicar");
//   resultado = multiplicar(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// }
// if (operacion == 4) {
//   let numero1 = prompt("primer numero para dividir");
//   let numero2 = prompt("segundo numero para dividir");
//   resultado = dividir(numero1, numero2);
//   alert(`tu resultado es ${resultado}`);
// } else {
//   alert("no se encuentra esa funcion");
// }

// /*EJERCICIO 4 NO FUNCIONA
// crea un mini sistema que nos permita registrar los alumnos que esten presentes (P) y ausentes (A) en clase.
// pasados los 30 dias mostrar la situacion final de todos los alumnos (# total de presentes y ausentes).
// se puede tener un maximo de 10% de ausencias por semestre, si tienen mas sera reprobado. */

// let cantidad = prompt("cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//   alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0]; // el 0 es la cantidad de asistencias.
// }

// const tomarAsistencia = (nombre, p) => {
//   let presencia = prompt(nombre);
//   if (presencia == "p" || presencia == "P") {
//     alumnosTotales[p][1]++;
//   }
// };

// for (i = 0; i < 30; i++) {
//   for (alumno in alumnosTotales) {
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//   }
// }

// for (alumno in alumnosTotales) {
//   let resultado = `${alumnosTotales[alumno][0]}:<br>
//   ________Presentes: ${alumnosTotales[alumno][1]} <br>
//   ________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
//   if (30 - alumnosTotales[alumno][1] > 18) {
//     resultado += "REPROBADO POR INASISTENCIAS <br>";
//   } else {
//     resultado += "<br></br>";
//   }
// }

// document.write(resultado);
// NO FUNCIONA EL EJERCICIO DE ARRIBA. no se que esta mal

//EJERCICIO 5. POO.
/*cofla entro a una tienda que vende celulares ya que quiere comprarse uno nuevo.
de todos los modelos que hay a cofla le llamaron la atencion 3 celulares, pero ningun vender sabe nada de ellos.
el antes de comprar un celular quiere ver las cualidades y comportamientos de cada uno para poder decidir.

CREAR SOLUCIONES
- crea un sistema para mostrarle a cofla las particularidades de los 3 celulares.
- cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria RAM.
- cada celular debe poder prender, reiniciar, tomar fotos y grabar.*/

class celular {
  constructor(color, peso, tamaño, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.rdc = rdc;
    this.ram = ram;
    this.encendido = false;
  }
  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("celular prendido");
      this.encendido == true;
    } else {
      alert("el celular esta apagado");
      this.encendido == false;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("el celular se esta reiniciando");
    } else {
      alert("el celular esta apagado");
    }
  }

  tomarFoto() {
    alert(`foto tomada en resolucion de ${this.rdc}`);
  }

  grabarVideo() {
    alert(`tomar video en ${this.rdc}`);
  }

  mobileInfo() {
    return `
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso}</b><br>
    Tamaño: <b>${this.tamaño}</b><br>
    Resolucion de camara: <b>${this.rdc}</b><br>
    Memoria Ram: <b>${this.ram}</b><br>`;
  }
}

celular1 = new celular("rojo", "150gr", "5'", "hd", "1GB");
celular2 = new celular("negro", "155gr", "5.4'", "full hd", "2GB");
celular3 = new celular("blanco", "146gr", "5.9'", "full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()}`);
