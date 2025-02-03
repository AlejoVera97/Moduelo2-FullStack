 const express = require ("express");

 let estudiantes = [
    {id: 1 , nombre :" Alejo"},
    {id: 2, nombre : " Pedro"},
    {id: 3 , nombre : " Julio"},
    {id: 4 , nombre : " Maria"},
    {id: 5 , nombre : " Sergio"}
 ];

const servidor = express();

servidor.use(express.json());


servidor.use(express.static("./public"));

servidor.get ("/estudiantes", (peticion,respuesta)=>{
    respuesta.json(estudiantes); // json stringify
});

servidor.post("/estudiantes/nuevo",(peticion,respuesta)=>{

    let id=estudiantes.length>0?estudiantes[estudiantes.length-1].id+1:1;

    peticion.body.id =id;

    estudiantes.push(peticion.body);

    respuesta.json({id});

});

servidor.use((error,peticion,respuesta,siguiente)=>{
    respuesta.status(400);
    respuesta.json({error: "Error en la peticion"});
});




servidor.listen(3000);