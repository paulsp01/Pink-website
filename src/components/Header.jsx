import React, { useContext } from 'react'
import logo from "../assets/pngwing.com.png"
import { NavLink } from 'react-router-dom'
 import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import cart from "../images/cart.png"
import { CartContext } from '../productContextAPI/CartContext.jsx'

const Header = () => {
  let [showloginpopup, setShowloginpopup] = React.useState(false)
    let [showsignuppopup, setShowsignuppopup] = React.useState(false)
    let {count}=useContext(CartContext)
   
  function handleLoginClick(){
 setShowloginpopup(true)

  }
   function handleSignupClick(){
 setShowsignuppopup(true)

  }

 
  return (
    <header className=" fixed top-0 left-0 z-20 bg-white w-full h-20 shadow-lg px-10 flex justify-between items-center text-lg ">
       <div className=" flex items-center font-serif font-semibold"> 
        <img className='h-10' src={logo}/>
        <h1 className='text-sm text-[#f5428a]'>Pink</h1>
       </div>
        <ul className="flex justify-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f5428a] font-semibold opacity-80 border-b-2 border-[#f5428a] pb-1"
                  : "text-purple-600 font-semibold opacity-80 hover:text-[#f5428a] transition duration-300"
              }
            >
              Home
            </NavLink>
             <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f5428a] font-semibold opacity-80 border-b-2 border-[#f5428a] pb-1"
                  : "text-purple-600 font-semibold opacity-80 hover:text-[#f5428a] transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
             <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f5428a] font-semibold opacity-80 border-b-2 border-[#f5428a] pb-1 "
                  : "text-purple-600 font-semibold opacity-80 hover:text-[#f5428a] transition duration-300 "
              }
            >
              Products
            </NavLink>
          </li>
             <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f5428a] font-semibold opacity-80 border-b-2 border-[#f5428a] pb-1"
                  : "text-purple-600 font-semibold opacity-80 hover:text-[#f5428a] transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
       
        <div className="flex space-x-4">
          <div className="relative">
             <img  className="h-10" src={cart}/>
             <h1 className='absolute text-xs bg-[#f5428a] rounded-full p-1 px-2 -top-2 -right-2 text-white'>{count}</h1>
          </div>
            <button onClick={handleLoginClick} className='border-2  rounded-lg py-2 px-4 border-[#f5428a] text-[#f5428a]'>Login</button>
            <button onClick={handleSignupClick} className='border-2 rounded-lg  py-2 px-4 border-[#f5428a] bg-[#f5428a] text-white'>Signup</button>
            </div>


            {showloginpopup && (
               <div className="absolute top-50 z-14 left-1/2 -translate-x-1/2 bg-black/50 flex items-center justify-center">
    <Login showloginpopup={showloginpopup} setShowloginpopup={setShowloginpopup} />
  </div>
            )}

            
            {showsignuppopup && (
               <div className="absolute top-30 z-14 left-1/2 -translate-x-1/2 bg-black/50 flex items-center justify-center">
    <Signup showsignuppopup={showsignuppopup} setShowsignuppopup={setShowsignuppopup}/>
  </div>
            )}
    </header>
  )
}

export default Header