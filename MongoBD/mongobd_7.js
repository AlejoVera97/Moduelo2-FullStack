const {MongoClient,ObjectId} = require ("mongobd");
const urlMongo= "mongodb+srv://alejo:<admin>@colores.k1ldv.mongodb.net/";


MongoClient.connect(urlMongo)
.then(conexion=>{
    let coleccion = conexion.db("colores").collection("colores");

    coleccion.updateOne({_id: new ObjectId(`admin`) }),{$set: {r:0, g:0}}
    .then(resultado =>{
        console.log(resultado);
        conexion.close();
    })
});

