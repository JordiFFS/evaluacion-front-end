import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RedSocial } from './RedSocial.jsx'
import './styles/Global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RedSocial />
    </BrowserRouter>
  </StrictMode>,
)
