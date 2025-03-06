import express from "express";

function esPangrama(frase){
    const abc = " a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z".split("");
    let valido=true;
    let i=0;
    
    while(valido && i< abc.lenght){
        let expr =new RegExp(abc[i],"i");
        valido = expr.test(frase);
        i++;
    }
    return valido;
}

const servidor = express();


servidor.use("",express.static("./pruebas"))

servidor.post("/nueva/frase",(peticion,respuesta)=>{
    
    let{frase} = peticion.body;

    if(!frase || frase.trim() == ""){
        return siguiente(true);
    }
    
    
    respuesta.json({respuesta:esPangrama(frase)});
});

servidor.use((error,peticion,respuesta,siguiente)=>{
    respuesta.status(400);
    respuesta.json({error:" error en la peticion"});
})

servidor.use((peticion,respuesta)=>{
    respuesta.status(404);
    respuesta.json({error: " recuerso no encontrado"});
})

servidor.listen(4000);