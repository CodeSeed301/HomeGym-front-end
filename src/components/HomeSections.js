import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Pic1 from "../assets/images/picSec1.png";
import CardBlog1 from "./CardBlog1";
import CardBlog2 from "./CardBlog2";
import CardBlog3 from "./CardBlog3";
import CardBlog4 from "./CardBlog4";

export class HomeSections extends Component {
  render() {
    return (
      <div>
        <Container className="cardsContainer" fluid>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <CardBlog1 />
            </Col>
            <Col xs lg="4">
              <CardBlog2 />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <CardBlog3 />
            </Col>
            <Col xs lg="4">
              <CardBlog4 />
            </Col>
          </Row>
        </Container>
        <Container fluid className="sectionContainer">
          <Row className="sectionContainerRow">
            <Col className="sectionContainerTextCol">
              <div className="textHolder">
                <h2>
                  <span>
                    <img
                      style={{ width: "20%" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHFIVLvbo5pCxguPfIsVw0e0IqkIunT1bN9GEbTzMOCv5MXtL0k1xaxW425Qqzpmgojs&usqp=CAU"
                      alt="pic1"
                    />
                  </span>
                  <span className="discount">UPTO</span> 25% OFF
                </h2>
                <p>
                  On the occasion of the one year anniversary of your permanent trust, and your good choice of us, 25%
                  discount on all products. As always, HomeGym is your best choice throughout the year. Stay tuned for
                  more upcoming surprises.
                </p>
                <Link to="/products">
                  <Button variant="warning">GET THE CHANCE !!</Button>
                </Link>
              </div>
            </Col>
            <Col>
              <img className="pic1" src={Pic1} alt="random" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeSections;
