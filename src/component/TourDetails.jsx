// src/component/TourDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TourDetails.css'; // CSS file for TourDetails

// Dummy data for tour details
const tourData = [
  { id: 1, title: 'Westminster Bridge', location: 'London', price: '$99', rating: 4.5, reviews: 2, image: require('../assets/country1.jpg') },
  { id: 2, title: 'Bali, Indonesia', location: 'Bali', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country2.jpg') },
  { id: 3, title: 'Snowy Mountains, Thailand', location: 'Bangkok', price: '$99', rating: 0, reviews: 0, image: require('../assets/country3.jpg') },
  { id: 4, title: 'Beautiful Sunrise, Thailand', location: 'Phuket', price: '$99', rating: 5.0, reviews: 2, image: require('../assets/country4.jpg') },
  { id: 5, title: 'Nusa Pendia Bali, Indonesia', location: 'Bali', price: '$99', rating: 0, reviews: 0, image: require('../assets/country5.jpg') },
  { id: 6, title: 'Cherry Blossoms Spring', location: 'Tokyo', price: '$99', rating: 5.0, reviews: 1, image: require('../assets/country6.jpg') },
  { id: 7, title: 'Holmen Lofoten, France', location: 'Paris', price: '$99', rating: 4.0, reviews: 3, image: require('../assets/country7.jpg') },
  { id: 8, title: 'Jaflong, Sylhet', location: 'Sylhet', price: '$99', rating: 0, reviews: 0, image: require('../assets/country8.jpg') },
];

const TourDetails = () => {
  const { id } = useParams(); // Get the tour ID from the URL parameters
  const tour = tourData.find(t => t.id === parseInt(id)); // Find the selected tour based on ID

  const [numPeople, setNumPeople] = useState(1); // State for number of people
  const [totalExpense, setTotalExpense] = useState(tour.price); // State for total expense
  const [name, setName] = useState(''); // State for name
  const [email, setEmail] = useState(''); // State for email
  const [date, setDate] = useState(''); // State for date

  const handleNumPeopleChange = (e) => {
    const peopleCount = e.target.value;
    setNumPeople(peopleCount);
    setTotalExpense(tour.price * peopleCount); // Calculate total expense
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Booking confirmed for ${numPeople} people! Total expense: $${totalExpense}`);
  };

  if (!tour) {
    return <div>Tour not found!</div>; // Handle case if tour is not found
  }

  return (
    <div className="tour-details-container">
     
      <div className="details-box">
        <div className="tour-image-box">
          <img src={tour.image} alt={tour.title} className="tour-image1" />
        </div>
        <div className="booking-box">
          <h2>{tour.title}</h2>
          
          <h4>Book Here:</h4>
          <p>{tour.description}</p>

          <form className="booking-form" onSubmit={handleSubmit}>
            
              
              <input
                type="text"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            
              <input
                type="email"
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="date"
               
                onChange={(e) => setDate(e.target.value)}
                required
              />
        
              <input
              placeholder="People" 
                type="number"
                value={numPeople}
                onChange={handleNumPeopleChange}
                min="1"
              />
            
            <button type="submit" className="submit-button">Submit Booking</button>
          </form>
          
          <h3>Total Expense: ${totalExpense}</h3>
        </div>
      </div>
    </div>
    
  );
};

export default TourDetails;
