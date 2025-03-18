import { useState } from 'react'

function Tarea({id,tarea,estado}) {

  return (
    <>
     
        <div className="tarea">
          <h2 className="visible">Tarea</h2>
          <input type="text" value="Aprender React" readOnly />
          <button className="boton">Editar</button>
          <button className="boton">Borrar</button>
          <button className={`estado ${estado? " terminada" : ""}`}><span></span></button>
        </div> 
      
    </>
  )
}
export default Tarea
