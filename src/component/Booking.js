import React, { useState } from 'react';
import '../styles/Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function Booking({ tour, avgRating }) {
    const { price, reviews } = tour;
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        userId: '01', // later it will be dynamic
        userEmail: '', // Make email an empty string initially
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
        location: ''  // Add location to the state
    });

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };
    
    const ServiceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(ServiceFee);

    // Send data to the server
    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/v1/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: credentials.userId,
                    userEmail: credentials.userEmail,
                    fullName: credentials.fullName,
                    phone: credentials.phone,
                    guestSize: credentials.guestSize,
                    bookAt: credentials.bookAt,
                    totalAmount: totalAmount,
                    location: credentials.location  // Ensure this is included
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Booking successful", data);
                navigate("/Cart");  // Redirect to Cart page after successful booking
            } else {
                console.error("Booking failed", data);
                alert(data.message || "Booking failed. Please try again.");
            }
        } catch (err) {
            console.error("Error during booking:", err);
            alert("Error during booking. Please try again.");
        }
    };
    
    return (
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>${price}<span>/per person</span></h3>
                <span className="tour_rating ">
                    <i className="ri-star-fill"></i>{' '}
                    {avgRating === 0 ? null : avgRating}
                    {reviews.length === 0 ? (
                        'Not rated'
                    ) : (
                        <span>({reviews?.length})</span>
                    )}
                </span>
            </div>

            {/*==========Booking Form ================*/}
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input
                            type='email'
                            placeholder='Email'
                            id="userEmail"
                            value={credentials.userEmail}  // Bind email to state
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type='text'
                            placeholder='Full Name'
                            id="fullName"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type='text'
                            placeholder='Phone'
                            id="phone"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input
                            type='date'
                            placeholder=""
                            id="bookAt"
                            required
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            placeholder="Guest"
                            id="guestSize"
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {/* New location input */}
                    <FormGroup>
                        <input
                            type='text'
                            placeholder='Location'
                            id="location"
                            value={credentials.location}  // Bind location to state
                            required
                            onChange={handleChange}
                        />
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
