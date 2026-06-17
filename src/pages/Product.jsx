import React, {useState,useEffect} from 'react'
import Card from '../components/Card.jsx'
import illu from "../images/pngegg.png"

const Product = () => {
     const [products, setProducts]=useState([])
        const API="https://dummyjson.com/products"
    
        useEffect(()=>{
            async function callAPI(){
                try {
                    const data = await fetch(API)
                    const response=await data.json()
                    setProducts(response.products)
                    
                } catch (error) {
                    console.error("Something went wrong")
                }
            }
            callAPI()
        },[])
  return (
    <>
    <div className="relative  h-50 mt-10">
      <img className='h-50 absolute left-1/2 -translate-x-1/2 z-0  opacity-60' src={illu} alt=""/>
    <h1 className='text-4xl font-bold text-center mt-10 absolute z-9 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700'>Explore Your Favourite Products</h1>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 px-10 py-2'>
        
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
    </>
    
  )
}

export default Product