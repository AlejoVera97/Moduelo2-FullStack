const {readFile} = require("fs");

readFile("./hola.jpg", (error,contenido)=>{
    console.log(contenido);
});