import React from 'react';
import '../styles/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

export default function Footer() {
    const discoverLinks = [
        { path: "/", display: "Home" },
        { path: "/Callabout", display: "About" },
        { path: "/tour", display: "Tour" },
    ];

    const quickLinks = [
        { path: "/Callabout", display: "Gallery" },
        { path: "/login", display: "Login" },
        { path: "/register", display: "Register" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='footer'>
            <Container>
                <Row className="text-center">
                    {/* Column 1 */}
                    <Col className='footer-column'>
                        <div className='logo-section'>
                            <img src='https://media2.giphy.com/media/Xj2Pi6OTwEOztIeTOZ/200w.gif' alt='Logo' />
                        </div>
                    </Col>

                    {/* Column 2 - Discover Links */}
                    <Col className='footer-column'>
                        <h5 className='footer-link-title'>Discover</h5>
                        <ListGroup className='footer-quick-links'>
                            {discoverLinks.map((item, index) => (
                                <ListGroupItem key={index}>
                                    <Link to={item.path} onClick={scrollToTop}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Column 3 - Quick Links */}
                    <Col className='footer-column'>
                        <h5 className='footer-link-title'>Quick Links</h5>
                        <ListGroup className='footer-quick-links'>
                            {quickLinks.map((item, index) => (
                                <ListGroupItem key={index}>
                                    <Link to={item.path} onClick={scrollToTop}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Column 4 - Contact Section */}
                    <Col className='footer-column'>
                        <h5 className='footer-link-title'>Contact</h5>
                        <ListGroup className='footer-contact-info'>
                            <ListGroupItem>
                                <i className="ri-map-pin-line"></i> Address: BaharTown, Bangladesh
                            </ListGroupItem>
                            <ListGroupItem>
                                <i className="ri-mail-line"></i> Email: abc01@gmail.com
                            </ListGroupItem>
                            <ListGroupItem>
                                <i className="ri-phone-line"></i> Phone: +1234567890
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
