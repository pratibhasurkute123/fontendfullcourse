import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './assets/components/Navbar.jsx'
import Product from './assets/components/Product.jsx'
import Services from './assets/components/Services.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />

    </BrowserRouter>



  </StrictMode>,
)
