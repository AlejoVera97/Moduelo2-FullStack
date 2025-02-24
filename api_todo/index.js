import express from "express";
import { leerTareas, crearTarea, borrarTarea, editarTarea, editarEstado } from "./bd";


const servidor = express();
servidor.use(express.json());

if (process.env.PRUEBAS) {
    servidor.use("/pruebas", express.static("./pruebas"));
}

servidor.get("/tareas", async (peticion, respuesta) => {
    try {
        let tareas = await leerTareas();
        respuesta.json(tareas);

    } catch (error) {
        respuesta.status(500);
        respuesta.json({error :"error en el servidor"});
    }
});

servidor.post("/tareas/nuevas", async(peticion, respuesta,siguiente) => {
    let {tarea} = peticion.body;
    let valido=tarea && tarea.trim() != "";

    if(valido){
        try{
            let id = await crearTarea(tarea);
            return respuesta.json({id});
        }catch(error){
            respuesta.status(500);
            respuesta.json({error:"error en el  servidor"});

        }
    }


});

servidor.delete("/tareas/borrar/:id([0-9]+)", async (peticion, respuesta,siguiente) => {
    respuesta.send("DELETE /tareas/borrar/:id");
    // respuesta 204.
    // recordad que si no puede borrar algo es 404.
    try{
        let count = await borrarTarea(peticion.params.id);
        if(count){
            respuesta.status(204);
            return respuesta.send("");
        }
        siguiente();
    }catch(error){
        respuesta.status(500);
        respuesta.json({error: " error en el servidor"});
    }
});

servidor.put("/tareas/editar/texto/:id([0-9]+)", (peticion, respuesta) => {
    respuesta.send("PUT /tareas/editar/texto/:id");
});

servidor.put("/tareas/editar/estado/:id([0-9]+)", (peticion, respuesta) => {
    respuesta.send("PUT /tareas/editar/estado/:id");
});

servidor.use((error, peticion, respuesta, siguiente) => {
    respuesta.status(404);
    respuesta.json({ error: "recurso no encontrado" });
});


servidor.use((peticion, respuesta) => {
    respuesta.status(404);
    respuesta.json({ error: "recurso no encontrado" });
});


servidor.listen(process.env.PORT);