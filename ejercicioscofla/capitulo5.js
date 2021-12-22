//EJERCICIO 5A.

/*cofla entro a una tienda que vende celulares ya que quiere comprarse uno nuevo.
de todos los modelos que hay a cofla le llamaron la atencion 3 celulares, pero ningun vender sabe nada de ellos.
el antes de comprar un celular quiere ver las cualidades y comportamientos de cada uno para poder decidir.

CREAR SOLUCIONES
- crea un sistema para mostrarle a cofla las particularidades de los 3 celulares.
- cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria RAM.
- cada celular debe poder prender, reiniciar, tomar fotos y grabar.*/

class Celular {
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

const Celular1 = new celular("rojo", "150gr", "5'", "hd", "1GB");
const Celular2 = new celular("negro", "155gr", "5.4'", "full hd", "2GB");
const Celular3 = new celular("blanco", "146gr", "5.9'", "full hd", "2GB");

Celular1.presionarBotonEncendido();
Celular1.tomarFoto();
Celular1.grabarVideo();
Celular1.reiniciar();
Celular1.presionarBotonEncendido();

document.write(`
 ${Celular1.mobileInfo()} <br>
 ${Celular2.mobileInfo()} <br>
 ${Celular3.mobileInfo()} <br>`);

/* //EJERCICIO 5-B
cofla no esta satisfecho con los celulares asi que decide ir a la seccion de los celulares de alta gama
donde va a poder encotrar mejores celulares, vio dos celulares, estos celulares pueden hacer lo mismo que los
 anteriores y ademas pueden grabar en camara lenta, tiene reconocimiento facial y una camara extra

 CREAR SOLUCIONES
 -implementar todas estas cualidades en los celulares de alta gama*/

class celularAltaGama extends Celular {
  constructor(color, peso, tamaño, rdc, ram, rdce) {
    super(color, peso, tamaño, rdc, ram);
    this.resolucionDeCamaraExtra = rdce;
  }
  grabarVideoLento() {
    alert("estas grabando en camara lenta");
  }
  reconocimientoFacial() {
    alert(`vamos a iniciar un reconocimiento facial`);
  }
  infoAltaGama() {
    return (
      this.mobileInfo() +
      `Resolucion de camara trasera: ${this.resolucionDeCamaraExtra}`
    );
  }
}

Celular1 = new celularAltaGama("rojo", "130gr", "5.2'", "4k", "3GB", "full hd");
Celular2 = new celularAltaGama("negro", "142gr", "6'", "4k", "4GB", "hd");

document.write(`
 ${Celular1.infoAltaGama()} <br><br>
 ${Celular2.infoAltaGama()} <br>`);

/*EJERCICIO 5-C
 cofla ya tiene un celular nuevo, y ahora esta mirando las aplicaciones del playstore
 le llamaron la atencion 7 apps de las cuales solo elegira 2, el problema es que no se logra decidir cual app

 CREAR SOLUCIONES
 -crear un sistema que lo ayude a decidir
 - la informacion de los instaladores debe contener la cantidad de descargas y las puntuaciones y peso
 las apps se deben poder instalar, abrir, cerrar y desinstalar*/

class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("app instalada correctamente");
    }
  }

  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("app desinstalada correctamente");
    }
  }

  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app encendida");
    }
  }

  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("app cerrada");
    }
  }
  appInfo() {
    return `
       descargas: <b>${this.descargas}</b><br>
       puntuacion: <b>${this.puntuacion}</b><br>
       peso:<b>${this.peso}</b><br>
      `;
  }
}

const aplication = new App("25,000", "4.8 estrellas", "700 mb");
const aplication2 = new App("26,000", "4.3 estrellas", "900 mb");
const aplication3 = new App("16,000", "4.9 estrellas", "500 mb");
const aplication4 = new App("46,000", "5 estrellas", "780 mb");
const aplication5 = new App("18,000", "4.5 estrellas", "450 mb");
const aplication6 = new App("6,000", "3 estrellas", "600 mb");
const aplication7 = new App("1,000", "4.1 estrellas", "560 mb");

document.write(`
  app1: ${aplication.appInfo()} <br>
  app2: ${aplication2.appInfo()} <br>
  app3: ${aplication3.appInfo()} <br>
  app4: ${aplication4.appInfo()} <br>
  app5: ${aplication5.appInfo()} <br>
  app6: ${aplication6.appInfo()} <br>
  app7: ${aplication7.appInfo()} <br>
  `);
console.log("app iniciada:", aplication2.iniciada);
console.log("app instalada;", aplication2.instalada);
aplication2.instalar();
console.log("app instalada", aplication2.instalada);

aplication2.abrir();
console.log("app iniciada", aplication2.iniciada);

aplication2.cerrar();
aplication2.desinstalar();

console.log("app iniciada", aplication2.iniciada);
console.log("app instalda", aplication2.instalada);
