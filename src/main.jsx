import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@fontsource-variable/roboto-flex"
import './index.css'

import Root from './pages/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <Root />
  </StrictMode>,
)
