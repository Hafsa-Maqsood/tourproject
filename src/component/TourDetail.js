import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";

import "../styles/TourDetail.css";
import calculateAvgRating from "./avgRating";
import Booking from "./Booking";
import Footer from "./Footer";

import TourCard from "./TourCard";  
import tours from "../assets/data/tours";  
import '../styles/Tour.css';

const TourDetail = () => {
  const { id } = useParams(); // Extract 'id' from URL
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  // Find the tour with matching ID
  const tour = tourData.find((tour) => tour.id === id);

  // If no matching tour, show a fallback message
  if (!tour) {
    return (
      <div>
        <h2>Tour not found</h2>
        <p>The requested tour does not exist. Please check the URL.</p>
      </div>
    );
  }

  // Destructure properties safely from the tour object
  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews = [],
    city,
    distance,
    maxGroupSize,
  } = tour;

  const { avgRating } = calculateAvgRating(reviews);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`Review submitted: "${reviewText}" with a rating of ${tourRating}`);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt={title} />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tour_rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>
                    {avgRating !== 0 ? avgRating : "Not rated"}
                    {reviews.length > 0 && <span>({reviews.length})</span>}
                  </span>
                  <span className="address">
                    <i className="ri-map-pin-fill"></i>
                    {address}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i>
                    {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i>
                    ${price} / per person
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i>
                    {distance} km
                  </span>
                  <span>
                    <i className="ri-group-line"></i>
                    {maxGroupSize} people
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews.length})</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <span
                        key={rating}
                        onClick={() => setTourRating(rating)}
                      >
                        {rating} <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>
                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your thoughts"
                      required
                    />
                    <button className="btn primary__btn text-white" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
              </div>

              <ListGroup className="user_reviews">
                {reviews.map((review, index) => (
                  <div className="review_item" key={index}>
                    <div className="w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5>{review.name || "Anonymous"}</h5>
                        </div>
                        <span className="rating">
                          {review.rating} <i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default TourDetail;
