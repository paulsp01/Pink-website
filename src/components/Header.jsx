import React from 'react'
import logo from "../assets/pngwing.com.png"
import { NavLink } from 'react-router-dom'
// import Login from '../pages/Login.jsx'

const Header = () => {
  let [showpopup, setShowpopup] = React.useState(false)
//   function handleClick(){
//  setShowpopup(true)
//  return (<Login open={showpopup}/>)
//   }
  return (
    <header className="w-full h-20 shadow-lg px-10 flex justify-between items-center text-lg ">
       <div className=" flex items-center font-serif font-semibold"> 
        <img className='h-10' src={logo}/>
        <h1 className='text-sm text-[#f5428a]'>Pink</h1>
       </div>
        <ul className="flex justify-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f5428a] border-b-2 border-[#f5428a] pb-1"
                  : "text-gray-700 hover:text-[#f5428a] transition duration-300"
              }
            >
              Home
            </NavLink>
             <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#f5428a] border-b-2 border-[#f5428a] pb-1"
                  : "text-gray-700 hover:text-[#f5428a] transition duration-300"
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
                  ? "text-[#f5428a] border-b-2 border-[#f5428a] pb-1 "
                  : "text-gray-700 hover:text-[#f5428a] transition duration-300 "
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
                  ? "text-[#f5428a] border-b-2 border-[#f5428a] pb-1"
                  : "text-gray-700 hover:text-[#f5428a] transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex space-x-4">
            <button  className='border-2  rounded-lg py-2 px-4 border-[#f5428a] text-[#f5428a]'>Login</button>
            <button className='border-2 rounded-lg  py-2 px-4 border-[#f5428a] bg-[#f5428a] text-white'>Signup</button>
            </div>
    </header>
  )
}

export default Header