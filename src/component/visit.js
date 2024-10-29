import React from 'react';
import '../styles/visit.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <div className="visit">
      <div className="visit-image"> {/* Fixed the typo here */}
        {/* Background image is set via CSS */}
      </div>
      <div className="visit-text">
        <h1>
          Travel Around The World With Us. Embark on a global adventure as we invite you to traverse the wonders of diverse cultures and breathtaking landscapes. Let us be your compass to an unforgettable journey.
        </h1>
        <Link to="/Tour"> {/* Use Link to navigate to Tour page */}
          <button className='start'>Explore</button>
        </Link>
      </div>
    </div>
  );
}
