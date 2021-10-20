import React, {  useState } from "react";
import PlaceData from "../../json/tour.json";
import {Header} from "../../LayOut/Header/Header";
import {  useParams, useHistory } from "react-router-dom";
import "./details.css";
import { Footer } from "../../footer/Footer";

export const Details = () => {
  const history = useHistory();
  let { place_id, cat_id } = useParams();
  const [book, setbook] = useState("Book now");
  let Catagory_page = PlaceData.Places.find((data) => data.id === place_id);
  const details = Catagory_page.catagory.find((data) => data.id === cat_id);
  console.log(details.id);
  let obj = {};
  let t = details.id;
 
  const book1 = () => {
    
    {
      window.localStorage.setItem(
        t,
        JSON.stringify({
          ...obj,
          t,
        })
      );
    }

    alert("Thanks for booking");
    setbook("Booked");
  };


  const book2 = () => {
    alert("You have to login first");
    history.push("/Login");
  };

  const Book3 = () => {
    {
      window.localStorage.removeItem(
        t,
        
      );
    }
    alert("Boking Cancelled");
    
    
    setbook("Book Now")
  };

  return (
    <body id="det">
      <Header></Header>
      <h3>{details.c_name}</h3>
      <div id="details">

        {window.sessionStorage.setItem(
          t,
          JSON.stringify({
            ...obj,
            t,
          })
        )}
        <div id="cd">
          <div class="col-8 mt-3" id="Dcard" >
            <div class="card"  id="dC">
              <div class="card-horizontal">
                <div class="img-square-wrapper">
                  <img
                    class="imgD"
                    src={details.c_image}
                    alt="Card image cap"
                  ></img>
                </div>
                <div class="card-body" id="dCbody">
                  <h4 class="card-title">{details.c_name}</h4>
                  <h5>Rs. {details.price} (for two)</h5>
                  <p class="card-text">{details.c_des}</p>

                  {window.sessionStorage.getItem("Token") ? (
                    window.localStorage.getItem(details.id) ===
                    window.sessionStorage.getItem(details.id) ? (
                      <div>
                      <button id="booked">Booked</button>
                      <button id="btnD" onClick={Book3}>Cancel</button></div>
                      
                    ) : (
                      <button id="btnD" onClick={book1}>
                        Book now
                      </button>
                    )
                  ) : (
                    <button id="btnD" onClick={book2}>
                      Book now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </body>
  );
};
