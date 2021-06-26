import React, { Component } from "react";
import CartSection from "./CartSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class profile extends Component {
  render() {
    return (
      <div>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <img src="https://via.placeholder.com/200x200/000000" alt="" />
            </Col>
            <Col>
              <div>
                <h2>User Name</h2>

                <h4>Email</h4>
              </div>
            </Col>
          </Row>
        </Container>
        <CartSection />
     
      </div>
    );
  }
}

export default profile;
