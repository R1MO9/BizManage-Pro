import React from 'react'
import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'
import { Outlet } from 'react-router-dom'

const layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default layout