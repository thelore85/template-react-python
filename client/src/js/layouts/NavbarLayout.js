import React from 'react'
import Navbar from './components/navigation/Navbar'
import Footer from './components/Footer'

export default function NavbarLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}
