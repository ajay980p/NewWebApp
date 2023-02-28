import React from 'react'
import './Categories.css'

function Categories(props) {

  let urls;

  const handleClickSports = () => {

    urls = 'https://newsapi.org/v2/everything?q=sports&apiKey=2b199577ba7d4962badd41f4e53e2f46';

    props.CategoriesData(urls);
  }

  const handleClickTechnology = () => {

    urls = 'https://newsapi.org/v2/everything?q=sports&apiKey=2b199577ba7d4962badd41f4e53e2f46';

    props.CategoriesData(urls);
  }

  return (
    <div className='Categories'>
      <ul>
        <a >Home</a>
        <a onClick={handleClickSports}>Sports</a>
        <a onClick={handleClickTechnology}>Technology</a>
        <a>Health</a>
        <a>General</a>
        <a>Bussiness</a>
        <a>Entertainment</a>
      </ul>
    </div >
  )
}

export default Categories;