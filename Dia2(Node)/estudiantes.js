let estudiantes = [];

function getEstudiantes(){
    return estudiantes;
}

function setEstudiante(nombre){
    estudiantes.push(nombre);
}

module.exports={
    getEstudiantes,
    setEstudiante
}