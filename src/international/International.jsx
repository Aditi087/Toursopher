import React from "react";
import PlaceData from "../json/international.json";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./international.css";

const International = () => {
  console.log(PlaceData);
  return (
    <>
      
        <div id="caro" class="shadow-lg p-3 mb-5 bg-white rounded">
            <h5 id="iSpcl">International</h5>
        <Carousel fade>
        {PlaceData.Places.map((PlaceData) => (
            <Carousel.Item>
                <img id="imgS" className="d-block w-100" src={PlaceData.p_img} alt="First slide"/>
            <Carousel.Caption>
            <Link
                  id="name"
                  to={`/catagory/${PlaceData.id}`}
                  key={PlaceData.id}
                >
                  <h5> {PlaceData.p_name}</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Link>
            </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
        </div>
      
    </>
  );
};
export default International;
