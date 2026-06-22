import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext=createContext()

export const CartProvider = ({children}) => {
    let [count,setCount] = useState(0)
     function increase(){
          setCount(count+1)
        }
    
  return (
<CartContext.Provider value={{count,increase}}>
{children}
</CartContext.Provider>
  )
}

