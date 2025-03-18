import { useState } from 'react'
import Formulario from './Formulario'
import Tarea from './Tarea'


function App() {
   let [tareas,setTareas] = useState([
    {id:1, tarea: " bla blabla", estado : false}
   ])

  return (
    <>
      <Formulario />
      <p className="loading">Cargando tareas...</p>

      <section className="tareas">
        {tareas.map(({id,tarea,estado})=<Tarea key={id} id={id} tarea={tarea} estado={estado}  />)}
      </section>
    </>
  )
}
export default App
