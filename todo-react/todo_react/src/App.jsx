import { useState } from 'react'
import Formulario from './Formulario'
import Tarea from './Tarea'


function App() {
   let [tareas,setTareas] = useState([
    {id:1, tarea: " bla blabla", estado : false}
   ])

function crearTarea(tarea){
  setTareas([...tareas,tarea])
}

function borrarTarea(id){
  setTareas(tareas.filter(tarea => tarea.id != id))
}

function editarEstado(id){
  setTareas(tareas.map(tarea=>{
    if(tarea.id == id){
      tarea.estado =!tarea.estado
    }
    return tarea
  }))
}

function editarTexto(id,texto){
  setTareas(tareas.map(tarea=>{
    if(tarea.id == id){
      tarea.tarea =!texto
    }
    return tarea
  }))
}

  return (
    <>
      <Formulario crearTarea ={crearTarea} />
      <p className="loading">Cargando tareas...</p>

      <section className="tareas">
        {tareas.map(({id,tarea,estado})=<Tarea key={id} id={id} tarea={tarea} estado={estado} 
        borrarTarea ={borrarTarea}
        editarEstado={editarEstado}
        editarTexto ={editarTexto}
        />)}
        
      </section>
    </>
  )
}
export default App
