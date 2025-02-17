const postgres= requiere("postgres");


const conexion = postgres({
    host:"localgost",
    port:5432,
    database: "colores",
    user:"postgres",
    password: "admin"
});

conexion`SELECT * FROM colores`
.then(resultado => console.log (resultado))
.catch(error=> console.log(error))
.finally(()=> {
    conexion.end();
});
 