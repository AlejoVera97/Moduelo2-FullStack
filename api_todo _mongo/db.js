import dotenv from "dotenv";
dotenv.config();

import postgres from "postgres";
import {leerTareas,crearTarea,borrarTarea,editarTarea,editarEstado} from "./bd";

function conectar (){
    return postgres({
        host:process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
}

 export function leerTareas(){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`SELECT * FROM tareas ORDER BY id`
        .then (tareas=>{
            conexion.end();
            ok(tareas);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}

export function crearTarea({r,g,b}){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`INSERT INTO tareas (tarea) VALUES (${tarea}) RETURNING id`
        .then (([{id}])=>{
            conexion.end();
            ok(id);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}


export function borrarTarea(id){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`DELETE FROM tareas WHERE id= ${id}`
        .then (({count})=>{
            conexion.end();
            ok(count);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}


export function editarTarea(id,tarea){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`UPDATE tareas SET tarea = NOT ${tarea} WHERE id= ${id}`
        .then (({count})=>{
            conexion.end();
            ok(count);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}

export function editarEstado(id){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`UPDATE tareas SET tarea = NOT ${id} WHERE id= ${id}`
        .then (({count})=>{
            conexion.end();
            ok(count);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}
