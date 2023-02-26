import React from 'react'
import './HorizontalScroll.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function HorizontalScroll() {

  const [PopularITNews, setPopularITNews] = useState([])

  async function handlePopularITNews() {

    await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2b199577ba7d4962badd41f4e53e2f46").then((response) => {
      setPopularITNews(response.data.articles);
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
          <img src={PopularITNews[61]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[62]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[63]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[99]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[65]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[66]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[67]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[68]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[69]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[70]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[71]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[78]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[73]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[74]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[75]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[76]?.urlToImage}></img>
        </div>

      </div>
    </div>
  )
}

export default HorizontalScroll;