import React from 'react';
import Slider from 'react-slick';
import ava01 from '../assets/ava01.jpg'; // Ensure this path is correct
import ava02 from '../assets/ava02.jpg'; // Import additional images
import ava03 from '../assets/ava03.jpg';
import '../styles/Testimonals.css';

// Importing the necessary CSS for the Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <div className="testimonial-item">
                <div className="testimonial-info">
                    <img src={ava01} className="testimonial-img" alt="John Doe" />
                    <div className="testimonial-text">
                        <h6 className="testimonial-name">Jack</h6>
                        
                        <p>
                        "Amazing experience from start to finish! The product quality truly exceeded my expectations,
                         and the customer support team was incredibly helpful and responsive throughout the entire process.
                          They answered all my questions and made me feel confident in my purchase. 
                        I would highly recommend this company to anyone looking for quality and excellent service!"
                        </p>
                    </div>
                </div>
            </div>

            <div className="testimonial-item">
                <div className="testimonial-info">
                    <img src={ava02} className="testimonial-img" alt="Lia Franklin" />
                    <div className="testimonial-text">
                        <h6 className="testimonial-name">Lia</h6>
                        {/* <p>Customer</p> */}
                        <p>
                        "I'm thrilled with my purchase and the entire experience! The team truly understands customer needs
                         and made the whole process feel effortless. From the initial inquiry to receiving my product,
                          every step was smooth and professional. I felt like a priority, and I can't wait to shop with them
                           again! Their attention to detail and commitment to excellence really set them apart."
                        </p>
                    </div>
                </div>
            </div>

            <div className="testimonial-item">
                <div className="testimonial-info">
                    <img src={ava03} className="testimonial-img" alt="Alice" />
                    <div className="testimonial-text">
                        <h6 className="testimonial-name">Jhon</h6>
                        {/* <p>Customer</p> */}
                        <p>
                        "Fantastic service and attention to detail! The team went out of their way to ensure I was satisfied,
                         providing updates and support at every step. They truly value their customers, which is rare to find.
                          I've never felt more appreciated, and I'll definitely recommend them to everyone I know! 
                          This experience has set a new standard for what customer service should be."
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonals;
