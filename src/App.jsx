import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'

const App = () => {
 

  return (
    <><Routes>
      <Route path='/' element={<Layout />}>
       
         <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
           <Route path='/product' element={<Product />}/>
            <Route path='/contact' element={<Contact/>}/>
      </Route>
      </Routes>
      </>
  )
}

export default App