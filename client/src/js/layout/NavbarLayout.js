import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

export default function NavbarLayout({children}) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}
