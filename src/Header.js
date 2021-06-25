import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar  expand="lg" className='navBar'  variant="dark">
          <Navbar.Brand href="#home">HomeGym</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            </Nav>
            <Form>
              <Button variant="outline-info">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
