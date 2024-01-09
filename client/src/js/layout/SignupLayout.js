import React from 'react'
import NavLogo from '../component/NavLogo'
import Footer from '../component/Footer'


export default function SignupLayout({children}) {
  return (
    <div>
      <NavLogo />    
      {children}
      <Footer />
    </div>
  );
};

