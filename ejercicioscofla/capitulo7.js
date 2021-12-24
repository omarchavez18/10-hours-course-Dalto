/* termino el primer semestre y cofla no sabe si aprobara las materias, para pasar debe contar 
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
