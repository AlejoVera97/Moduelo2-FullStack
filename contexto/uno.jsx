import { useContext } from "react"
import { Contexto } from "./contexto"

function Uno(){

    let {estado,setEstado} = useContext(Contexto)
    

    return<>
    {estado?<h2> bla bla bla </h2> : <p>:(</p>}
    <button onClick={ ()=> setEstado(!estado)}>click</button>
    </>
}

export default Uno
