const postgres= requiere("postgres");


const conexion = postgres({
    host:"localgost",
    port:5432,
    database: "colores",
    user:"postgres",
    password: "admin"
});

conexion`INSERT INTO colores(r,g,b) VALUES (${120},${200},${190})RETURNING id`
.then(resultado => console.log (resultado))
.catch(error=> console.log(error))
.finally(()=> {
    console.log("..finally");
    conexion.end();
});
 