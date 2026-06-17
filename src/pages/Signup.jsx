import React from 'react'

const Signup = ({showsignuppopup,setShowsignuppopup}) => {
      function handlesignupClose(){
 setShowsignuppopup(false)

  }
  return (
    <div className='realtive w-100 h-auto shadow-md bg-white py-6 px-10  flex flex-col justify-between items-center rounded-md'>
        <h1 className='text-3xl text-pink-600 font-bold'>Signup</h1>
        <button onClick={handlesignupClose} className=' text-gray-500 border border-purple-600 rounded-full w-8  h-8 cursor-pointer absolute right-6 top-4 text-sm'>X</button>
        <form >
           <div className='my-2'><label className='text-lg text-pink-600'>Username</label>
            <input  className='w-full outline-none focus:ring-2 focus:ring-purple-500 p-3 border rounded-md'  type='text' placeholder='Username'/></div>
            <div className='mt-4'> <label className='text-lg text-pink-600'>Email</label>
            <input  className='w-full outline-none focus:ring-2 focus:ring-purple-500 p-3 border rounded-md' type='email' placeholder='xyz@gmail.com'/></div>
            <div className='mt-4'><label className='text-lg text-pink-600'>Password</label>
            <input className='w-full outline-none focus:ring-2 focus:ring-purple-500 p-3 border rounded-md'  type='password' placeholder='fdggf45'/></div>
             <div className='mt-4'><label className='text-lg text-pink-600'>Confirm Password</label>
            <input className='w-full outline-none focus:ring-2 focus:ring-purple-500 p-3 border rounded-md'  type='password' placeholder='fdggf45'/></div>
        </form>
        <button onClick={handlesignupClose} className='bg-purple-600 text-white my-4 px-6 py-2 font-semibold rounded-md'>Signup</button>
        <p className='text-xs text-purple-600'>Already have an account? <span className='text-pink-600'>Click here</span></p>
    </div>
  )
}

export default Signup