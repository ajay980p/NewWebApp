import React from 'react'
import './HorizontalScroll.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function HorizontalScroll() {

  const [PopularITNews, setPopularITNews] = useState([])

  async function handlePopularITNews() {

    await axios.get("https://dna-bvdf.onrender.com/latest-news").then((response) => {
      setPopularITNews(response.data);
    })
  }

  useEffect(() => {
    handlePopularITNews();
  }, [])

  return (
    <div className='HorizontalScrollableDiv'>
      <h2>Top Tech News of The Day</h2>
      <div className='wrapper'>

        <div className='items'>
          <img src={PopularITNews[1]?.imgUrl}></img>
        </div>


        <div className='items'>
          <img src={PopularITNews[2]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[3]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[4]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[5]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[6]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[7]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[8]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[9]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[10]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[11]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[12]?.imgUrl}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[13]?.imgUrl}></img>
        </div>

      </div>
    </div>
  )
}

export default HorizontalScroll;