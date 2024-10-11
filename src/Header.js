import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './App.css'
const Header = () => {
    return (
      <Navbar style={{ backgroundColor: "#200731" }} sticky="top" variant="dark" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728000000&semt=ais_hybrid"
            width="110px"
            height="70px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
  
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/project-management" style={{ color: "white",boxShadow:"3px 4px 5px  5px purple",marginRight:"20px" }}>
            Add Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/payment-tracking" style={{ color: "white",boxShadow:"3px 4px 5px  5px purple",marginRight:"20px" }}>
            Payment 
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  };
  
  export default Header;