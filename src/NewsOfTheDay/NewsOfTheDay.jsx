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
            <img src={News[3]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[3]?.title}
            </h3>
            <p className='desc'>{News[3]?.description}</p>
            <p className='author'>Author : {News[3]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[4]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[4]?.title}
            </h3>
            <p className='desc'>{News[4]?.description}</p>
            <p>Author : {News[4]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[5]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[5]?.title}
            </h3>
            <p className='desc'>{News[5]?.description}</p>
            <p>Author : {News[5]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[6]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[6]?.title}
            </h3>
            <p className='desc'>{News[6]?.description}</p>
            <p>Author : {News[6]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[7]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[7]?.title}
            </h3>
            <p className='desc'>{News[7]?.description}</p>
            <p>Author : {News[7]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[8]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[8]?.title}
            </h3>
            <p className='desc'>{News[8]?.description}</p>
            <p>Author : {News[8]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[9]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[9]?.title}
            </h3>
            <p className='desc'>{News[9]?.description}</p>
            <p>Author : {News[9]?.author}</p>
            <button>Read More</button>
          </div>
        </div>

        <hr className='horizontalLine' />

        <div className='Popular_Common'>
          <div className='images'>
            <img src={News[10]?.urlToImage}></img>
          </div>
          <div className='contents'>
            <h3>
              {News[10]?.title}
            </h3>
            <p className='desc'>{News[10]?.description}</p>
            <p>Author : {News[10]?.author}</p>
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