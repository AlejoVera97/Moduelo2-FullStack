import { useState } from 'react'

function Tarea({id,tarea,estado,borrarTarea,editarEstado,editarTexto}) {

  let [editanto, setEditanto] = useState(false)
  let [tareaTemporal,setTareaTemporal] = useState(tarea)


  return (
    <>
     
        <div className="tarea">
          <h2 className={!editanto ? "guardar" : "editar"}>{tarea}</h2>
          <input className={editanto ? "guardar" : "editar"} type="text" value={tareaTemporal} onChange={evento => setTareaTemporal(evento.target.value)}/>
          <button className="boton" onClick={()=>{

            if(tareaTemporal.trim() != "" && tareaTemporal.trim() != tarea){
              let nuevaTarea = tareaTemporal.trim()
              editarTexto(id,nuevaTarea)
              setTareaTemporal(nuevaTarea)
            }

            setEditanto(!editanto)
          }}>{editanto ? "guardar" : "editar"}</button>
          <button className="boton" onClick ={()=>borrarTarea(id)} >Borrar</button>
          <button className={`estado ${estado? " terminada" : ""}`}onClick ={()=>editarEstado(id)}><span></span></button>
        </div> 
      
    </>
  )
}
export default Tarea
