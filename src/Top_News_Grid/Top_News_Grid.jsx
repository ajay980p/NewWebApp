import React from 'react'
import './Top_News_Grid.css'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { handleContext } from '../App';

function Top_news_Grid() {

  const { urls } = useContext(handleContext);

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(urls ?? '');
  }, [urls]);

  return (
    <div className='container'>
      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[1]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[1]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[2]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[2]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[3]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[3]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[4]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[4]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[5]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[5]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[6]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[6]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[7]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[7]?.title}</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src={urls[8]?.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{urls[8]?.title}</p>
        </div>
      </div>

    </div >
  )
}

export default Top_news_Grid;