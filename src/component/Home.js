import React from 'react';
import '../styles/Home.css';
import image1 from '../assets/hero-img01.jpg';
import image2 from '../assets/hero-img02.jpg';
import vedio from '../assets/images/hero-video.mp4';
import Services from './Services';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import Features from './FeaturedTourList';

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
          <video src={vedio} controls />
          <img className="img-2" src={image2} alt="Destination 2" />
        </div>
      </header>
     
      <Services />
      <Experience />
      <section className="fea-container">
        
        <div className="fea">
          <Features />
        </div>
      </section>
      <About />
      <Footer />
    </div>
  );
}

export default Home;