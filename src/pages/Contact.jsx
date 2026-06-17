import React from 'react'
import illu from "../images/illu2.png"

const Contact = () => {
  return (
    <div className="flex   justify-center h-auto  ">
      <div className="flex items-center justify-center mt-10 shadow-lg shadow-purple-600 w-[75%] rounded-lg     h-auto">
        <div className=" bg-[#f5428a]  rounded-lg w-full  flex flex-col items-center py-10 px-6 justify-between space-y-4">
      {<img src={illu} alt="Illustration" className="w-100 h-full object-cover" />}
     <div >
       <h1 className="text-center text-4xl font-bold text-white">Contact Us</h1>
      <p className="text-center text-lg text-white">We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
     </div>
      <button className="bg-white w-1/2 text-purple-600 font-semibold py-2 px-4 rounded">Know More</button>
      </div>
      <div className=" bg-white w-full py-5 rounded-lg   flex flex-col justify-between items-center space-y-2">
       <h1 className='text-4xl font-bold text-[#f5428a]'>Contact Details</h1>
       <p>support@gmail.com</p>
        <form className="flex flex-col space-y-4" >
          
          <div>
            <label className='text-[#f5428a] font-semibold' >Name</label>
            <input className='w-full outline-none focus:ring-2 focus:ring-purple-500 p-3 border rounded-md' type='text' placeholder='Type your full name' />
          </div>
          <div>
            <label className='text-[#f5428a] font-semibold' >Email</label>
            <input  className='w-full outline-none focus:ring-2 focus:ring-purple-500 p-3 border rounded-md' type='email' placeholder='xyz@gmail.com' />
          </div>
          <div>
            <label className='text-[#f5428a] font-semibold' >How we can help you?</label>
           <textarea
  rows="4"
  placeholder="Enter your messages here..."
  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
></textarea>
          </div>
        
        </form>
        
                <button type="submit" className="bg-purple-600 font-semibold text-white px-10 py-2 rounded-md ">Send Messages</button>
               
           
  
      </div>
      </div>
    </div>
  )
}

export default Contact