const {createWriteStream} = require("fs");

let fichero =createWriteStream("./prueba.txt");



process.stdin.on("data",chunk=>{
    if(chunk.toString().trim() == "salir"){
        process.exit();
    }else{
        fichero.write(chunk);
    }
}); 

process.on("exit"), ()=> console.log("bye bye");