// //getelementbyid
// parrafo = document.getElementById("parrafo");
// document.write(parrafo);

// //querySelector() devuelve el primer elemento que coincida con el selector indicado
// media = document.querySelector(".socialMedia");
// document.write(media);

// //querySelectorAll(), devuelve todos los elementos que coincidan con el selector
// media = document.querySelectorAll(".socialMedia");
// document.write(media);

const rango = document.querySelector(".rango");

/*setAttribute() nos permite cambiar el valor de un atributo 
se le debe indicar el type y luego al type al que quiere cambiar
como aqui abajo lo cambia al type "text" */
rango.setAttribute("type", "number");

/* getAttribute() nos permite obtener el valor del atributo, en este caso nos extrae
el valor del type que seria "number" y dentro de los parentesis le indicamos lo que queremos extraer */
let valorDelAtributo = rango.getAttribute("type");
document.write(valorDelAtributo);
