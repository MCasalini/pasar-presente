let cantidad = prompt("Cuántos alumnos son?");
let alumnosTotales = [];

for (i=0 ; i<cantidad; i++){
    alumnosTotales [i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = (nombre , p) =>{
    let presencia = prompt(nombre);
    (presencia == "p" || presencia == "P") && alumnosTotales[p][1]++
    
}

for (i=0; i<10; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia (alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br><br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br><br>
    ________Ausencias: <b>${10 - alumnosTotales[alumno][1]} </b><br><br>`;
    document.write(resultado)
}