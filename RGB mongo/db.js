import { Mongoclient, ObjetId } from "mongodb";

const urlMongo = "mongodb+srv://alejo:<admin>@colores.k1ldv.mongodb.net/";

function conectar() {
    return MongoClient.connect(urlMongo);
}

export function leerColores() {
    return new Promise((resolve, reject) => {
        conectar()
            .then(conexion => {
                let coleccion = conexion.db("colores").collection("colores");

                return coleccion.find({}).toArray()
                    .then(colores => {
                        conexion.close(); // Cerrar conexión después de obtener datos
                        resolve(colores);
                    })
                    .catch(error => {
                        conexion.close(); // Cerrar conexión en caso de error en la consulta
                        reject({ error: "Error al obtener los colores" });
                    });
            })
            .catch(error => {
                reject({ error: "Error en la conexión a la base de datos" });
            });
    });
}





export function crearColor({ r, g, b }) {
    return new Promise((ok, ko) => {
        const conexion = conectar();

        conexion`INSERT INTO colores (r,g,b) VALUES (${r}, ${g},${b}) RETURNING id`
            .then(([{ id }]) => {
                conexion.end();
                ok(id);
            })
            .catch(error => {
                ko({ error: " eror en la base de datos" });
            });

    });
}

export function borrarColor(id) {
    return new Promise((ok, ko) => {
        const conexion = conectar();

        conexion`DELETE FROM colores WHERE id= ${id}`
            .then(({ count }) => {
                conexion.end();
                ok(count);
            })
            .catch(error => {
                ko({ error: " eror en la base de datos" });
            });

    });
}


