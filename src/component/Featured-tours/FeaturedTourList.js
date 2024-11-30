// src/component/FeaturedTourList.js

import React from 'react';
import TourCard from '../component/TourCard';
import { Col, Row, Container } from "reactstrap";

import useFetch from '../hooks/useFetch'; // Correct import path for the hook
import { BASE_URL } from '../utils/config'; // Import BASE_URL from your configuration

const FeaturedTourList = () => {
  // Fetch only featured tours
  const { data: featuredTours, loading, error } = useFetch(
    ${BASE_URL}/tours/search/getFeaturedTours
  );

  return (
    <Container className="featured-tour-container">
      <h2>Featured Tours</h2>
      {loading && <h4>Loading featured tours...</h4>}
      {error && <h4>{error}</h4>}
      <Row>
        {!loading &&
          !error &&
          featuredTours?.map((tour) => (
            <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default FeaturedTourList;