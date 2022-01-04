//METODOS DE SELECCION DE ELEMENTOS DEL DOM.

//getElementById() - selecciona un elemento por su id.
// example: document.getElementById("parrafo")

//querySelector() - selecciona un elemento por su clase.
// example:  let edad = document.querySelector(".edad")

//setAttribute() - modifica el valor de un atributo.

const rango = document.querySelector(".rango");
let valorDelAtributo1 = rango.getAttribute("type");
console.log(` el type es ${valorDelAtributo1}`);

//ATRIBUTOS GLOBALES.
let surf = document.querySelector(".surf");
// dir, nos permite indicar la ubicacion del texto, "rtl" right to left, "ltr" left to right.
surf.setAttribute("dir", "rtl");
// conteditable nos permite modificar el contenido del texto si el booleano es true
surf.setAttribute("contenteditable", "true");
/*en el archivo html, despues de la class, se le indica un TITLE el cual se puede
modificar el texto */
surf.setAttribute("title", "el deporte de john john florence");

// ATRIBUTOS DEL STYLE.
surf.style.color = "blue";
surf.style.backgroundColor = "black";
surf.style.padding = "20px";
surf.style.textAlign = "center";
surf.style.textTransform = "upperCase";

//ATRIBUTOS DE LOS INPUTS.
// ahora se puede acceder a los atributos directamente, ya no se requiere el metodo.
//className, value, type, accept, form, minLength, placeholder, required, style.
let edad = document.querySelector(".edad");

//className
console.log(`el nombre de la clase del input number es ${edad.className}`);

/*TYPE
nos indicara el type que contiene*/
console.log(`el type es ${edad.type}`);
//para modificar el type anterior seria =
console.log(` el type se modifico de number a ${(edad.type = "text")}`);

/* REQUIRED
nos indica que el campo no puede quedar vacio.*/
edad.required = "true";

//minLength sirve para solicitar un minimo de caracteres.
let naame = document.getElementById("naame");
naame.minLength = "5";
naame.setAttribute("minLength", "4");

//placeholder
naame.placeholder = "cambiaste el placeholder";

//value
console.log(`el value es ${naame.value}`);

//METODOS DE CLASSLIST.
/*add(), remove(), contains(), replace(), item(), toggle() */
//add() agrega una clase.
let buceo = document.querySelector(".buceo");
buceo.classList.add("diving");
buceo.classList.add("diver");

//contains() - verifica si una clase existe o no.
let buzo = buceo.classList.contains("diving");
let water = buceo.classList.contains("diver");
console.log(`la clase diving se encuetra = ${buzo}`);
console.log(`la clase diver se encuetra = ${water}`);

//remove() - elimina una clase.
buceo.classList.remove("diver");
let ola = buceo.classList.contains("diver");
console.log(`la clase diver se encuetra = ${ola}`);

//replace() - reemplaza una clase por otra.
buceo.classList.replace("diving", "scubadiving");
let padi = buceo.classList.contains("scubadiving");
console.log(`la clase scubadiving se encuetra = ${padi}`);
