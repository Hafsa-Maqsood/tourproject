import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import '../styles/TourDetail.css'
import calculateAvgRating from './avgRating'
import avator from '../assets/images/avatar.jpg'
import Booking from './Booking'
import Footer from './Footer'

const TourDetail = () => {
  const { id } = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

  const tour = tourData.find(tour => tour.id === id)
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour
  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    alert(`${reviewText},${tourRating}`)
  }

  const validReviews = Array.isArray(reviews) ? reviews : []

  const { totalRating, avgRating } = calculateAvgRating(validReviews)

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tour_rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-fill"
                    
                    ></i>{' '}
                    {avgRating === 0 ? null : avgRating}
                    {validReviews.length === 0 ? (
                      'Not rated'
                    ) : (
                      <span>({validReviews?.length})</span>
                    )}
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
                    ${price} /per person
                  </span>
                  <span>
                    <i className="ri-map-pin-time-line"></i>
                    {distance} k/m
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
                <h4>Reviews ({validReviews.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={() => setTourRating(1)}>
                      1<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3<i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
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
                
                {reviews?.map((review, index) => {
                 
                  const reviewKey = `${review.userName || 'anonymous'}-${review.date || 'unknown'}-${review.rating || index}`;
                  return (
                    <div className="review_item" key={reviewKey}>
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                          <img src={avator} alt="User Avatar"   /> muhaib
                            <h5>{review.userName || "Anonymous"}</h5>
                            <p>{new Date(review.date || '01-18-2023').toLocaleDateString("en-us", options)}</p>
                          </div>
                          <span className="rating">
                            {review.rating || 5} <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.title || "Amazing tour"}</h6>
                        
                      </div>
                    </div>
                  )
                })}
              </ListGroup>
            </div>
          </Col>
          <Col lg="4">
          <div className='book'> <Booking tour={tour} avgRating={avgRating} /></div>
           
          </Col>
        </Row>
      </Container>
      <Footer/>
    </section>
  )
}

export default TourDetail
