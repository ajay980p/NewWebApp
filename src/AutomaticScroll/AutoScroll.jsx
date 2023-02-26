import React from 'react'
import Image2 from '../Images/image2.png'
import './AutoScroll.css'

function AutoScroll() {
  return (
    <div className='Slider'>
      <div className='Slide-track'>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>

        {/* **************** */}

        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
        <div className='item'><img src={Image2}></img></div>
      </div>
    </div >
  )
}

export default AutoScroll