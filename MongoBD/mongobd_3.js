const {MongoClient} = require ("mongobd");
const urlMongo= "mongodb+srv://alejo:<admin>@colores.k1ldv.mongodb.net/";


MongoClient.connect(urlMongo)
.then(conexion=>{
    let coleccion = conexion.db("colores").collection("colores");

    coleccion.find({}).toArray()
    .then(resultado =>{
        console.log(resultado);
        conexion.close();
    })
   
    
});

