//ejercicio 1.
/* cofla y sus amigos quieren comprar el helado mas caro que puedan con la plata que tienen, veamos como podemos ayudarlos
  roberto tiene $1.5 USD,
  pedro tiene $1.7 USD,
  y cofla tiene $3 US
  Los precios de los helados son los siguientes:
  palito helado de agua :$0.6 USD
  palito helado de crema: $1 USD
  bombon helado marca heladix: $1.6 USD
  bombon helado marca heladovich: $1.7 USD
  bombon helado marca helardo: $1.8 USD
  potecito de helado con confites: $2.9 USD
  pote de 1/4 KG -> $2.9 USD
  CREAR SOLUCIONES:
  -Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar.
  - si hay 2 o mas con el mismo precio, mostrar ambos.
  -indicar el vuelto
  */
//aqui se les pregunta el dinero que tienen y cual helado les alcanza, tambien cuanto es el cambio.
dineroCofla = prompt("cuanto dinero tienes Cofla?");
dineroCofla = parseInt(dineroCofla); // parseInt convierte el string a numero
dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = prompt("cuanto dinero tienes Pedro?");
dineroPedro = parseInt(dineroPedro);
if (dineroCofla >= 0.6 && dineroCofla < 1) {
  console.log("cofla comprate el helado de agua");
  console.log("y te sobran " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  console.log("cofla comprate el helado de crema");
  console.log("y te sobran " + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  console.log("cofla comprate el helado de bombon heladix");
  console.log("y te sobran " + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  console.log("cofla comprate el helado de bombon heladovich");
  console.log("y te sobran " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  console.log("cofla comprate el helado de bombon helardo");
  console.log("y te sobran " + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
  console.log("cofla comprate el helado con confites o un pote de 1/4 de kg");
  console.log("y te sobran " + (dineroCofla - 2.9));
} else {
  console.log(" cofla mejor robate uno no te alcanza nada ");
}
//
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  console.log("roberto comprate el helado de agua");
  console.log("y te sobran " + (dineroRoberto - 0.6));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  console.log("roberto comprate el helado de crema");
  console.log("y te sobran " + (dineroRoberto - 1));
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  console.log("roberto comprate el helado de bombon heladix");
  console.log("y te sobran " + (dineroRoberto - 1.6));
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  console.log("roberto comprate el helado de bombon heladovich");
  console.log("y te sobran " + (dineroRoberto - 1.7));
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  console.log("roberto comprate el helado de bombon helardo");
  console.log("y te sobran " + (dineroRoberto - 1.8));
} else if (dineroRoberto >= 2.9) {
  console.log("roberto comprate el helado con confites o un pote de 1/4 de kg");
  console.log("y te sobran " + (dineroRoberto - 2.9));
} else {
  console.log(" roberto no te alcanza nada jodido");
}
//
if (dineroPedro >= 0.6 && dineroPedro < 1) {
  console.log("pedro comprate el helado de agua");
  console.log("y te sobran " + (dineroPedro - 0.6));
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  console.log("pedro comprate el helado de crema");
  console.log("y te sobran " + (dineroPedro - 1));
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  console.log("pedro comprate el helado de bombon heladix");
  console.log("y te sobran " + (dineroPedro - 1.6));
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  console.log("pedro comprate el helado de bombon heladovich");
  console.log("y te sobran " + (dineroPedro - 1.7));
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  console.log("pedro comprate el helado de bombon helardo");
  console.log("y te sobran " + (dineroPedro - 1.8));
} else if (dineroPedro >= 2.9) {
  console.log("pedro comprate el helado con confites o un pote de 1/4 de kg");
  console.log("y te sobran " + (dineroPedro - 2.9));
} else {
  console.log("pedro no te alcanza nada pobreton ");
}
