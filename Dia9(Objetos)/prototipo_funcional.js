function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.envejecer= function(){
    this.edad++;
};

Persona.prototype.saludar = function(){
    console.log(`Hola , soy ${this.nombre} y tengo ${this.edad}`);
};

let laura = new Persona("laura",22);
let juan = new Persona("Juan",23);

laura.saludar();
juan.saludar();
laura.envejecer();
laura.envejecer();
laura.envejecer();
laura.saludar();



