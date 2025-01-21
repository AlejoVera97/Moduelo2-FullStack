const {writeFile} = require("fs");

writeFile("./prueba.txt","cualquier otra cosa",error =>{
    console.log("..fichero escrito");
});