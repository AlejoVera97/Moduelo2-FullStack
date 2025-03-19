import { useState } from "react";
import Tarea from "./Tarea";

function Formulario({ crearTarea }) {
  let [textoInput, setTextoInput] = useState("")


  return (
    <frorm onSubmit={evento => {
      evento.preventDefault()
      if (textoInput.trim() != "") {
        crearTarea({ id: Math.random() * 4000, tarea: "hola", estado: false })
      }
    }}
    >
      <input type="text" placeholder="que hay que hacer?" value={textoInput} onChange={evento => setTextoInput(evento.target.value)} />
      <input type="submit" value="crear tarea" />
    </frorm>
  )
}

export default Formulario;
