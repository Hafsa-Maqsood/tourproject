import React from 'react';
import '../styles/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import MasonryImagesGallery from './Image-gallery/MasonryImagesGallery';
import Testimonals from './Testimonals'; // Check for spelling and file existence


export default function About() {
  return (
    <>

        
      {/* =============================  GALLERY SECTION START ============================= */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='hero_content'>
               
                <h3 style={{ color: 'darkblue' , fontSize: '50px',fontStyle: 'italic', marginTop: '50px'  }}>Gallery</h3>
              </div>
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =============================  GALLERY SECTION END ============================= */}
    
     
    </>
    
  );
}
