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

let martin = new Persona("Martin",21);
let cris = new Persona("Cris", 22);

cris.saludar();
martin.saludar();
