import React from 'react'
import Hero from '../components/Hero'
import carousel from "../images/carousel4.jpg"

const About = () => {
  return (
    <div>
       <Hero title="About Us" para="Your one-stop destination for quality products at affordable prices." image={carousel} />
      <div className=" px-4 py-8 mt-10">
         <h1 className="text-6xl font-bold text-center mt-10 ">Our Story</h1>
       <p className="text-xl text-center mt-4">We started with a simple goal: to make online shopping easy,
convenient, and accessible for everyone.</p>
      </div>
        
    </div>
  )
}

export default About