import React from 'react';
import Slider from 'react-slick';
import ava01 from '../assets/ava01.jpg'; // Ensure this path is correct
import ava02 from '../assets/ava02.jpg'; // Import additional images
import ava03 from '../assets/ava03.jpg';
import './Testimonals.css';

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
                        <p>Customer</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonals;
