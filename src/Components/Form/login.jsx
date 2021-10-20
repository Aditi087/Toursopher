import React, { useState } from "react";
import { Container, Modal,Button } from "react-bootstrap";
import axios from "axios";
import "./form.css"
import { useHistory } from "react-router";
import { Header } from "../../LayOut/Header/Header";
import { Link } from "react-router-dom";
import {Footer} from "../../footer/Footer"

export default function Login() {
  
  const validateEmail = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const validPassword = RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/);
  
  const [inputState, setInputState] = useState({
    email: "",
    password:"",
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
    if (!inputState.password) {
      error.password = "Enter password";
    } else if (!validPassword.test(inputState.password)) {
      error.password = "atleast 1 uppercase 1 lowercase and 1 number minimum 8 characters";
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
        .post("https://project-node-1.herokuapp.com/postLoginData", value)
        .then((res) => {
          console.log("Axios res: ", res);
          window.sessionStorage.setItem("Token", res.data.token);
          window.sessionStorage.setItem("Username", res.data.result.userName);
          alert("login successful");
          history.push("/");
          setInputState({
            email: "",
            password:"",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("email/password doesn't match");
        });
    }
  };



  return (
    <>
      <Header></Header>
      <Container>
        <div div id="lgin" class="shadow-lg p-3 mb-5 bg-white rounded">
        <h4>Login</h4>
        <form >
        <input
                  type="email"
                  name="email"
                  value={inputState.email}
                  onChange={postinputState}
                  placeholder="Enter your email"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.email}
                </p>
                <input
                  type="password"
                  name="password"
                  value={inputState.password}
                  onChange={postinputState}
                  placeholder="Enter your password"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.password}
                </p>
                        
                    <button id="lbtn" onClick={submitHandler}>Login</button>
                    <p>Don't have an account? <Link to={`/SignUp`}>  Create an account</Link></p>
                </form>
        </div>
      </Container>
      <Footer/>
    </>
  );
}
