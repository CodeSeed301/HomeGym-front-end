import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartIcon from "../assets/images/cartIcon.png";
import deletePro from "../assets/images/deletePro.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RowCartSection from "./RowCartSection";

export class cartSection extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header className="cardHeaderProfilePage">Checkout Cart</Card.Header>
          <Card.Body className="cartContainerBody">
            <Container className="cartMainContainer">
              <Row>
                <Col>
                  <h2>My Cart</h2>
                </Col>
                <Col>
                  <img src={cartIcon} alt="carIcon" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="TitleRowCart">
                    <Col>Product</Col>
                    <Col>Price</Col>
                    <Col>Quantity</Col>
                    <Col>delete</Col>
                  </Row>
                  {this.props.myCart.map((item, index) => {
                    return (
                      <RowCartSection
                        deleteMyitem={this.props.deleteMyitem}
                        setQunValue={this.props.setQunValue}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        idx={index}
                        key={index}
                      />
                    );
                  })}
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
