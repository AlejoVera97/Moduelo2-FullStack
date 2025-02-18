import express from "express";
import {leerColores,crearColor,borrarColor} from "./db.ks"

const servidor = express();

servidor.use(express.static("./estaticos"));

servidor.get("/colores", async (peticion, respuesta) =>{
    try{
        let colores= await leerColores();

        respuesta.json(colores);

    }
    catch(error){
        respuesta.status(500);
        
        respuesta.json({error: "error en el servidor"});
    }
});

servidor.listen(4000);

