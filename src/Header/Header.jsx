import React from 'react'
import LogoImg from '../Images/logo.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img src={LogoImg} />
    </div>
  )
}

export default Header