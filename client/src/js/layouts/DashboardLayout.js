import React from 'react'
import NavDashboard from './components/navigation/NavDashboard'
import Footer from './components/Footer'

export default function DashboardLayout({children}) {
  return (
    <div>
      <NavDashboard />
      {children}
      <Footer />
    </div>
  );
}