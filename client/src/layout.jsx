import React from 'react'
import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'

const layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout