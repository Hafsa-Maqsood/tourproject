// Section.js (no changes needed here except for formatting)
import React from 'react';
import '../styles/Section.css';
import { Container, Row, Col } from 'reactstrap';

const Section = ({ title }) => {
  return (
    <section className='common_section'>
      <Container>
        <Row>
          <Col lg="12"><h1>{title}</h1></Col> 
        </Row>
      </Container>
    </section>
  );
}

export default Section;
