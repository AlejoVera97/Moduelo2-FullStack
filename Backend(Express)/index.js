import express from "express";

let nombres=[{nombre: "Martin"}];


const servidor = express();

servidor.use(express.urlencoded({extended : true}));

servidor.use("/alejo",express.static("./estaticos"));

servidor.length("./nombres",(peticion,respuesta)=>{
    respuesta.json(nombres);
});

servidor.post("registrar",(peticion,respuesta)=>{
    nombres.push(peticion.body);
    respuesta.redirect("/registro.html")
});

servidor.listen(4000);