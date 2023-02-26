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
          <img src={PopularITNews[1]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[2]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[3]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[4]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[5]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[6]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[7]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[8]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[9]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[10]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[11]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[12]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[13]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[14]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[15]?.urlToImage}></img>
        </div>

        <div className='items'>
          <img src={PopularITNews[16]?.urlToImage}></img>
        </div>

      </div>
    </div>
  )
}

export default HorizontalScroll;