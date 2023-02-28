import React, { useState } from 'react';

import './App.css';
import Header from './Header/Header'
import Categories from './Categories/Categories'
import Top_News_Grid from './Top_News_Grid/Top_News_Grid'
import NewsOfTheDay from './NewsOfTheDay/NewsOfTheDay';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
// import AutoScroll from './AutomaticScroll/AutoScroll';
import Footer from './Footer/Footer';
import SetNewsAPI from './API/SetNewsAPI';

function App() {

  let Category;

  const setCategoriesURL = (e) => {
    // console.log(Category)
    return e;
  }

  return (
    <div className="App">
      <Header />
      <Categories CategoriesData={setCategoriesURL} />
      {/* <Top_News_Grid /> */}
      <NewsOfTheDay CategoryData={setCategoriesURL} />
      <HorizontalScroll />
      {/* <AutoScroll /> */}
      <Footer />
    </div>
  );
}

export default App;
