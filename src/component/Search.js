import React,{useRef} from 'react';
import { FaSearch, FaMapMarkerAlt, FaRuler, FaUsers } from 'react-icons/fa';
import "../styles/Search.css";
export default function Search() {
  const locationRef =useRef("");
  const distanceRef =useRef("0");
  const maxGroupSizeRef =useRef("0");
  const searchHandler=()=>{
    const location= locationRef.current.value;
  const distance =distanceRef.current.value;
  const maxGroupSize =maxGroupSizeRef.current.value;
if(location===""|| distance ==="" || maxGroupSize === "")
  return alert("All fields are required")
  }
  return (
    <div className="tour-search">
      {/* Location field */}
      <div className="search-field">
        <FaMapMarkerAlt className="icon" />
        <div className="field-text">
          <label>Location</label>
          <input type="text" placeholder="Where are you going?" ref={locationRef} />
        </div>
      </div>

      {/* Distance field */}
      <div className="search-field">
        <FaRuler className="icon" />
        <div className="field-text">
          <label>Distance</label>
          <input type="number" placeholder="Distance (km)" ref={distanceRef} />
        </div>
      </div>

      {/* Max People field */}
      <div className="search-field">
        <FaUsers className="icon" />
        <div className="field-text">
          <label>Max People</label>
          <input type="number" placeholder="0" ref={maxGroupSizeRef} />
        </div>
      </div>

      {/* Search button */}
      <button className="search-button" onClick={searchHandler}>
        <FaSearch />
      </button>
    </div>
  );
}