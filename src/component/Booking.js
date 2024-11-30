import React, { useState } from 'react';
import '../styles/Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {useNavigate} from "react-router-dom"

function Booking({ tour, avgRating }) {
    const { price, reviews = [] } = tour; // Default reviews to an empty array if undefined
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        userId: '01', // later it will be dynamic
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const ServiceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(ServiceFee);

    // send data to the server
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/thank-you");
    }

    return (
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>${price}<span>/per person</span></h3>
                <span className="tour_rating ">
                    <i className="ri-star-fill"></i>{' '}
                    {avgRating === 0 ? null : avgRating}
                    {/* Display "Not rated" if reviews array is empty */}
                    {reviews.length === 0 ? (
                        'Not rated'
                    ) : (
                        <span>({reviews.length})</span>
                    )}
                </span>
            </div>
            {/*==========Booking Form ================*/}
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text'
                            placeholder='Full Name'
                            id="fullName"
                            required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='text'
                            placeholder='Phone'
                            id="phone"
                            required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date'
                            placeholder=""
                            id="bookAt"
                            required onChange={handleChange} />
                        <input type='number'
                            placeholder="Guest"
                            id="guestSize"
                            required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/*==========Booking End================*/}
            {/*==========Booking Bottom================*/}
            <div className='booking__bottom'>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price} <i className="ri-close-line"></i> 1 person</h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service charges</h5>
                    <span>${ServiceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    );
}

export default Booking;
