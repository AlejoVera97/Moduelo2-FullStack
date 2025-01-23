const { createServer } = require("http");
const {readFile} = require("fs");

createServer((peticion, respuesta) => {

let color= "black";
let found = true;

if(peticion.url=="/rojo"){
    color ="red";
}else if (peticion.url=="/azul"){
    color="blue";
}else if(peticion.url =="/estilos"){
        return readFile("./estilo.css",(error,contenido)=>{
            respuesta.writeHead(200, {"Content-type":"text/css"}); 
            respuesta.write(contenido.toString());
            respuesta.end();
    });

}else{
    found=false;
}

respuesta.writeHead(found?200:404,{"Content-type":"text/html"});


    respuesta.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="/estilos" rel="stylesheet">
        </head>
        <body style="background-color:${color};"> 
            <ul>
            <li><a href="/rojo">rojo</a></li>
            <li><a href="/azul">azul</a></li>
            </ul>
        </body>
        </html>
        `);

    respuesta.end();

}).listen(4000);