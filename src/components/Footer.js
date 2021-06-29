import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Container fluid>

          <Row className="footerRow">
            <Col lg={4} className="footerCols">
              <h4 >About us </h4>
              <p>
                We want to help you live a fit and healthy life style !
                We do this by helping you find the most suitable equipment for your home gym ,
                keeping your budget , life style and fitness goals in mind .
                we stouk a wide range of gym equipmint cardio, cross traninig and so much more .
                our awesome team is always keen to help , so please call us to disscuss your needs.
              </p>
            </Col>
            <Col lg={4} className="footerCols">
              <h4>Links</h4>
              <div className="footerIconContainer">
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/about">About us</Link>
              </div>

            </Col>
            <Col lg={4} className="footerCols">
              <h4>Contact Us</h4>
              <div className="footerIconContainer">
                <a href="https://github.com" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://web.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">  <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" >   <FontAwesomeIcon icon={faInstagram} size="2x" /></a>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
