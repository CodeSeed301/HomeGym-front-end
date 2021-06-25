import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">HomeGym</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            
          </Nav>
          <Button variant="outline-info">Login</Button>
        </Navbar>
      </>
    );
  }
}

export default Header;
