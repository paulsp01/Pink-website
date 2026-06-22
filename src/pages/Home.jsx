import React ,{useState,useEffect,useContext} from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import HeadingName from '../components/HeadingName'
import carousel from "../images/carousel3.jpg"
import { ProductContext } from "../productContextAPI/ProductContextAPI.jsx";


const Home = () => {
    const {products} = useContext(ProductContext);
  return (
    <>
        <Hero title="Big Fashion Sale" para="Upgrade your fashion style with our exclusive collection!" image={carousel}/>
         <HeadingName title="New Arrivals" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 px-10 py-2 '>
        {products?.slice(0, 4).map((item) => (
          <Card  key={item.id} {...item} />
        ))}
      </div>
      <HeadingName title="Latest Deals" />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 px-10 py-2 '>
        {products?.slice(10, 15).map((item) => (
          <Card  key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}

export default Home