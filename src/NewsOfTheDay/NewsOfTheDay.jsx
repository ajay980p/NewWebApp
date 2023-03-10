import React, { useContext } from 'react'
import './NewsOfTheDay.css'
import { useState, useEffect } from 'react';
import { handleContext } from '../App';

function NewsOfTheDay() {

  const { urls } = useContext(handleContext);

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(urls ?? '');
  }, [urls]);

  return (
    <div>
      <div className='newsHeading'>Top News of the Day</div>
      <div className='Card_Div'>

        <div className='Filter'>
          <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <div className='FilterDiv'>
            <h3>Categories</h3>
            <ul className='FilterCategories'>
              <li>Sports</li>
              <li>Technology</li>
              <li>Health</li>
              <li>General</li>
              <li>Bussiness</li>
              <li>Entertainment</li>
            </ul>
          </div>
        </div>


        <div className='Popular'>
          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[1]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[1]?.title}
              </h3>
              <p className='desc'>{url[1]?.description}</p>
              <p className='author'>Author : {url[1]?.author}</p>
              <button>Read More</button>
            </div>
          </div>


          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[2]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[2]?.title}
              </h3>
              <p className='desc'>{url[2]?.description}</p>
              <p>Author : {url[2]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[3]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[3]?.title}
              </h3>
              <p className='desc'>{url[3]?.description}</p>
              <p>Author : {url[3]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[4]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[4]?.title}
              </h3>
              <p className='desc'>{url[4]?.description}</p>
              <p>Author : {url[4]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[5]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[5]?.title}
              </h3>
              <p className='desc'>{url[5]?.description}</p>
              <p>Author : {url[5]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[6]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[6]?.title}
              </h3>
              <p className='desc'>{url[6]?.description}</p>
              <p>Author : {url[6]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[7]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[7]?.title}
              </h3>
              <p className='desc'>{url[7]?.description}</p>
              <p>Author : {url[7]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[8]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[8]?.title}
              </h3>
              <p className='desc'>{url[8]?.description}</p>
              <p>Author : {url[8]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[9]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[9]?.title}
              </h3>
              <p className='desc'>{url[9]?.description}</p>
              <p>Author : {url[9]?.author}</p>
              <button>Read More</button>
            </div>
          </div>

          <hr className='horizontalLine' />

          <div className='Popular_Common'>
            <div className='images'>
              <img src={url[10]?.urlToImage}></img>
            </div>
            <div className='contents'>
              <h3>
                {url[10]?.title}
              </h3>
              <p className='desc'>{url[10]?.description}</p>
              <p>Author : {url[10]?.author}</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NewsOfTheDay;