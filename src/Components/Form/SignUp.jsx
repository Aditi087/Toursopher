import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../../LayOut/Header/Header';
import { Footer } from '../../footer/Footer';


export default function SignUp() {
    const validateEmail=RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const validPassword=RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/)
    const validPhone=RegExp(/^[6-9]{1}[0-9]{9}$/)
    
    const [inputState, setInputState] = useState({
        username: "",
        email: "",
        phone: "",
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
        if (!inputState.username) {
            error.username = "Username is required";
          } else if (inputState.username.length < 3) {
            error.username = "At least 3 characters";
          }
          else if (/\d/.test(inputState.username)){
          error.username = "Please enter a valid Username";
          }
        if (!inputState.email) {
          error.email = "Email is required";
        } else if (!validateEmail.test(inputState.email)) {
          error.email = "Invalid Email";
        }
        
        if (!inputState.phone) {
          error.phone = "Phone number is required";
        } else if (!validPhone.test(inputState.phone)) {
          error.phone = "Incorrect phone number";
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
            .post("https://project-node-1.herokuapp.com/postUserData", value)
            .then((res) => {
              console.log("Axios res: ", res);
              alert("Registration Successful")
                history.push("/login")
              setInputState({
                username: "",
                email: "",
                phone: "",
                password: "",
              });
            })
            .catch((err) => {
              console.log(err);
              alert("Already Registered")
            });
        }
      };
    return (
        <>
            <Header/>
            <Container>
                <div id="sgnup" class="shadow-lg p-3 mb-5 bg-white rounded">
                <h4>SignUp</h4>
                <p>Please fill your information to register.</p>
                <form>
                <input
                  type="text"
                  name="username"
                  value={inputState.username}
                  onChange={postinputState}
                  placeholder="Enter username"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.username}
                </p>

               
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
                  type="text"
                  name="phone"
                  value={inputState.phone}
                  onChange={postinputState}
                  placeholder="Enter Your Phone Number"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.phone}
                </p>

                <input
                  type="password"
                  name="password"
                  value={inputState.password}
                  onChange={postinputState}
                  placeholder="Create password"
                  
                ></input>
                <p
                  className="Lerror"
                  
                >
                  {error.password}
                </p>

                        
                    <button id="sbtn" onClick={submitHandler}>SUBMIT</button>
                    <p>Already have an account? <Link to={`/Login`}> Log In</Link></p>
                </form>
                </div>
            </Container>
            <Footer/>
        </>
    )
}
