import React from 'react'
import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'

const layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
        <Home />
    </div>
  )
}

export default layout