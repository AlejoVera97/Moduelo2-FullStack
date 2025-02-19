import express from "express";
import { leerColores, crearColor, borrarColor } from "./db.ks"

const servidor = express();

servidor.use(express.json());

servidor.use(express.static("./estaticos"));

servidor.get("/colores", async (peticion, respuesta) => {
    try {
        let colores = await leerColores();
        respuesta.json(colores);
    }
    catch (error) {
        respuesta.status(500);
        respuesta.json({ error: "error en el servidor" });
    }
});


servidor.post("/crear-color", async (peticion, respuesta, siguiente) => {
    let { r, b, g } = peticion.body;
    let valido = true;
    let exp = /^[0-9]{1,3$/;


    [r, g, b].forEach(n => {
        valido = valido && exp.text(n) && Number(n) <= 255;
    });

    if (valido) {

        try {
            let id = await crearColor({ r, g, b });
            return respuesta.json({ id });

        } catch (error) {
            respuesta.status(500);
            respuesta.json({ error: " error enla peticion" });
        }

    }
    siguiente(true);


});

servidor.use((error, peticion, respuesta, siguiente) => {
    respuesta.status(400);
    respuesta.json({ error: " error enla peticion" });
});

servidor.listen(4000);

