//CREACION DE ELEMENTOS
const contenedor = document.querySelector(".contenedor");
//createElement() - crea un elemento.
const item = document.createElement("LI");

// createTextNode() - crea un texto dentro del elemento creado, en este caso "item"
const textoDelItem = document.createTextNode(" el texto va aqui");
console.log(textoDelItem);

//appenChild() - nos permite trabajar con el contenedor hijo, que tambien afectara al padre.
item.appendChild(textoDelItem);
contenedor.appendChild(item);
console.log(item);

//OBTENCION Y MODIFICACION DE CHILDS.
const hijos = contenedor.childNodes;
console.log(hijos);

//METODOS DE CHILDS.
// const parrafo = contenedor.createElement("P");
// const h2_nuevo = contenedor.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// const h2_antiguo = document.querySelector(".h2");
// contenedor.replaceChild(h2_nuevo, h2_antiguo);

// contenedor.removeChild(h2_antiguo);

//hasChildNodes() - nos indica si el elemento tiene nodos hijos
// let respuesta = contenedor.hasChildNodes();

// if (respuesta) {
//   document.write(`el elemento tiene hijos`);
// } else {
//   document.write(`el elemento NO tiene hijos.`);
// }

//METODOS DE LOS PADRES.
//parentElement, parentNode.
//parentElement nos dira cual es el elemento padre de lo que seleccionamos.
console.log(contenedor.parentElement);

//PROPIEDADES DE LOS SIBLINGS (HERMANOS)
// nextSibling, previousSibling, nextElementSibling, previousElementSibling.
//nextSibling - nos muestra el siguiente hermano en fila.
const parrafo = document.querySelector(".parrafo");
const h2 = document.querySelector(".h2");
console.log(parrafo.previousElementSibling);
console.log(h2.nextElementSibling);
