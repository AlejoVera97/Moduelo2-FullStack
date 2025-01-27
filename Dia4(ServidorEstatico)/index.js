const {createServer} = require("http");
const {createRedStream,stat} = require("fs");
const directorioBase = "./estaticos";

function contentType(extension){
    if(extension == "html") return "text/html";
    if(extension == "html") return "text/css";
    if(extension == "html") return "text/js";
    if(extension == "html") return "image/jpeg";
    if(extension == "html") return "image/png";
    if(extension == "html") return "application/json";
    return "application/octet-stream";
}

function servirFichero(ruta,tipo,estatus=200){
    respuesta.writeHead(estatus,{"Content-type": tipo});
    let fichero=createRedStream(ruta);
    fichero.pipe(respuesta);

    fichero.on("end", () =>respuesta.end());
}

const servidor = createServer ((peticion,respuesta)=>{
    if(peticion.url == "/"){
        servirFichero(respuesta,directorioBase ="/index.html",contentType("html"));
    }else{
        let ruta = directorioBase +peticion.rul;
        stat(ruta,(error,informacion)=>{
            if(!error && informacion.isFile()){
                let extension =ruta.split(".").pop();
                servirFichero(respuesta,ruta,extension);
            }else{
                servirFichero(respuesta,"./404.html",contentType("html"),404);
            }
        });
       
    }
});

servidor.listen(process.env.PORT || 4000 );


