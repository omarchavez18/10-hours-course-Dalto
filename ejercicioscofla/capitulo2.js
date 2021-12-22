/*EJERCICIO 2
//   crear una maquina que deje pasar solo a los mayores de edad.
//   la primer persona que entre despues de las 2 am , no paga*/
let free = false;
const validarCliente = (time) => {
  let edad = prompt("cual es tu edad?");
  if (edad >= 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert(
        "puedes pasar gratis porque eres las primer persona despues de las 2 AM"
      );
      free == true;
    } else {
      alert(
        `son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`
      );
    }
  } else {
    alert("eres menor de edad, no puedes pasar");
  }
};
validarCliente(23);
validarCliente(24);
validarCliente(2);
validarCliente(3);
