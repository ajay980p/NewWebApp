import React, { useEffect, useState } from 'react'
import './Categories.css'

function Categories(props) {

  const handleClickSports = () => {

    fetch("https://dna-bvdf.onrender.com/home-page")
      .then((response) => response.json())
      .then((data) =>

        props.CategoriesData(data))
  }

  const handleHomeBtn = () => {

    fetch("https://dna-bvdf.onrender.com/latest-news")
      .then((response) => response.json())
      .then((data) =>

        props.CategoriesData(data))
  }

  const autoClick = () => {

    fetch("https://dna-bvdf.onrender.com/latest-news")
      .then((response) => response.json())
      .then((data) =>

        props.CategoriesData(data))
  }

  useEffect(() => {
    autoClick();
  }, [])

  return (
    <div className='Categories'>
      <ul>
        <a onClick={handleHomeBtn}>Home</a>
        <a onClick={handleClickSports}>Latest News</a>
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
