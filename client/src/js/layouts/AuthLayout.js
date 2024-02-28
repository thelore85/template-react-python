import React from 'react'
import NavLogo from './components/navigation/NavLogo'
import Footer from './components/Footer'


export default function AuthLayout({children}) {
  return (
    <div>
      <NavLogo />    
      {children}
      <Footer />
    </div>
  );
};

