import React, { useEffect, useState } from "react";
import CommonSection from "./Section";  // Assuming the path is correct

 // Assuming the path is correct
import TourCard from "./TourCard";  // Assuming the path is correct
import tours from "../assets/data/tours";  // Assuming correct import for tour data
import Footer from "./Footer";  // Assuming correct path for Footer
import { Container, Row, Col } from "reactstrap";
import '../styles/Tour.css';

const Tour = () => {
  const itemsPerPage = 8;  // Number of tours per page
  const [pageCount, setPageCount] = useState(0);  // Total number of pages
  const [page, setPage] = useState(0);  // Current page
  const [currentTours, setCurrentTours] = useState([]);  // Tours to display on the current page

  useEffect(() => {
    // Calculate the total number of pages based on the number of tours and items per page
    const pages = Math.ceil(tours.length / itemsPerPage);
    setPageCount(pages);
  }, []);

  useEffect(() => {
    // Slice the tour data based on the current page
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentTours(tours.slice(startIndex, endIndex));  // Get the tours for the current page
  }, [page]);  // Re-run this effect whenever the page changes

  return (
    <>
      <CommonSection title={"All Tours"} /> {/* Render the section with title */}
      
     
      <section className="pt-0">
        <Container>
          <Row className="tour_cards_container"> {/* Apply the class here for layout */}
            {currentTours.length > 0 ? (
              currentTours.map(tour => (
                <Col lg="3" className="tour-card mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            ) : (
              <p>No tours available.</p>
            )}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
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
