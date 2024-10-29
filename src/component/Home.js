import React from 'react';
import '../styles/Home.css';
import Searchbar from './searchbar';
import Visit from './visit';
import Navbar from './Navbar'; 
import About from './About';
import TourDetails from './Tour';
import Footer from './Footer';


export default function Home() {
    return (
        <div>
            <div className='homeStyle'>  
                <Navbar /> {/* Place Navbar here */}
                <div>
                    <h1>Visit the Beautiful</h1>
                    <h1>Place of the World</h1>
                </div>
            </div>
            <Searchbar />
            <Visit />
            <About />
            <TourDetails/>
            <Footer/>
           
        </div>
    );
}
