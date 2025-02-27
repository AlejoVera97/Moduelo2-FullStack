import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Numero from './Numero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Numero/>
  </StrictMode>,
)
