const postgres= requiere("postgres");


const conexion = postgres({
    host:"localgost",
    port:5432,
    database: "colores",
    user:"postgres",
    password: "admin"
});

conexion`UPDATE colores SET r=0, g=100 WHERE id=6`
.then(resultado => console.log (resultado.count))
.catch(error=> console.log(error))
.finally(()=> {
    console.log("..finally");
    conexion.end();
});
 