const {request} = require("https");
const {createWriteStream} = require("fs");

request({
    host: "es.wikipedia.org",
    method: "GET",
    path: "/wiki/Wikipedia:Portada"
},respuesta =>{
    let html= createWriteStream("./hola.html");

    respuesta.on("data",datos=>{ //extramoes los datos respuesta
        html.write(datos);
    });

    respuesta.on("end",()=>{ //al finalizar la respuesta 
        console.log("descarga lista");
    });

}).end();




// https://es.wikipedia.org/wiki/Wikipedia:Portada