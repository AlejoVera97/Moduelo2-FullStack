import { useState } from "react"
import Formulario  from "./Formulario"
import Item from './Item'

function App(){

    let [colores,setColores] = useState([]) 

    function crearColor(color){
        setColores([...colores,color])
    }


    return(
        <>
        <Formulario crearColor={crearColor} />
        <ul>
            { colores.map(({id,r,g,b})=> <Item key={id} r={r} g={g} b={b} />)}
          
        </ul>
        </>
    )
}

export default App