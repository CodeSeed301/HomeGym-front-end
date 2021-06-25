import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import {faInstagram, faFacebook , faTwitter, faGithub}  from '@fortawesome/free-brands-svg-icons'

export class Footer extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{  background: "gray" }}>
          <Row>
            <Col lg={4}>
              <h4>About</h4>
              <p>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
                molestiae voluptatem. Facere eum quaerat voluptate! Quisquam, id
                suscipit eius maxime perspiciatis consectetur recusandae rem
                eligendi quia necessitatibus est reiciendis.
              </p>
            </Col>
            <Col lg={4}>
              <h4>Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Profile</a>
                </li>
                <li>
                  <a href="#home">Products</a>
                </li>
                <li>
                  <a href="#home">About us</a>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h4>Contact Us</h4>
              <div>
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
               
                  

                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
