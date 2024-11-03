import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tour.css';
import Footer from './Footer';
import { FaSearch } from 'react-icons/fa';
import TourHome from './TourHome'
import Subscription from './Subscribtion';
const tours = [
  { id: 1, location: 'London', price: '$99', rating: 4.5, reviews: 2 },
  { id: 2, location: 'Bali', price: '$99', rating: 5.0, reviews: 1 },
  { id: 3, location: 'Bangkok', price: '$99', rating: 0, reviews: 0 },
  { id: 4, location: 'Phuket', price: '$99', rating: 5.0, reviews: 2 },
  { id: 5, location: 'Bali', price: '$99', rating: 0, reviews: 0 },
  { id: 6, location: 'Tokyo', price: '$99', rating: 5.0, reviews: 1 },
  { id: 7, location: 'Paris', price: '$99', rating: 4.0, reviews: 3 },
  { id: 8, location: 'Sylhet', price: '$99', rating: 0, reviews: 0 },
];

const Tour = () => (
  <div className="tour">
    <div className="tour-header">
      <h1 className="tour-title">All Tours</h1>
    </div>

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

    {/* Tours List */}
    <TourHome tours={tours} />
    <Subscription/>
    <Footer/>
  </div>
);

export default Tour;
