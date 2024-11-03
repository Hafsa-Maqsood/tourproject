import React from "react";
import "../styles/Experience.css";
import experienceImage from '../assets/experience.png'; // Ensure the path is correct

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="text-section">
          <div className="badge">Experience</div>
          <h2 className="title">With our all experience we will serve you</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas aliquam, hic tempora inventore suscipit unde.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>12k+</h3>
              <p>Successful trips</p>
            </div>
            <div className="stat-item">
              <h3>2k+</h3>
              <p style={{ marginTop: '10px' }}>Regular clients</p> {/* Positioned beneath the stat */}
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <div className="gallery">
            <img src={experienceImage} alt="Mountain Hiking" className="gallery-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
