import React from 'react'
import './Footer.css'
import { FaMailBulk } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Footer() {

  const [FooterNews, setFooterNews] = useState([])

  async function handleFooterNews() {

    await axios.get("https://dna-bvdf.onrender.com/latest-news").then((response) => {
      setFooterNews(response.data);
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
          <img src={FooterNews[1]?.imgUrl}></img>
          <p>{FooterNews[1]?.title}</p>
        </div>
      </div>

      <div className='div3 items_Div'>
        <h5>Sports</h5>
        <div className='Sports_Div flex_Div'>
          <img src={FooterNews[2]?.imgUrl}></img>
          <p>{FooterNews[2]?.title}</p>
        </div>
      </div>

      <div className='div4 items_Div'>
        <h5>Entertainment</h5>
        <div className='Entertainment_Div flex_Div'>
          <img src={FooterNews[3]?.imgUrl}></img>
          <p>{FooterNews[3]?.title}</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
