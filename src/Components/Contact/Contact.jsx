import React, {useState} from "react";
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import './Contact.css'

export const Contact = () => {

  const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$')
    const validPhone=RegExp(/^[6-9]{1}[0-9]{9}$/)
    const[inputState,setInputState]=useState({isError:{
        
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
    }})

    const handleChange=(event)=>{
        event.persist();
        let {name,value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            
            case "firstname":
                errHandle.firstname=
                value.length<3? "Atleast 3 characters":"";
                break;
            case "lastname":
                  errHandle.lastname=
                  value.length<3? "Atleast 3 characters":"";
                  break;
            case "email":
                errHandle.email=
                validateEmail.test(value)?"":"Enter a valid email"
                break;
            case "phone":
                errHandle.phone=
                validPhone.test(value)?"":"Enter a valid Phone number"
                break;
            default:
                break;
        }
        setInputState({...inputState,[name]:value,isError:errHandle})
        console.log("InputState: ",inputState);
    }
    const history=useHistory()
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(inputState);
        const value=inputState
        axios.post('https://jsonplaceholder.typicode.com/users',value)
            .then((res)=>{
                console.log("Axios res: ",res);
                alert("Your details has been saved , our tour guide will contact you shortly")
            })
            .catch((err)=>{
                console.log(err);
                alert("wrong information")
            })
    }


  return (
    <>
      <Container>
      <div class="row" id="cont">
        <div id="cont1" class="col-8">
          <h5>PLAN YOUR HOLIDAYS WITH OUR TOUR GUIDE,</h5>
          <h4>JUST FILL IN YOUR DETAILS.</h4>
        </div>
      
        <div class="col-4" id="cont2">
          <form onSubmit={submitHandler}>
      
                    <input type="text" name="firstname" placeholder="Enter Your First Name" onChange={handleChange}></input>
                    {inputState.isError.firstname.length>3 &&
                    (<span>{inputState.isError.firstname}</span>)}
                    <input type="text" name="lastname" placeholder="Enter Your Last Name" onChange={handleChange}></input>
                    {inputState.isError.lastname.length>3 &&
                    (<span>{inputState.isError.lastname}</span>)}
                    <input type="email" name="email" placeholder="Enter your email" onChange={handleChange}></input>
                    {inputState.isError.email.length>0 &&
                    (<span>{inputState.isError.email}</span>)}
                    <input type="text" name="phone" placeholder="Enter Your Phone Number" onChange={handleChange}></input>
                    {inputState.isError.phone.length>10 &&
                    (<span>{inputState.isError.phone}</span>)}
                    <div class="form-group form-check" id="chbox">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" required></input>
                      <label class="form-check-label" for="exampleCheck1">I hereby accept the <Link to='/privacy policy'>Privacy Policy</Link> and I authorise Toursopher Team to contact me.</label>
                    </div>
                        
                    <button id="contbtn" >SUBMIT</button>
                </form>
              </div>
        </div>
      </Container>
    </>
  );
};
