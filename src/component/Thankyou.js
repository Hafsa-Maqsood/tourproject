import React from 'react';
import Footer from './Footer';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/Thankyou.css';


function Thankyou() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span><i className="ri-checkbox-circle-line"></i></span>
              <h1 className="mb-3 fw-semibold">Thank YOU</h1>
              <h3 className="mb-4">Tour has been booked.</h3>
              <Button className=" primary__btn ">
                <Link to="/"><h6>Back to home</h6></Link> {/* Correct path */}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </section>
  );
}

export default Thankyou;
