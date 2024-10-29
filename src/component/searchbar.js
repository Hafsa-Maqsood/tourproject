import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUsers, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import '../styles/searchbar.css';

function Searchbar() {
  const [destination, setDestination] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [distance, setDistance] = useState('');

  const destinations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];

  const handleSearch = () => {
    console.log({ destination, maxPeople, distance });
  };

  const handleMaxPeopleChange = (e) => {
    const value = e.target.value;
    // Allow only positive numbers or empty string
    if (value === '' || (Number(value) >= 0)) {
      setMaxPeople(value);
    }
  };

  return (
    <div className="searchbar">
      <div className="input-group">
        <label htmlFor="destination">Location</label>
        <input
          id="destination"
          list="destinations"
          placeholder="Select Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <datalist id="destinations">
          {destinations.map((dest) => (
            <option key={dest} value={dest}>{dest}</option>
          ))}
        </datalist>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
      </div>

      <div className="input-group">
        <label htmlFor="maxPeople">Max People</label>
        <input
          id="maxPeople"
          type="number"
          placeholder="Max People"
          value={maxPeople}
          onChange={handleMaxPeopleChange}
        />
        <FontAwesomeIcon icon={faUsers} className="icon" />
      </div>

      <div className="input-group">
        <label htmlFor="distance">Distance</label>
        <input
          id="distance"
          type="number"
          placeholder="Distance k/m"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <FontAwesomeIcon icon={faRulerHorizontal} className="icon" />
      </div>

      <button onClick={handleSearch} className="buttons">Search</button>
    </div>
  );
}

export default Searchbar;
