import React from 'react'
import './Top_News_Grid.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Top_news_Grid() {

  const [News, setNews] = useState([])

  async function handleClick() {

    await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2b199577ba7d4962badd41f4e53e2f46").then((response) => {
      setNews(response.data.articles);
    })
  }

  useEffect(() => {
    handleClick();
  }, [])


  return (
    <div className='container'>

      <div className='NewsGrid'>
        <div className='Grid_1'>
          <img src={News[1]?.urlToImage}></img>
          <p>Title : {News[1]?.title}</p>
        </div>

        {/* ******************************* */}

        <div className='Grid_2_Parent'>
          <div className='Sub_Grid_2_Child1'>
            <img src={News[3]?.urlToImage}></img>
            <p>Title : {News[3]?.title}</p>
          </div>

          {/* ***************************** */}

          <div className='Sub_Grid_2_Child2'>
            <div className='Sub_Grid_2_Child2_1'>
              <img src={News[3]?.urlToImage}></img>
              <p>Title : {News[3]?.title}</p>
            </div>

            <div className='Sub_Grid_2_Child2_2'>
              <img src={News[4]?.urlToImage}></img>
              <p>Title : {News[4]?.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Top_news_Grid;