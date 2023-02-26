import React from 'react'
import './Footer.css'
import { FaMailBulk } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Footer() {

  const [FooterNews, setFooterNews] = useState([])

  async function handleFooterNews() {

    await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2b199577ba7d4962badd41f4e53e2f46").then((response) => {
      setFooterNews(response.data.articles);
    })
  }

  useEffect(() => {
    handleFooterNews();
  }, [])

  return (
    <div className='footer'>
      <div className='div2 items_Div'>
        <h5>Technology</h5>
        <div className='Technology_Div flex_Div'>
          <img src={FooterNews[10]?.urlToImage}></img>
          <p>{FooterNews[10]?.title}</p>
        </div>
      </div>

      <div className='div3 items_Div'>
        <h5>Sports</h5>
        <div className='Sports_Div flex_Div'>
          <img src={FooterNews[11]?.urlToImage}></img>
          <p>{FooterNews[11]?.title}</p>
        </div>
      </div>

      <div className='div4 items_Div'>
        <h5>Entertainment</h5>
        <div className='Entertainment_Div flex_Div'>
          <img src={FooterNews[12]?.urlToImage}></img>
          <p>{FooterNews[12]?.title}</p>
        </div>
      </div>

    </div>
  )
}

export default Footer