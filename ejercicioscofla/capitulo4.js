/* EJERCICIO 4 NO FUNCIONA
  crea un mini sistema que nos permita registrar los alumnos que esten presentes (P) y ausentes (A) en clase.
  pasados los 30 dias mostrar la situa<cion final de todos los alumnos (# total de presentes y ausentes).
  se puede tener un maximo de 10% de ausencias por semestre, si tienen mas sera reprobado. */
let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0]; // el 0 es la cantidad de asistencias.
}
const tomarAsistencia = (nombre, p) => {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[p][1]++;
  }
};
for (let i = 0; i < 5; i++) {
  for (let alumno in alumnosTotales) {
    tomarAsistencia(alumnosTotales[alumno][0], alumno);
  }
}

for (let alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: ${alumnosTotales[alumno][1]} <br>
    ________Ausencias: ${5 - alumnosTotales[alumno][1]}`;
  if (5 - alumnosTotales[alumno][1] > 2) {
    resultado += " REPOBADO POR INASISTENCIAS <br>";
  } else {
    resultado += "<br></br>";
  }
  document.write(resultado);
}
