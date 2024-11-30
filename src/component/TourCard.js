import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/TourCard.css";
import calculateAvgRating from "./avgRating";

const TourCard = ({ tour }) => {
  if (!tour) return null; // Return null if there's no tour data

  // Destructure tour properties
  const {
    _id,
    title,
    city,
    photo ,//= "/path/to/default-image.jpg", // Default image if 'photo' is not available
    price , //= "N/A",
    featured, // = false,
    reviews //= [],
  } = tour;

  const { totalRating,avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt={title} />
          {/* {featured && <span className="featured_badge">Featured</span>} */}
          {featured && <span>Featured</span>}
        </div> 
      
      <CardBody>
        <div className="card_top d-flex align-items-center justify-content-between">
          <span className="tour_location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city}
          </span>
          <span className="tour_rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> 
            {/* {avgRating || "Not Rated"} */}
            {avgRating ===0 ? null :avgRating}
            {totalRating === 0? (
              "Not rated"
            ):(
              <span>({reviews?.length})</span>
            )}
            {/* {reviews.length > 0 && <span>({reviews.length})</span>} */}  
          </span>
        </div>

        <h5 className="tour_title">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h5>

        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
          <h5>
            ${price} <span>/ per person</span>
          </h5>
          <button className="booking_btn">
            <Link to={`/tours/${_id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
      </Card>
    </div>
  );
  
};

export default TourCard;