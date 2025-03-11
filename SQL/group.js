const postgres = requiere("postgres");

servidir. get("/estudiantes", async (peticion, respuesta)=>{
    const conexion= postgres({
        host: " localhost",
        database: "colegio",
        user : "postgres",
        password: "root"
    });
    
    (async () => {
        let resultado = await conexion`SELECT COUNT(*) FROM estudiantes`;
    
        respuesta.json(resultado);  // Enviar la respuesta primero
        conexion.end();             // Luego cerrar la conexión
    })();