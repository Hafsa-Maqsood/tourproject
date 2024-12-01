import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileIcon.css"; // Styling for the icon and dropdown

const ProfileIcon = () => {
  const { user } = useContext(AuthContext); // Assuming user details are stored in context
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and redirect to login
    localStorage.removeItem("user"); // Or clear context
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Extract first character from email
  const getProfileIcon = () => {
    if (user && user.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return "U"; // Default to "U" if no email available
  };

  return (
    <div className="profile-icon-container">
      {user ? (
        <div className="profile-icon" onClick={toggleDropdown}>
          {getProfileIcon()}
        </div>
      ) : null}
      {isDropdownVisible && (
        <div className="profile-dropdown">
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
