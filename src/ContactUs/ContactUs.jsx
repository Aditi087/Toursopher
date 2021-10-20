import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import { Header } from "../LayOut/Header/Header";
import { Footer } from "../footer/Footer";

export const ContactUs = () => {
  const validateEmail = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  let testCheckbox = document.getElementById("checkbox");
  
  const [inputState, setInputState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    Message: "",
    checkbox: "",
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
    if (!inputState.firstname) error.firstname = "First name is required";
    else if (inputState.firstname.length < 3)
      error.firstname = "Please enter a valid First Name";
    else if (/\d/.test(inputState.firstname))
      error.firstname = "Please enter a valid First Name";
    if (!inputState.lastname) error.lastname = "Last name is required";
    else if (inputState.lastname.length < 3)
      error.lastname = "Please enter a valid Last Name";
    else if (/\d/.test(inputState.lastname))
      error.lastname = "Please enter a valid Last Name";
    if (!inputState.phone) {
      error.phone = "Phone number is required";
    } else if (!validPhone.test(inputState.phone)) {
      error.phone = "Incorrect phone number";
    }
    if (!inputState.Message) {
      error.Message = "You can't empty this field";
    }
    // if (!testCheckbox.checkbox) {
      if (!inputState.checkbox) {
      error.checkbox = "Please accept terms and conditions";
    } else {
    }
    return error;
  };

  
  const history = useHistory();
  
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
            "Your details has been saved , our tour guide will contact you shortly"
          );
          setInputState({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            Message: "",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("wrong information");
        });
    }
  };

  return (
    <body id="ContactUsBody">
      <Header />
      <Container>
        <div id="contUs">
          <div id="contUs1">
            <h3>GET IN TOUCH</h3>
            <p className="info">Phone: +(123) 4567890</p>
            <p className="info">Email: toursopher@gmail.com</p>
          </div>

          <form id="cForm">
            <div class="row">
              <div class="col-6" id="contUs2">
                <input
                  type="text"
                  name="firstname"
                  value={inputState.firstname}
                  onChange={postinputState}
                  placeholder="Enter Your First Name"
                  
                ></input>
                <p
                  className="error"
                  
                >
                  {error.firstname}
                </p>

                
                <input
                  type="text"
                  name="lastname"
                  value={inputState.lastname}
                  onChange={postinputState}
                  placeholder="Enter Your Last Name"
                  
                ></input>
                <p
                  className="error"
                  
                >
                  {error.lastname}
                </p>

               
                <input
                  type="email"
                  name="email"
                  value={inputState.email}
                  onChange={postinputState}
                  placeholder="Enter your email"
                  
                ></input>
                <p
                  className="error"
                  
                >
                  {error.email}
                </p>

                <input
                  type="text"
                  name="phone"
                  value={inputState.phone}
                  onChange={postinputState}
                  placeholder="Enter Your Phone Number"
                  
                ></input>
                <p
                  className="error"
                  
                >
                  {error.phone}
                </p>

              </div>
              <div class="col-6" id="contUs3">
                <textarea
                  name="Message"
                  value={inputState.Message}
                  onChange={postinputState}
                  cols="26"
                  placeholder="Message Us"
                  
                ></textarea>
                <p
                  id="merror"
                  
                >
                  {error.Message}
                </p>
              </div>
              <div class="form-group form-check" id="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  value={inputState.checkbox}
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                ></input>
                <p
                  id="cherror"
                  
                >
                  {error.checkbox}
                </p>
                <label class="form-check-label" for="exampleCheck1">
                  I hereby accept the{" "}
                  <Link to="/privacy policy">Privacy Policy</Link> and I
                  authorise Toursopher Team to contact me.
                </label>
                
              </div>
            </div>

            <button id="contUsbtn" onClick={submitHandler}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </Container>
      <Footer />
    </body>
  );
};
