/* EJERCICIO 7
 termino el primer semestre y cofla no sabe si aprobara las materias, para pasar debe contar 
con al menos el 90% de asistencia,
el promedio por materias debe ser al menos 7/10,
debe tener al menos el 75% de los trabajos practicos entregados.

solicitar los datos y decirle si aprueba o no.
mostrar todo esto con colores representativos en consola( ejemplo: reprobar en rojo) 
estructurado como tabla*/

const materias = {
  //materia:[asitencias,promedio,trabajos entregados, materia]
  fisica: [90, 6, 3, "fisica"],
  matematicas: [84, 8, 2, "matematicas"],
  logica: [92, 8, 4, "logica"],
  quimica: [96, 8, 4, "quimica"],
  calculo: [91, 6, 3, "calculo"],
  programacion: [79, 7, 4, "programacion"],
  biologia: [75, 9, 2, "biologia"],
  bbdd: [98, 9, 1, "bbdd"],
  algebra: [100, 10, 4, "algebra"],
};

const aprobo = () => {
  for (let materia in materias) {
    let asistencias = materias[materia][0];
    let promedio = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90) {
      console.log(`%c   Asistencias en orden`, "color:green");
    } else {
      console.log(`%c   falta de asistencias`, "color:red");
    }
    if (promedio >= 7) {
      console.log(`%c   el promedio es suficiente`, "color:green");
    } else {
      console.log(`%c   el promedio es insuficiente`, "color:red");
    }
    if (trabajos >= 3) {
      console.log(`%c   los trabajos estan en orden`, `color:green`);
    } else {
      console.log(`%c   faltan trabajos`, "color:red");
    }
    if (asistencias >= 90 && promedio >= 7 && trabajos >= 3) {
      console.log(`%c   cofla aprobo la materia`, `color:yellow`);
    } else {
      console.log(`%c   cofla reprobo la materia`, `color:orange`);
    }
  }
};

aprobo();

/* EJERCICIO 7-B. 
cofla esta sufriendo un poco ya que a pesar de que cree contar con el 90% de asistencias
y tener un promedio mayor a 7/10, no cree entregar el 75% de los trabajos practicos ya que necesita
dividir las tareas que hara semanalmente, cofla debe, trabajar 8 horas por dia durante 2 semanas,
entre las cuales tiene que: 24 horas estudiar, 24 horas hacer trabajos practicos, 
56 horas de trabajar, 8 horas de hacer las cosas de la casa.

organizar las actividades diariamente.
utilizar la consola para organizar todo.
el tiempo por tarea no debe superar las 4 horas*/

/*
30 min las cosas de la casa
 100 min trabajos practicos
 10 min descanso
 100 min estudiar
 240 min trabajar */

let trabajo = "240 min por dia de trabajo";
let estudio = "100 min por dia de estudio";
let tp = "100 min por dia de trabajos practicos";
let homework = "30 min por dia de cosas de la casa";
let descanso = "10 min por dia de descanso";

for (let i = 0; i < 14; i++) {
  if (i == 0) {
    console.group("semana 1");
  }
  console.groupCollapsed("dia " + (i + 1));
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(tp);
  console.log(homework);
  console.groupEnd();
  console.count();
  if (i == 7) {
    console.groupEnd();
    console.groupCollapsed("semana 2");
  }
}

console.groupEnd();
console.groupEnd();
//repasar
