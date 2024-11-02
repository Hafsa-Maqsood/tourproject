import React from 'react';
import '../styles/Home.css';
import Services from './Services';
import image1 from '../assets/hero-img01.jpg';
import image2 from '../assets/hero-img02.jpg';
import image3 from '../assets/hero-img01.jpg';
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

      <div className="search-section">
        <div className="input-wrapper">
          <i className="fas fa-map-marker-alt"></i>
          <input type="text" placeholder="Location" />
        </div>
        <div className="input-wrapper">
          <i className="fas fa-road"></i>
          <input type="text" placeholder="Distance (km)" />
        </div>
        <div className="input-wrapper">
          <i className="fas fa-users"></i>
          <input type="number" placeholder="Max People" />
        </div>
        <button>
          <i className="fas fa-search"></i> 
        </button>
      </div>
      <Services/>
    </div>
  );
}

export default Home;
