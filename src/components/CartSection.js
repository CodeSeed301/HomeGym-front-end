import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartIcon from "../assets/images/cartIcon.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RowCartSection from "./RowCartSection";
import CheckoutModal from "./CheckoutModal"

export class cartSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  handleClose = () => this.setState({
    show: false
  });
  handleShow = () => this.setState({
    show: true
  })
  render() {
    return (
      <div>
        <Card className="text-center" id="cartSection">
          <Card.Header className="cardHeaderProfilePage">Cart Information</Card.Header>
          <Card.Body className="cartContainerBody">
            <Container className="cartMainContainer">
              <Row>
                <Col>
                  <h2>My Cart</h2>
                </Col>
                {/* <Col>
                  <img src={cartIcon} alt="carIcon" />
                </Col> */}
              </Row>
              <Row>
                <Col>
                  <Row className="TitleRowCart">
                    <Col>Product</Col>
                    <Col>Price</Col>
                    <Col>Quantity</Col>
                    <Col>Total</Col>
                    <Col>delete</Col>
                  </Row>
                  {this.props.myCart.map((item, index) => {
                    return (
                      <RowCartSection
                        deleteMyitem={this.props.deleteMyitem}
                        setQunValue={this.props.setQunValue}
                        name={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        idx={index}
                        key={item._id}
                      />
                    );
                  })}
                  <Row>
                    <Col>
                      <button className="checkoutBtn" onClick={this.handleShow}>Checkout</button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        {this.state.show && <CheckoutModal
          myCartData={this.props.myCart}
          handlePlaceOrder={this.props.handlePlaceOrder}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          show={this.state.show}
        />}
      </div>
    );
  }
}

export default cartSection;
