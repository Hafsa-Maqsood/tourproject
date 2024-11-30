import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup, Input, Button } from "reactstrap";
import "../styles/Search.css";
import { BASE_URL } from "../utils/config";
import TourCard from "./TourCard";  

const Search = () => {
  const locationRef = useRef("");
  const distanceRef = useRef("0");
  const maxGroupSizeRef = useRef("0");
  const navigate = useNavigate();

  const searchHandler = async (e) => {
    e.preventDefault();

    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required");
    }

    try {
      const res = await fetch(
        `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      );

      if (!res.ok) {
        return alert("Something went wrong");
      }

      const result = await res.json();

      // Checking if we are getting the correct result
      console.log(result);  // Check the API response in the console

      // Ensure 'result.data' contains the list of tours with image and other data
      if (result && result.data) {
        navigate(
          `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
          { state: result.data }  // Passing the data to the next page
        );
      } else {
        alert("No results found");
      }
    } catch (error) {
      alert(`Error fetching data: ${error.message}`);
    }
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form
          className="d-flex align-items-center gap-4"
          onSubmit={searchHandler}
        >
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <Input
                type="text"
                placeholder="Where are you going?"
                innerRef={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <Input
                type="number"
                placeholder="Distance (km)"
                innerRef={distanceRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <Input
                type="number"
                placeholder="0"
                innerRef={maxGroupSizeRef}
              />
            </div>
          </FormGroup>

          <Button type="submit" className="search_icon">
            <i className="ri-search-line"></i>
          </Button>
        </Form>
      </div>
    </Col>
  );
};

export default Search;