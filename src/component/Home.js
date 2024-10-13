import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Subtitle from './Subtitle';


export default function Home() {
  return (
    <>
      <div className="Home">
        This is the home page
      </div>

      {/* =============================  GALLERY SECTION START ============================= */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>

            <div className='hero_content'>
            <Subtitle subtitle={'Gallery'} color="darkblue" /> {/* Specify color here */}
              
              {/* You can add your gallery content (images, etc.) here */}
              </div>
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>

            </Col>
          </Row>
        </Container>
      </section>

      {/* =============================  GALLERY SECTION END ============================= */}
    </>
  );
}
