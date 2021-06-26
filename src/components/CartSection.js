import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartIcon from "../assets/images/cartIcon.png";
import deletePro from "../assets/images/deletePro.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class cartSection extends Component {
  render() {
    return (
      <div>
        <Card className="text-center" >
          <Card.Header>Checkout Cart</Card.Header>
          <Card.Body className="cartContainerBody">
            <Container className='cartMainContainer'>
              <Row className='cartContainerHeader'>
                <Col>
                  <h2>My Cart</h2>
                </Col>
                <Col>
                  <img src={cartIcon} alt="carIcon" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>Product</Col>
                    <Col>Qunatity</Col>
                    <Col>delete</Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row style={{ border: '2px solid black', padding: '5px', margin: '5px 0' }}>
                    <Col>PR Name</Col>
                    <Col>Qunatity</Col>
                    <Col><img src={deletePro} alt="delete" /></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="outline-warning">Checkout</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card.Body>

        </Card>

      </div>
    );
  }
}

export default cartSection;
