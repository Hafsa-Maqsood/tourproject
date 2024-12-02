import React, { useEffect, useState } from "react";
import CommonSection from "./Section";  

import TourCard from "./TourCard";  
import tours from "../assets/data/tours";  
import Footer from "./Footer";  
import { Container, Row, Col } from "reactstrap";
import '../styles/Tour.css';

const Tour = () => {
  const itemsPerPage = 8;  // Number of tours per page
  const [pageCount, setPageCount] = useState(0);  // Total number of pages
  const [page, setPage] = useState(0);  // Current page
  const [currentTours, setCurrentTours] = useState([]);  // Tours to display on the current page

  useEffect(() => {
    // Check if tours data is valid
    if (Array.isArray(tours) && tours.length > 0) {
      const pages = Math.ceil(tours.length / itemsPerPage);
      setPageCount(pages);
    }
  }, []);

  useEffect(() => {
    // Safely handle pagination, and ensure the page index is within bounds
    if (Array.isArray(tours) && tours.length > 0) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentTours(tours.slice(startIndex, endIndex));  // Slice the tours for the current page
    }
  }, [page]);  // Re-run when the page changes

  return (
    <>
      <CommonSection title={"All Tours"} /> 

    

      <section className="pt-0">
        <Container>
          <Row className="tour_cards_container">
            {currentTours.length > 0 ? (
              currentTours.map((tour) => (
                <Col lg="3" className="tour-card mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            ) : (
              <Col lg="12">
                <p>No tours available.</p>
              </Col>
            )}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Tour;