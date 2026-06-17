import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'

const App = () => {
  let [count,setCount]=React.useState(0)
  function increase(){
    setCount(count+1)
  }

  return (
    <><Routes>
      <Route path='/' element={<Layout count={count}/>}>
       
         <Route index element={<Home increase={increase}/>}/>
          <Route path='/about' element={<About/>}/>
           <Route path='/product' element={<Product increase={increase}/>}/>
            <Route path='/contact' element={<Contact/>}/>
      </Route>
      </Routes>
      </>
  )
}

export default App