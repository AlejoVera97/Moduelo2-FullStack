const postgres = requiere("postgres");

servidir. get("/estudiantes", async (peticion, respuesta)=>{
    const conexion= postgres({
        host: " localhost",
        database: "colegio",
        user : "postgres",
        password: "root"
    });
    try{
        let estudiantes = await conexion `SELECT * FROM estudiantes WHERE edad <= 30 `;

        conexion.end();
        respuesta.json(estudiantes);
    }
    catch(error){
        respuesta.status(500);
        respuesta.error.json({error : ":("});
    }
})