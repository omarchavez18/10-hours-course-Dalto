// problema A.
// indicarle las 20 llaves posibles con sus 4 imagenes y cofla debe seleccionar cual llave usar.
// una vez seleccionada enviar los datos al servidor y que otro programador se encargue.

// const h1 = document.querySelector(".h1");
// h1.style.color = "blue";
// h1.style.padding = "20px";
// h1.style.backgroundColor = "black";
// h1.style.textAlign = "center";

//
const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearLlave(nombre, modelo, precio) {
  contador++;
  img = "<img src='llave.png'>";
  nombre = `<h2> ${nombre}</h2>`;
  modelo = `<h3> ${modelo}</h3>`;
  precio = `<p> Precio: <b>${precio}</b></p>`;
  return [img, nombre, modelo, precio];
}

const llave = crearLlave("Llave 1", "Modelo x", "34");

contenedor.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
// document.write(llave[0], llave[1], llave[2]);

let documentFragment = document.createDocumentFragment();

for (let i = 1; i < 21; i++) {
  let modeloRandom = Math.round(Math.random() * 10000);
  let precioRandom = Math.round(Math.random() * 10 + 30);
  let llave = crearLlave(
    `llave ${i}`,
    `modelo${modeloRandom}`,
    `precio${precioRandom}`
  );
  let div = document.createElement("DIV");
  div.classList.add(`item-${i}`, `flex-item`);
  div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
  documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
