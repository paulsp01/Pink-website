import React from 'react'
import Hero from '../components/Hero'
import carousel from "../images/carousel4.jpg"
import img from "../images/carousel2.jpg"

const About = () => {
  return (
    <div>
       <Hero title="About Us" para="Your one-stop destination for quality products at affordable prices." image={carousel} />
      <div className=" px-4 py-8 mt-10">
         <h1 className="text-6xl font-bold text-center mt-10 ">Our Story</h1>
         <div className="w-full flex p-8 py-10  justify-center gap-15 ">
       <p className="text-xl w-1/2 mt-4">
         

Welcome to our Pink  E-Commerce platform! Our goal is to provide a simple, fast, and enjoyable online shopping experience. We offer a wide range of quality products with a clean and user-friendly interface, making it easy for customers to browse, explore, and add their favorite items to the cart.

This website is built using modern web technologies, including **React**, **React Router**, and **Context API**, to ensure smooth navigation, efficient state management, and a responsive design across all devices. We are committed to continuously improving the platform by adding new features and enhancing the overall user experience.

       </p>
       <div >
        <img src={img} className='w-130'/>
       </div>
       </div>

      </div>
        
    </div>
  )
}

export default About