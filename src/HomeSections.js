import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "./assets/images/homeSec1.png";

export class HomeSections extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row style={{background:'whitesmoke'}}>
            <Col>
              <img src={image1} alt="random" />
            </Col>

            <Col>
              <h2>TEXT HERE</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
                molestiae voluptatem. Facere eum quaerat voluptate! Quisquam, id
                suscipit eius maxime perspiciatis consectetur recusandae rem
                eligendi quia necessitatibus est reiciendis.
              </p>
            </Col>
          </Row>
          <Row style={{background:'white'}}>
            <Col>
              <h2>TEXT HERE</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
                molestiae voluptatem. Facere eum quaerat voluptate! Quisquam, id
                suscipit eius maxime perspiciatis consectetur recusandae rem
                eligendi quia necessitatibus est reiciendis.
              </p>
            </Col>

            <Col>
              <img src={image1} alt="random" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeSections;
