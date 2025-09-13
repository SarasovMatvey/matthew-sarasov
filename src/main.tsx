import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Resume from './components/Resume/Resume'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
)
