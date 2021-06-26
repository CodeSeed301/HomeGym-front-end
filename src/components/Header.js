import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className='navBar' variant="dark">
          <Link className="mainLogo" to="/">Home<span>Gym</span></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>

              <Link to="/profile">Profile</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About us</Link>
            </Nav>
            <Form>
              <Button variant="outline-warning">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
