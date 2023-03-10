import React, { useState, createContext } from 'react';

import './App.css';
import Header from './Header/Header'
import Categories from './Categories/Categories'
import Top_News_Grid from './Top_News_Grid/Top_News_Grid'
import NewsOfTheDay from './NewsOfTheDay/NewsOfTheDay';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
import Footer from './Footer/Footer';

export const handleContext = createContext();

function App() {

  let [urls, setUrls] = useState([]);

  const setThisNews = (e) => {
    setUrls(e);
  }

  return (
    <div className="App">
      <handleContext.Provider value={{ urls }}>
        <Header />
        <Categories CategoriesData={setThisNews} />
        <Top_News_Grid />
        <NewsOfTheDay />
        <HorizontalScroll />
        {/* <AutoScroll /> */}
        <Footer />
      </handleContext.Provider>
    </div >
  );
}

export default App;
