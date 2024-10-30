import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MasonryImagesGallery from './Image-gallery/MasonryImagesGallery';
import Testimonals from './Testimonals';
import Footer from './Footer';

export default function End() {
  return (
    <>
       {/* =============================  Testimonal Section Start ============================= */}

       <Container>
        <Row>
          <Col lg='12'>
           
            <h3 style={{ color: 'orange' , fontSize: '50px', fontStyle: 'italic' ,  marginTop: '20px'}}>Fans Love</h3>
            <h2 className='testimonal_title'>What our say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonals />
          </Col>
        </Row>
      </Container>

      {/* =============================  Testimonal Section END ============================= */}
   
      <div>
   <Footer/>
   </div>
    </>
  )
}