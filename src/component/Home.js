import React from 'react';
import '../styles/Home.css';
import Services from './Services';
import image1 from '../assets/hero-img01.jpg';
import image2 from '../assets/hero-img02.jpg';
import image3 from '../assets/hero-img01.jpg';
import TourHome from './TourHome';
import About from './About';
import Experience from './Experience'
import Footer from './Footer';
import Subscription from './Subscribtion'
import { FaSearch } from 'react-icons/fa'; // Import FaSearch
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-text">
          <h1>TRAVEL WORLD</h1>
          <h2>Traveling opens the door to creating memories</h2>
          <p>Explore destinations around the world with our exclusive tours.</p>
        </div>
        <div className="tour-images">
          <img src={image1} alt="Destination 1" />
          <img src={image2} alt="Destination 2" />
          <img src={image3} alt="Destination 3" />
        </div>
      </header>

    {/* Search Bar Section */}
    <div className="tour-search">
      <div className="search-fields">
        {['Location', 'Distance', 'Min People'].map((label, index) => (
          <div className="search-field" key={index}>
            <label>{label}</label>
            <input type={label === 'Distance' || label === 'Min People' ? 'number' : 'text'} placeholder={label === 'Location' ? 'Where are you going?' : label === 'Distance' ? 'Distance (km)' : '1'} />
          </div>
        ))}
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
    <Services/>
    <Experience/>
    <TourHome/>
    <About/>
    <Subscription/>
    <Footer/>
    </div>
  );
}

export default Home;
