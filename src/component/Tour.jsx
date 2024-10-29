import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'; // Import your CSS file
import { FaSearch, FaStar, FaRegStar } from 'react-icons/fa'; // Import FaSearch with the other icons
// Import icons for ratings

const tours = [
  { id: 1,  location: 'London', price: '$99', rating: 4.5, reviews: 2, image: require('../assets/country1.jpg') },
  { id: 2, location: 'Bali', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country2.jpg') },
  { id: 3,  location: 'Bangkok', price: '$99', rating: 0, reviews: 0, image: require('../assets/country3.jpg') },
  { id: 4,  location: 'Phuket', price: '$99', rating: 5.0, reviews: 2, image: require('../assets/country4.jpg') },
  { id: 5,  location: 'Bali', price: '$99', rating: 0, reviews: 0, image: require('../assets/country5.jpg') },
  { id: 6, location: 'Tokyo', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country6.jpg') },
  { id: 7, tlocation: 'Paris', price: '$99', rating: 4.0, reviews: 3, image: require('../assets/country7.jpg') },
  { id: 8,  location: 'Sylhet', price: '$99', rating: 0, reviews: 0, image: require('../assets/country8.jpg') },
];


const Tour = () => {
  return (
    <div className="tour-page">
      <div className="tour-header">
        <h1 className="tour-title">All Tours</h1>
      </div>

      {/* Search Bar Section */}
      <div className="tour-search">
        <div className="search-fields">
          <div className="search-field">
            <label>Location</label>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="search-field">
            <label>Distance</label>
            <input type="number" placeholder="Distance (km)" />
          </div>
          <div className="search-field">
            <label>Min People</label>
            <input type="number" placeholder="1" />
          </div>
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Tours List */}
      <div className="tour-list">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <div className="tour-info">
              <div className="tour-location">
                <FaRegStar /> {tour.location}
              </div>
              <h2 className="tour-title">{tour.title}</h2>
              <div className="tour-rating">
                {tour.rating > 0 ? (
                  <>
                    {[...Array(Math.floor(tour.rating))].map((_, i) => (
                      <FaStar key={i} color="#ffcc00" />
                    ))}
                    {[...Array(5 - Math.floor(tour.rating))].map((_, i) => (
                      <FaRegStar key={i} color="#ffcc00" />
                    ))}
                    <span> ({tour.reviews})</span>
                  </>
                ) : (
                  <span>Not rated</span>
                )}
              </div>
              <div className="tour-price">{tour.price} / per person</div>
              
              <Link to={`/tours/${tour.id}`} className="book-now-btn">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
{/* <Link to={`/tours/${tour.id}`} className="book-button">Book Now</Link> */}

export default Tour;
