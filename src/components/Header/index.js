import React from 'react'
import logo from '../assets/logo.svg'
import './index.css'

const Header = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='options'>
            <h6 className='nav-heading' style={{ fontWeight:'500'}}>Already Registered? <span className='nav-heading' style={{color:'blue'}}> Login </span>here</h6>
        </div>
    </div>
  )
}

export default Header