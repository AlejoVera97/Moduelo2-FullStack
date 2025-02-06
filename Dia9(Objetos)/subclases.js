class Persona{
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad = edad;
    }
    envejecer(){
        this.edad++;
    }
    saludar(){
        console.log(`Hola , soy ${this.nombre} y tengo ${this.edad}`);
    }

}

class Estudiante extends Persona{
    constructor(nombre,edad,asignatura){
        super(nombre,edad);
        this.asignatura = asignatura;
    }
    saludar(){
        console.log(`Hola , soy ${this.nombre} y tengo ${this.edad} anos y estudio ${this.asignatura}`);
    }
}
let juan= new Estudiante ("juan", 23 ,"bateria");

juan.saludar();
juan.envejecer();