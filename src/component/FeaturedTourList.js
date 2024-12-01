import React from "react";
import TourCard from "./TourCard";
import tourData from "../assets/data/tours";
import "../styles/Home.css";

export default function FeaturedTourList() {
  return (
    <div className="featured-tour-container">
      <h2 className="fea-title">Featured Tours</h2>
      <div className="tour_cards_container">
        {tourData?.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
}