import React from 'react'

const Card = ({ id,
  title,
  description,
  category,
  price,
  discountPercentage,
  thumbnail,increase
  }) => {


    const [isActive,setIsActive]=React.useState(false)
    function handleClick(){
      setIsActive(!isActive)
    }
  return (
    <div className='rounded-lg shadow-lg shadow-[#7607de] bg-[linear-gradient(160deg,#f5428a_50%,#faf5f5_50%)] h-auto flex flex-col items-center justify-center p-4 space-y-4 hover:scale-105 transition-transform duration-300 '>
      <div className="flex items-center justify-between w-full">
        <div className="bg-black/50 text-white py-1 px-3 rounded-xl">⭐ Popular</div>
        <button onClick={handleClick} className="text-2xl cursor-pointer ">
          {isActive ? '💜' : '🤍'}
        </button>
      </div>
        <div>
      <h1 className="text-xl font-bold ">{title}</h1>
     <p className="text-white text-sm ">{description}</p>
     </div>
    <div className="overflow-hidden rounded-full cursor-pointer">
  <img
    className="object-cover  p-1 h-40 bg-amber-100 transition-transform duration-500 hover:scale-120"
    src={thumbnail}
    alt={title}
  />
</div>
   
     <h3 className="text-base font-semibold capitalize px-4 bg-purple-200 rounded-lg text-[#6922ab]">{category}</h3>
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between ">  
         <h2 className="text-2xl font-bold">${price.toFixed(2)}</h2>
     <h2 className="text-sm text-red-600 px-4 bg-red-200 rounded-lg">-{discountPercentage}% off</h2>
      </div>
      <div >
        <h1 >⭐⭐⭐⭐⭐{" "}<span className=" text-gray-600">4.9(98)</span></h1>
      </div>
    </div>
    <button onClick={increase} className=' cursor-pointer w-full rounded-xl py-2 px-4  bg-gradient-to-r
from-violet-600
to-purple-700
transition-all
duration-300
hover:shadow-[0_0_20px_rgba(139,92,246,0.7)]
hover:scale-95 text-white'>Add to Cart</button>
    
    </div>
  )
}

export default Card