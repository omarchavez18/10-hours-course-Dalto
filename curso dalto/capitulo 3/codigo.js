class animal {
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
  ladrar() {
    if (this.especie == "perro") {
      document.write(`soy un ${this.especie} y ladro asi waaw waaw` + "<br>");
    } else {
      document.write(`no puede ladrar porque es un ${this.especie}` + "<br>");
    }
  }
}

/* el "new" nos indica que se esta creando un objeto de la clase animal.
asi toma las propiedades de la misma*/
const perro = new animal("perro", "5", "cafe"); // aqui perro va por especie, 5 por edad y cafe por color.
const gato = new animal("gato", "3", "negro");
const zorro = new animal("zorro", "2", "rojo");

console.log(perro);
console.log(gato);
console.log(zorro);
console.log(zorro.color);
console.log(gato.age);
console.log(perro.especie);

// console.log(gato.info);
//aqui se aplica el metodo de la linea 12 a 14.
perro.verInfo();
gato.verInfo();
zorro.verInfo();
//
perro.ladrar();
gato.ladrar();
zorro.ladrar();
