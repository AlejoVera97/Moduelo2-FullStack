import dotenv from "dotenv";
dotenv.config();
import express from "express";

const servidor = express();

if(process.env.PRUEBAS){
    servidor.use("/pruebas",express.static("/pruebas"));
}

servidor.get("/tareas",(peticion,respuesta)=>{
    respuesta.send("GET /tareas");
});

servidor.post("/tareas/nuevas",(peticion,respuesta)=>{
    respuesta.send("POST /tareas/nueva");
});

servidor.delete("/tareas/nuevas",(peticion,respuesta)=>{
    respuesta.send("DELETE /tareas/borrar/:id");
});

servidor.put("/tareas/editar/texto/:id",(peticion,respuesta)=>{
    respuesta.send("PUT /tareas/editar/texto/:id" );
});

servidor.put("/tareas/editar/estado/:id",(peticion,respuesta)=>{
    respuesta.send("PUT /tareas/editar/texto/:id");
});



servidor.listen(process.env.PORT);