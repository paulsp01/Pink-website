import React from 'react'

const Hero = ({ title, para, image }) => {
  return (
    <div className="relative w-full h-screen">
      
    
      <img
        src={image}
        alt="hero"
        className="w-full h-full object-cover"
      />

     
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white text-7xl font-bold">{title}</h1>
        <p className="text-white text-3xl">{para}</p>

        <button className="bg-[#f5428a] text-white py-2 px-4 rounded-lg hover:bg-gray-200 hover:text-purple-600 text-xl">
          Shop Now
        </button>
      </div>

    </div>
  )
}

export default Hero