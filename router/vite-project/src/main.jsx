import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inicio from './Inicio'
import Uno from './Uno'
import Dos from './Dos'
import Tres from './Tres'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>
  },
  {
    path: "/uno",
    element: <Uno/>
  },
  {
    path: "/dos",
    element: <Dos/>
  },
  {
    path: "/tres",
    element: <Tres/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <h1> x cosa</h1>
  </StrictMode>,
)
