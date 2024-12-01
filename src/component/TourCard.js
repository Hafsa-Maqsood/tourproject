import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/TourCard.css';
import calculateAvgRating from "./avgRating";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;
  
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  console.log("Tour data inside TourCard:", tour); // Log the tour data

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="tour-img" />
          {featured && <span className="featured_badge">Featured</span>} {/* Conditionally render "Featured" */}
        </div>
      </Card>
      
      <CardBody>
        <div className="card_top d-flex align-items-center justify-content-between">
          <span className="tour_location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city}
          </span>
          <span className="tour_rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> 
            {avgRating !== 0 ? avgRating : "Not rated"} {/* Show avgRating or "Not rated" */}
            {totalRating > 0 && <span>({reviews?.length})</span>} {/* Only show the count if rated */}
          </span>
        </div>
        
        <h5 className="tour_title">
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>
        
        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
          <h5>
            ${price} <span>/ per person</span>
          </h5>
          <button className="booking_btn1">
            <Link to={`/tours/${id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};


export default TourCard;
