const {MongoClient} = require ("mongobd");
const urlMongo= "mongodb+srv://alejo:<admin>@colores.k1ldv.mongodb.net/";


MongoClient.connect(urlMongo)
.then(conexion=>{
    let coleccion = conexion.db("colores").collection("colores");

    coleccion.inserOne({r:123, g:1 , b:200})
    .then(resultado =>{
        console.log(resultado);
        conexion.close();

    });
});

