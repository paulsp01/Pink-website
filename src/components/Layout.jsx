import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = ({count}) => {
  return (
    <>
    <Header count={count} />
    <div className='mt-20'>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout