import { useState } from 'react'


function App() {
  let [rojo, setRojo] = useState(0)
  let [verde, setVerde] = useState(0)
  let [azul, setAzul] = useState(0)

  return (
    <section class="contenedor">
      <div
        className="color"
        style={{ backgroundColor: `rgb(${rojo},${verde},${azul})` }}
      ></div>

      {[setRojo, setVerde, setAzul].map((setColor, i) => (
        <input
          key={i}
          type="range"
          min="0"
          max="255"
          onChange={evento => setColor(evento.target.value)}
        />
      ))}

    </section>
  )
}

export default App
