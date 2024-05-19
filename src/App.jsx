import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import TopAttractions from './components/TopAttractions';
import History from './components/History'; // import History component
import Explore from './components/Explore';
import PopularCity from './components/PopularCity'; // import PopularCity component
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection'; // import AboutSection component
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WhyChooseUs />
      <TopAttractions />
      <History /> 
      <Explore />
      <PopularCity /> 
      <Contacts />
      <AboutSection /> 
      <Footer />
    </div>
  );
}

export default App;
