import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [booking, setBooking] = useState(null);
    const [error, setError] = useState(null);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);  // New state to manage visibility of booking details
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch booking details from the backend
        const fetchBookingDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/bookings');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch booking data');
                }

                const data = await response.json();
                console.log('Booking data:', data); // Log the data to check if it is in the expected format

                if (data && data.booking) {
                    setBooking(data.booking);
                } else {
                    setError('No booking found.');
                }
            } catch (err) {
                console.error('Error:', err);
                setError('Error fetching booking details. Please try again.');
            }
        };

        fetchBookingDetails();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const handleViewClick = () => {
        setIsDetailsVisible(true);  // Toggle visibility of the booking details
    };

    const handleGoBackHome = () => {
        // Navigate back to the home page
        navigate('/');
    };

    const handleCancelBooking = async () => {
        try {
            // Make a DELETE request to cancel the booking
            const response = await fetch(`http://localhost:5000/api/v1/bookings/${booking._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to cancel booking');
            }

            // If successful, remove the booking from the state
            setBooking(null);
            setError('Booking canceled successfully');
            alert('Your booking has been canceled');
        } catch (err) {
            console.error('Error:', err);
            setError('Error canceling booking. Please try again.');
        }
    };

    return (
        <div className="cart">
            <h2>Your Booking</h2>

            {error && <p className="error-message">{error}</p>}

            {/* Only show details when isDetailsVisible is true */}
            {isDetailsVisible ? (
                <div className="cart__details">
                    {booking ? (
                        <ListGroup>
                            <ListGroupItem>
                                <strong>Full Name:</strong> {booking.fullName}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Email:</strong> {booking.userEmail}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Phone:</strong> {booking.phone}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Guest Size:</strong> {booking.guestSize}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Booking Date:</strong> {new Date(booking.bookAt).toLocaleDateString()}
                            </ListGroupItem>
                            <ListGroupItem>
                                <strong>Total Amount:</strong> ${booking.totalAmount}
                            </ListGroupItem>
                            <ListGroupItem>
    <strong>Location:</strong> {booking.location || 'Not specified'}
</ListGroupItem>

                        </ListGroup>
                    ) : (
                        <p>Loading your booking details...</p>
                    )}
                </div>
            ) : (
                <div className="cart__buttons">
                    <Button className="mt-3" onClick={handleViewClick}>
                        View Booking Details
                    </Button>
                </div>
            )}

            {/* Cancel Booking Button */}
            {booking && (
                <Button className="mt-3" onClick={handleCancelBooking} color="danger">
                    Cancel Booking
                </Button>
            )}

            {/* Go Back to Home Button */}
            <Button className="mt-3" onClick={handleGoBackHome}>
                Go Back to Home
            </Button>
        </div>
    );
}

export default Cart;
