import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TourHome.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const tours = [
  { id: 1, location: 'London', price: '$99', rating: 4.5, reviews: 2, image: require('../assets/country1.jpg') },
  { id: 2, location: 'Bali', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country2.jpg') },
  { id: 3, location: 'Bangkok', price: '$99', rating: 0, reviews: 0, image: require('../assets/country3.jpg') },
  { id: 4, location: 'Phuket', price: '$99', rating: 5.0, reviews: 2, image: require('../assets/country4.jpg') },
  { id: 5, location: 'Bali', price: '$99', rating: 0, reviews: 0, image: require('../assets/country5.jpg') },
  { id: 6, location: 'Tokyo', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country6.jpg') },
  { id: 7, location: 'Paris', price: '$99', rating: 4.0, reviews: 3, image: require('../assets/country7.jpg') },
  { id: 8, location: 'Sylhet', price: '$99', rating: 0, reviews: 0, image: require('../assets/country8.jpg') },
];

const Tour = () => (
  <div className="tour-page">
    {/* Tours List */}
    <div className="tour-list">
      {tours.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={tour.image} alt={tour.location} className="tour-image" />
          <div className="tour-info">
            <div className="tour-location">{tour.location}</div>
            <div className="tour-rating">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(tour.rating) ? <FaStar key={i} color="#ffcc00" /> : <FaRegStar key={i} color="#ffcc00" />
              )}
              {tour.reviews > 0 && <span> ({tour.reviews})</span>}
            </div>
            <div className="tour-price">{tour.price} / per person</div>
            <Link to={`/tours/${tour.id}`} className="book-now-btn">Book Now</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Tour;
