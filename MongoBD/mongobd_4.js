const {MongoClient} = require ("mongobd");
const urlMongo= "mongodb+srv://alejo:<admin>@colores.k1ldv.mongodb.net/";


MongoClient.connect(urlMongo)
.then(conexion=>{
    let coleccion = conexion.db("colores").collection("colores");

    let colores = [];

    for(let i=0 ; i<10 , i++){
        let [r,,g,b]=[0,0,0].map(()=>Math.floor(Math.random()*256));

        colores.push({r,g,b});
    }

    coleccion.insertMany(colores)
    .then(resultado =>{
        console.log(resultado);
        conexion.close();
    })
});
