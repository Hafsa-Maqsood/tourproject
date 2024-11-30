import React from "react";
import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <img
            className="masonry_img"
            src={item}
            key={index}
            alt={`Gallery ${index + 1}`} // Updated alt text
            style={{
            width:"95%",
              height: "200px", // Set fixed height for equal display
              objectFit: "cover", // Ensure images maintain their aspect ratio and cover the area
              borderRadius: "10px",
              display: "block",
             marginLeft:"5px",
          
            
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
