import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Principal from './principal'

let datos ={
  x: " algo",
  y: true,
  z:["cosas","en","un","array"]
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal/>
  </StrictMode>,
)
