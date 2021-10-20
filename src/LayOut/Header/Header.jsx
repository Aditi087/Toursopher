import React,{useState} from "react";
import { Navbar, Nav,Container,Dropdown,DropdownButton, Modal } from "react-bootstrap";
import "./Header.css";
import { Link,useHistory} from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../../assets/logo.png"

export const Header = () => {

  const [show, setShow] = useState(false);
  const handleClose1 = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, onChange] = useState(new Date());


  const history = useHistory();
  const Signup = () => {
    history.push("/SignUp");
  };
  const Login = () => {
    history.push("/Login");
  };

  const Logout = () => {
    history.push("/");
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" id="nav">
        <Container>
          <Navbar.Brand as={Link} to=""><img id="logo" src={logo}></img></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link id="navLink" as={Link} to="/">Home</Nav.Link>
            <Nav.Link id="navLink" as={Link} to="/places">Places</Nav.Link>
            <Nav.Link id="navLink" as={Link} to="/AboutUs" >About</Nav.Link>
            <Nav.Link id="navLink" as={Link} to="/ContactUs">Contact</Nav.Link>

            <Nav.Link id="navLink"  onClick={handleShow}>
              Calender
            </Nav.Link>

            <Modal
              show={show}
              onHide={handleClose1}
              style={{ marginTop: "80px" }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Calender</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Calendar onChange={onChange} value={value} />
              </Modal.Body>
            </Modal>


            
              

            
              <DropdownButton
                title={window.sessionStorage.getItem("Username")}
                align="end"
                
                drop='down'
                variant="secondary"  id="dropdownbtn">
            
                

            {window.sessionStorage.getItem("Token") ? (
                    
                   
                    <Dropdown.Item className="drop"  onClick={Logout}>LogOut</Dropdown.Item>
                    
                  ) : (
                    <div id="d">
                      <Dropdown.Item className="drop" onClick={Login}>Login</Dropdown.Item>
                      <Dropdown.Item className="drop" onClick={Signup}>Signup</Dropdown.Item>
                      </div>
                       
                  )}
                  </DropdownButton>
                  

          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};

