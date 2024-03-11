import React from 'react'
import Navbar from './components/navigation/Navbar'
import Footer from './components/Footer'
import PropTypes from 'prop-types'; // Importa PropTypes

export default function NavbarLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}
