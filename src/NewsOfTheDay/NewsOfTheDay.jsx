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
          <div className='images'>
            <img src={News[43]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[43]?.title}
            </h3>
            <p className='desc'>{News[43]?.description}</p>
            <p className='author'>Author : {News[43]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[44]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[44]?.title}
            </h3>
            <p className='desc'>{News[44]?.description}</p>
            <p>Author : {News[44]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[45]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[45]?.title}
            </h3>
            <p className='desc'>{News[45]?.description}</p>
            <p>Author : {News[45]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[46]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[46]?.title}
            </h3>
            <p className='desc'>{News[46]?.description}</p>
            <p>Author : {News[46]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[47]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[47]?.title}
            </h3>
            <p className='desc'>{News[47]?.description}</p>
            <p>Author : {News[47]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[48]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[48]?.title}
            </h3>
            <p className='desc'>{News[48]?.description}</p>
            <p>Author : {News[48]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[49]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[49]?.title}
            </h3>
            <p className='desc'>{News[49]?.description}</p>
            <p>Author : {News[49]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[50]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[50]?.title}
            </h3>
            <p className='desc'>{News[50]?.description}</p>
            <p>Author : {News[50]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[11]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[11]?.title}
            </h3>
            <p className='desc'>{News[11]?.description}</p>
            <p>Author : {News[11]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[12]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[12]?.title}
            </h3>
            <p className='desc'>{News[12]?.description}</p>
            <p>Author : {News[12]?.author}</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsOfTheDay