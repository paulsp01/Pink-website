import React ,{useState,useEffect} from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import HeadingName from '../components/HeadingName'
import carousel from "../images/carousel3.jpg"

import { lazy } from 'react';


const Home = ({increase}) => {
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
        <Hero title="Big Fashion Sale" para="Upgrade your fashion style with our exclusive collection!" image={carousel}/>
         <HeadingName title="New Arrivals" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 px-10 py-2 '>
        {products?.slice(0, 4).map((item) => (
          <Card increase={increase} key={item.id} {...item} />
        ))}
      </div>
      <HeadingName title="Latest Deals" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 px-10 py-2 '>
        {products?.slice(10, 15).map((item) => (
          <Card increase={increase} key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Home