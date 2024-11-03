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
                        <p>Customer</p>
                        <p>
                        "I'm thrilled with my purchase! The team truly understands customer needs and made the whole process feel effortless. 
                        Every detail was taken care of, and I felt like a priority throughout."
                        </p>
                    </div>
                </div>
            </div>

            <div className="testimonial-item">
                <div className="testimonial-info">
                    <img src={ava03} className="testimonial-img" alt="Alice" />
                    <div className="testimonial-text">
                        <h6 className="testimonial-name">Jhon</h6>
                        <p>Customer</p>
                        <p>
                          "Fantastic service and attention to detail! The team went above and beyond to ensure 
                           I was satisfied, and it really shows. I’ve never felt more valued as a customer, and 
                           I’ll definitely be coming back for more!"
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonals;
