class animal {
  constructor(especie, edad, color) {
    // los especie, edad y color que son parametros son los mismos que los que estan despues del =
    // las palabras despues del this. pueden ser otras no tienen que ser obligatoriamente las mismas que los parametros.
    this.especie = especie;
    this.age = edad;
    this.color = color;
    this.info = `Soy un ${this.especie} tengo ${this.age} años y soy de color ${this.color}.`;
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
console.log(gato.info);
