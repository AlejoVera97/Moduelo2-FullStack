const {request} = require("https");
const {createWriteStream} = require("fs");


for(let i=1; i<=20;i++){
request({
    host: "picsum.photos",
    path: "/100"
},respuesta =>{
    
    request({
        host:"fastly.picsum.photos",
        path: respuesta.headers.location.split("photos")[1]
    },respuesta=>{
        let imagen = createWriteStream(`./img${i}.jpg`);
        respuesta.pipe(imagen);
        respuesta.on("end",()=>{
            console.log("descarga lista");    
        });
    }).end();

}).end();
}



// https://es.wikipedia.org/wiki/Wikipedia:Portada