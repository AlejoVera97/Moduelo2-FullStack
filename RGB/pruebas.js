import { leerColores,crearColor} from "./db";

/*
leerColores()
.then(x=> console.log(x))
.catch(x=> console.log(x));
*/


crearColores({r:234, g:190 , b:200})
.then(x=> console.log(x))
.catch(x=> console.log(x));