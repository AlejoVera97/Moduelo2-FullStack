import postgres from "postgres";

function conectar (){
    return postgres({
        host:"localhost",
        database: "colores",
        user: "postgres",
        password: "admin"
    });
}

 export function leerColores(){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`SELECT * FROM colores`
        .then (colores=>{
            conexion.end();
            ok(colores);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}

export function crearColor({r,g,b}){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`INSERT INTO colores (r,g,b) VALUES (${r}, ${g},${b}) RETURNING id`
        .then (([{id}])=>{
            conexion.end();
            ok(id);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}

export function borrarColor(id){
    return new Promise((ok,ko)=>{
        const  conexion = conectar();

        conexion`DELETE FROM colores WHERE id= ${id}`
        .then (({count})=>{
            conexion.end();
            ok(count);
        })
        .catch(error=>{
            ko({error: " eror en la base de datos"});
        });

    });
}


