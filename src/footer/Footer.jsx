import React,{useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './footer.css';
import logo from "../assets/logo.png"
import { Container } from "react-bootstrap";
import {FaFacebook,FaTwitter} from 'react-icons/fa';
import {RiInstagramFill,RiYoutubeFill} from 'react-icons/ri'


export const Footer = () => {

  const validateEmail = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
  
  const [inputState, setInputState] = useState({
    
    email: "",
  });
  const [error, setError] = useState({});
  let name, value;
  const postinputState = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInputState({ ...inputState, [name]: value });
  };
  const validation = () => {
    let error = {};
    if (!inputState.email) {
      error.email = "Email is required";
    } else if (!validateEmail.test(inputState.email)) {
      error.email = "Invalid Email";
    }
    
    return error;
  };

  
  
  
  const submitHandler = (event) => {
    event.preventDefault();
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length !== 0) {
    } else {
      console.log(inputState);
      const value = inputState;
      axios
        .post("https://jsonplaceholder.typicode.com/users", value)
        .then((res) => {
          console.log("Axios res: ", res);
          alert(
            "Thanks for subscription"
          );
          setInputState({
            email: "",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("wrong information");
        });
    }
  };


  return (
    <>

    <div id="footer">
      <Container>
      <div id="fhead">
      <img id="flogo" src={logo}/>
      <div id="fhead2">
      <p><b>Phone : </b>(123) 456-7890</p>
      <p><b>email : </b>toursopher@gmail.com</p>
      </div>
      </div>
        <div class="row" id="ftr">
          <div class="col-3" id="ftr1">
            <p className="headline">Our Services</p>
            <Link to="/places">International Tour</Link>
            <Link as={Link} to="/places">India Tour</Link>
            <Link as={Link} to="/places">Summer Vacation</Link>
            <Link as={Link} to="/places">Winter Vacation</Link>
          </div>
          <div class="col-3" id="ftr2">
          <p className="headline">Overview</p>
            <Link as={Link} to="/">Home</Link>
            <Link as={Link} to="/AboutUs">About Us</Link>
            <Link as={Link} to="/Blog">Blog</Link>
            <Link as={Link} to="/contactUs">Contact Us</Link>
          </div>
          <div class="col-3" id="ftr3" >
          <p className="headline">Follow</p>
            <a href="https://www.facebook.com/"><FaFacebook/></a>
            <a href="https://twitter.com/"><FaTwitter/></a>
            <a href="https://www.instagram.com/"><RiInstagramFill/></a>
            <a href="https://www.youtube.com/"><RiYoutubeFill/></a>
          </div>
          <div class="col-3" id="ftr4">
          <p className="headline">Subscribe for More Info</p>
          <form >
          <input
                  type="email"
                  name="email"
                  value={inputState.email}
                  onChange={postinputState}
                  placeholder="Enter your email"
                  
                ></input>
                <p
                  id="ferror"
                  
                >
                  {error.email}
                </p>
                        
                    <button id="fbtn" onClick={submitHandler}>Subscribe</button>
                </form>
          </div>
        </div>
        </Container>
        <div id="ff">
            <p>@2021 copyright <Link to="/">Toursopher.com</Link></p>
          </div>
      </div>
    </>
  );
};
