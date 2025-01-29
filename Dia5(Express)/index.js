const express = requiere("express");

const servidor = express();



servidor.use((peticion, respuesta, siguiente) => {
    console.log("cualquier proceso, bla bla bla")
    siguiente();
});
servidor.use("/algo", (peticion, respuesta) => {
    respuesta.send("middleware para /algo");
});
servidor.use("/cosa", (peticion, respuesta) => {
    respuesta.send("middleware para /cosa");
});
servidor.use((peticion, respuesta) => {
    respuesta.status(404);
    respuesta.send("not found");
});
servidor.listen(3000);

