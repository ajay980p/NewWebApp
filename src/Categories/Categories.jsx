import React, { useEffect, useState } from 'react'
import './Categories.css'

function Categories(props) {

  const handleClickSports = () => {

    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2b199577ba7d4962badd41f4e53e2f46")
      .then((response) => response.json())
      .then((data) =>

        props.CategoriesData(data.articles))
  }

  const autoClick = () => {

    fetch("https://newsapi.org/v2/everything?q=sports&apiKey=2b199577ba7d4962badd41f4e53e2f46")
      .then((response) => response.json())
      .then((data) =>

        props.CategoriesData(data.articles))
  }

  useEffect(() => {
    autoClick();
  }, [])

  return (
    <div className='Categories'>
      <ul>
        <a >Home</a>
        <a onClick={handleClickSports}>Sports</a>
        <a >Technology</a>
        <a>Health</a>
        <a>General</a>
        <a>Bussiness</a>
        <a>Entertainment</a>
      </ul>
    </div >
  )
}

export default Categories;