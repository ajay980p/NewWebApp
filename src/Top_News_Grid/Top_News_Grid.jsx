import React from 'react'
import './Top_News_Grid.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Top_news_Grid() {

  const [TopNews, setTopNews] = useState([])

  async function handleClick() {

    await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2b199577ba7d4962badd41f4e53e2f46").then((response) => {
      setTopNews(response.data.articles);
    })
  }

  useEffect(() => {
    handleClick();
  }, [])


  return (
    <div className='container'>
      <div className='TopNewsImage_1'>
        <img src={TopNews[42]?.urlToImage}></img>
      </div>

      <div className='TopNewsImage_2'>
        <div className='common_properties_1 Special_Property_1'>
          <div className='Image_1_1 common_properties_2'>
            <img src={TopNews[2]?.urlToImage}></img>
          </div>
          <div className='Image_1_2 common_properties_2'>
            <img src={TopNews[3]?.urlToImage}></img>
          </div>
        </div>

        <div className='common_properties_1 Special_Property_2'>
          <div className='Image_2_1 common_properties_2'>
            <img src={TopNews[4]?.urlToImage}></img>
          </div>

          <div className='Image_2_2 common_properties_2'>
            <img src={TopNews[5]?.urlToImage}></img>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Top_news_Grid;