//PROGRAMACION ORIENTADA A OBJETOS.

class Animal {
  constructor(especie, edad, color) {
    // los especie, edad y color que son parametros son los mismos que los que estan despues del =
    // las palabras despues del this. pueden ser otras no tienen que ser obligatoriamente las mismas que los parametros.
    this.especie = especie;
    this.age = edad;
    this.color = color;
    this.info = `Soy un ${this.especie} tengo ${this.age} años y soy de color ${this.color}.`;
  }
  //se crea un metodo. los metodos son funciones que se crean dentro de las clases.
  // con este metodo nos evitamos el codigo de la linea 30 y se aplica lo de la 32-34.
  verInfo() {
    document.write(this.info + "<br>" + "<br>");
  }

  //este metodo nos da polimorfismo.
  //   ladrar() {
  //     if (this.especie == "perro") {
  //       document.write(`soy un ${this.especie} y ladro asi waaw waaw` + "<br>");
  //     } else {
  //       document.write(`no puede ladrar porque es un ${this.especie}` + "<br>");
  //     }
  //   }
}

class Perro extends Animal {
  /* si se desea que herede las propiedades seria extends animal y  del constructor seria
 constructor(especie, age, color, raza) {
    super(especie, age, color); aqui se heredaron las anteriores y se declaro una nueva "raza", asi que hay
    que agregarla con this.raza = raza; */
  constructor(especie, age, color, raza) {
    super(especie, age, color);
    this.raza = raza;
    this.infor = `Soy un ${this.especie} tengo ${this.age} años , soy de color ${this.color}, y soy raza ${this.raza}.`;
  }
  verInfor() {
    document.write(this.infor + "<br>" + "<br>");
  }

  ladrar() {
    alert("waw");
  }
}

class reptil extends Perro {
  constructor(especie, age, tipo) {
    super(especie, age);
    this.subespecie = tipo;
    this.information = `Soy un ${this.especie}, tengo ${this.age} años, y soy especificamente un ${this.subespecie}.`;
  }
  verInformation() {
    document.write(this.information + "<br>");
  }
}
/* el "new" nos indica que se esta creando un objeto de la clase animal.
asi toma las propiedades de la misma*/
const perro = new Perro("perro", "5", "cafe", "doberman"); // aqui perro va por especie, 5 por edad y cafe por color.
const gato = new Animal("gato", "3", "negro");
const zorro = new Animal("zorro", "2", "rojo");
const lizard = new reptil("cocodrilo", "2", "cocodrilo de agua salada");

console.log(perro);
console.log(gato);
console.log(zorro);
console.log(zorro.color);
console.log(gato.age);
console.log(perro.especie);

// console.log(gato.info);
//aqui se aplica el metodo de la linea 12 a 14.
perro.verInfor();
gato.verInfo();
zorro.verInfo();

//esto es polimorfismo
perro.ladrar();
// gato.ladrar();
// zorro.ladrar();

lizard.verInformation();
