import React from 'react'
import './Footer.css'
import { FaMailBulk } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";


function Footer() {
  return (
    <div className='footer'>
      <div className='div1 items'>
        <h5>Title 1</h5>
        <img></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reprehenderit!</p>
        <FaMailBulk /><span> example@example.com</span> <br />
        <BsFillTelephonePlusFill /> <span> +91 1234567890</span>
      </div>

      <div className='div2 items'>
        <h5>Technology</h5>
      </div>

      <div className='div3 items'>
        <h5>Sports</h5>
      </div>

      <div className='div4 items'>
        <h5>Entertainment</h5>
      </div>

    </div>
  )
}

export default Footer