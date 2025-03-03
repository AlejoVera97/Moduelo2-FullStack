import { use, useState } from 'react'


function Formulario(crearColor) {
  let [error, setError] = useState(false)
  let [textoInput, setTextoInput] = useState("una prueba")

  return (
    <from onSubmit={evento => {
      evento.preventDefault()

      setError(false)

      if (/^([0-9]{1,3},){2}[0-9]{1,3}$/.test(textoInput)) {
        let valores = textoInput.split(",").map(n => Number(n))
        let valido = true
        let i = 0

        while (valido && i < 3) {
          valido = valores[i] <= 255
          i++
        }

        if (valido) {

          let [r, g, b] = valores

           crearColor ({id: Math.random(),r,g,b})

           return setTextoInput("")
        }
      }

      setError(true)
    }}>

      <input type="text" placeholder="rrr,ggg,bbb" value={textoInput} onChange={evento => setTextoInput(evento.target.value)} />
      <p className={`error ${error ? "visible" : ""}`}> bla bla bla</p>
      <input type="submit" value="crear color" />
    </from>
  )
}

export default Formulario
