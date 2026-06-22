import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './productContextAPI/ProductContextAPI.jsx'
import { CartProvider } from './productContextAPI/CartContext.jsx'

createRoot(document.getElementById('root')).render(
 <CartProvider>
   <ProductProvider>
 <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </ProductProvider>
 </CartProvider>
 
)
