import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/TourCard.css';
import calculateAvgRating from "./avgRating";

const TourCard = ({ tour }) => {
  // Destructure and default to empty array for reviews if undefined
  const { id, title, city, photo, price, featured, reviews = [] } = tour;

  // Calculate average rating, ensuring reviews is always an array
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  console.log("Tour data inside TourCard:", tour); // Log the tour data to verify it

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo || "/path/to/default-image.jpg"} alt="tour-img" /> {/* Fallback image */}
          {featured && <span className="featured_badge">Featured</span>}
        </div>
      </Card>

      <CardBody>
        <div className="card_top d-flex align-items-center justify-content-between">
          <span className="tour_location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city}
          </span>
          <span className="tour_rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i>
            {avgRating !== 0 ? avgRating : "Not rated"}
            {reviews.length > 0 && <span>({reviews.length})</span>} {/* Safely check length */}
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
