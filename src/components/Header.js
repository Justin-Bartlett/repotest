import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header>
      <div className="logo">
        <p className="logo-start">weight</p><p className="logo-end">TRACKER</p>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
