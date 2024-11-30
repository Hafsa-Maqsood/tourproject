import React,{useRef} from 'react';
import { FaSearch, FaMapMarkerAlt, FaRuler, FaUsers } from 'react-icons/fa';
import "../styles/Search.css";
import { Col, Form, FormGroup, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";


const Search = async()=> {
  const locationRef =useRef("");
  const distanceRef =useRef("0");
  const maxGroupSizeRef =useRef("0");
  const navigate = useNavigate();

  const searchHandler = async ()=>{
    const location= locationRef.current.value;
  const distance =distanceRef.current.value;
  const maxGroupSize =maxGroupSizeRef.current.value;

if(location===""|| distance ==="" || maxGroupSize === ""){
  return alert("All fields are required")
  }

  const res = await fetch(`${BASE_URL}/tours/saerch/getTourBySeacrh?city=
    ${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

    if(!res.ok) alert ("Something went wrong")

      const result = await res.json()

      navigate(`/tours/search/getTourBySeacrh?city=
    ${location}&distance=${distance}&maxGroupSize=
    ${maxGroupSize}`, 
    {state: result.data}
  );
  
  };


  return (
    <Col lg="12">
    <div className="search_bar">
      <Form className="d-flex align-items-center gap-4" onSubmit={searchHandler}>
        <FormGroup className="d-flex gap-3 form_group form_group-fast">
          <span>
            <i className="ri-map-pin-line"></i>
          </span>
          <div>
            <h6>Location</h6>
            <Input type="text" placeholder="Where are you going?" innerRef={locationRef} />
          </div>
        </FormGroup>

        <FormGroup className="d-flex gap-3 form_group form_group-fast">
          <span>
            <i className="ri-map-pin-time-line"></i>
          </span>
          <div>
            <h6>Distance</h6>
            <Input type="number" placeholder="Distance (km)" innerRef={distanceRef} />
          </div>
        </FormGroup>

        <FormGroup className="d-flex gap-3 form_group form_group-last">
          <span>
            <i className="ri-group-line"></i>
          </span>
          <div>
            <h6>Max People</h6>
            <Input type="number" placeholder="0" innerRef={maxGroupSizeRef} />
          </div>
        </FormGroup>

        <Button type="submit" className="search_icon">
          <i className="ri-search-line"></i>
        </Button>
      </Form>
    </div>
  </Col>
  );
}

export default Search;