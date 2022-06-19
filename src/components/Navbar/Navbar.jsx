import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar__left">
            <span className="navbar__left__title">ATools.</span>
        </div>
        <div className="navbar__right">
            <a className='btn btn-first'>Start Free Trial</a>
            <a className='btn btn-second'>Login</a>
        </div>
    </div>
  )
}

export default Navbar