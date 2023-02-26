import './App.css';
import Header from './Header/Header'
import Categories from './Categories/Categories'
import Top_News_Grid from './Top_News_Grid/Top_News_Grid'
import NewsOfTheDay from './NewsOfTheDay/NewsOfTheDay';
import HorizontalScroll from './HorizontalScroll/HorizontalScroll';
// import AutoScroll from './AutomaticScroll/AutoScroll';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Top_News_Grid />
      <NewsOfTheDay />
      <HorizontalScroll />
      {/* <AutoScroll /> */}
      <Footer />
    </div>
  );
}

export default App;
