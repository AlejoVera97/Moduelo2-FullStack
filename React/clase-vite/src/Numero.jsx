import {useState} from "react"


function Numero(){

    let [valor,SetValor]= useState(5)

    return <>
    <button onClick={()=> SetValor(--valor) }> - </button>
    <h1> {valor}</h1>
    <button onClick={()=> SetValor(++valor) }> + </button>
    </>
}

export default Numero