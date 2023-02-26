import React from 'react'
import './NewsOfTheDay.css'
import { useState, useEffect } from 'react';
import axios from 'axios'


function NewsOfTheDay() {

  const [News, setNews] = useState([])

  async function handlePopular() {

    await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2b199577ba7d4962badd41f4e53e2f46").then((response) => {
      setNews(response.data.articles);
    })
  }

  useEffect(() => {
    handlePopular();
  }, [])

  return (
    <div className='Card_Div'>

      <div className='Filter'>
        Filter
      </div>

      <div className='Popular'>
        <div className='Popular_Common'>
          <div>
            <img src={News[3]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>


        <div className='Popular_Common'>
          <div>
            <img src={News[3]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[3]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[3]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[1]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[1]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[1]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[1]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[1]?.urlToImage}></img>
          </div>

          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

        <div className='Popular_Common'>
          <div>
            <img src={News[1]?.urlToImage}></img>
          </div>
          <div>
            <h3>Hello</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias!</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default NewsOfTheDay