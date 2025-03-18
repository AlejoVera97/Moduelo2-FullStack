import { useState } from "react";

function Formulario() {
  

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <input type="submit" value="Crear tarea" />
    </form>
  );
}

export default Formulario;
