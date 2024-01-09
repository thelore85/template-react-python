import React from 'react'
import NavDashboard from '../component/NavDashboard'
import Footer from '../component/Footer'

export default function DashboardLayout({children}) {
  return (
    <div>
      <NavDashboard />
      {children}
      <Footer />
    </div>
  );
};