import React from 'react'
import { createContext,useEffect,useState } from 'react'

export const ProductContext=createContext()
export const ProductProvider= ({children}) => {
    let [products, setProducts]=useState([])
    const URL="https://dummyjson.com/products"


    useEffect(()=>{
    async function callAPI(){
        try {
            const response=await fetch(URL);
            const data=await response.json();
            setProducts(data.products);
            
        } catch (error) {
            console.log(error.message)
        }
    }
    callAPI();
    },[])
  return (
    <ProductContext.Provider value={{products}}>
        {children}

    </ProductContext.Provider>
  )
}

