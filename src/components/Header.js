import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { withAuth0 } from "@auth0/auth0-react";

export class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar expand="lg" className="navBar" variant="dark">
          <Link className="mainLogo" to="/">
            Home<span>Gym</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              {isAuthenticated && <Link to="/profile">Profile</Link>}
              <Link to="/products">Products</Link>
              <Link to="/about">About us</Link>
            </Nav>
            <Form>{isAuthenticated ? <Logout /> : <Login />}</Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withAuth0(Header);
