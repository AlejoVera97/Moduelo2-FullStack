const {MongoClient} = require ("mongobd");
const urlMongo= "mongodb+srv://alejo:<admin>@colores.k1ldv.mongodb.net/";


MongoClient.connect(urlMongo)
.then(conexion=>{
    let coleccion = conexion.db("colores").collection("colores");

    coleccion.find({ $or : [{ r : { $lt : 100 } },{ r : { $gt : 200 } }] }).toArray()
    .then(resultado =>{
        console.log(resultado);
        conexion.close();
    })
});

