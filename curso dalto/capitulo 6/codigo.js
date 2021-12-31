// //getelementbyid
// parrafo = document.getElementById("parrafo");
// document.write(parrafo);

// //querySelector() devuelve el primer elemento que coincida con el selector indicado
// media = document.querySelector(".socialMedia");
// document.write(media);

// //querySelectorAll(), devuelve todos los elementos que coincidan con el selector
// media = document.querySelectorAll(".socialMedia");
// document.write(media);

const titulo = document.querySelector(".titulo");

//el titulo se puede editar en la pagina si el booleano es true

/*setAttribute() nos permite cambiar el valor de un atributo 
se le debe indicar el type y luego al type al que quiere cambiar
como aqui abajo lo cambia al type "text" */
//   .rango.setAttribute("type", "number");

/* getAttribute() nos permite obtener el valor del atributo, en este caso nos extrae
el valor del type que seria "number" y dentro de los parentesis le indicamos lo que queremos extraer */
// let valorDelAtributo = rango.getAttribute("type");
// document.write(valorDelAtributo);

// dir, nos permite indicar la ubicacion del texto, "rtl" right to left, "ltr" left to right.
titulo.setAttribute("dir", "rtl");

// conteditable nos permite modificar el contenido del texto si el booleano es true
titulo.setAttribute("contenteditable", "true");

// hidden- nos permite ocultar el codigo seleccionado
//titulo.setAttribute("hidden");

/*en el archivo html, despues de la class, se le indica un TITLE el cual se puede
modificar el texto */
let football = document.querySelector(".futbol");
football.setAttribute("title", "el deporte mas visto del mundo");
football.style.color = "red";

// ATRIBUTOS DE INPUTS. className, value, type,
let input = document.querySelector(".input-normal");

console.log(`el value es ${input.value}`);

document.write(`el className es ${input.className}`);
document.write("<br><br>");
console.log(`el tipo de input es ${(input.type = "text")}`);

let min = document.getElementById("input-normals");
//minLength nos solicita el minimo de caracteres que debe tener.
min.minLength = "6";

min.setAttribute("minlength", "8");
min.placeholder = "escribe aqui tu nombre ";
min.required = "true";

// ATRIBUTOS DEL STYLE

let surf = document.querySelector(".surf");

surf.style.color = "blue";
surf.style.backgroundColor = "black";
surf.style.padding = "20px";
surf.style.textAlign = "center";
surf.style.textTransform = "upperCase";

// METODOS DE CLASSLIST
let titulo2 = document.querySelector(".titulo2");
//add()- agrega una clase
titulo2.classList.add("big");
// remove()- remueve la clase
titulo2.classList.remove("big");
// item()- te muestra el nombre de la clase por medio de su ubicacion numerica
let valor = titulo2.classList.item(1);
document.write(valor);
document.write(" <br> <br>");
//contains()- verifica si una clase se encuentra o no con true o false
nombreDeClase = "red";
let contain = titulo2.classList.contains(nombreDeClase);
//document.write(contain);

//si contain es true ejecuta tal
if (contain) {
  document.write(`la clase ${nombreDeClase} si existe`);
} else {
  document.write(`la clase ${nombreDeClase} no existe`);
}
