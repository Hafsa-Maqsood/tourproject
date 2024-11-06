import React from 'react';
import '../styles/Subscribtion.css'; // Ensure the filename is correct
import maleTouristImage from '../assets/male-tourist.jpg'; // Ensure the path to your image is correct

const SubscriptionForm = () => {
  return (
    <div className="Main">
      <div className="head">
        <h3 className="heading">Subscribe now to get useful traveling information.</h3>
        <img 
          src={maleTouristImage} 
          alt="Male Tourist" 
          className="picture" 
        />
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. It was popularised in the 1960s.
      </p>
      <div className="formContainer">
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
        />
        <button className="B">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscriptionForm;
