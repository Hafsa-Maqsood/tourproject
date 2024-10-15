import React from 'react'
import '../styles/about.css';
import { Container, Row, Col } from 'react-bootstrap';
import Subtitle from './Subtitle';
import MasonryImagesGallery from './Image-gallery/MasonryImagesGallery';

import Testimonals from './Testimonals';

export default function About() {
  return (
    <>
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
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =============================  GALLERY SECTION END ============================= */}
  

  {/* =============================  Testimonal Section Start ============================= */}
  
  <Container>
    <Row>
      <Col lg='12'>
      <Subtitle subtitle={'Fans Love'}/>
      <h2 className='testimonal_title'> What our say about us </h2>
      </Col>
      <Col lg='12'>
           <Testimonals/> 
      </Col>
    </Row>
  </Container>

   {/* =============================  Testimonal Section END ============================= */}
    </>
  )
}
