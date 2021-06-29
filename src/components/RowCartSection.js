import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import deletePro from "../assets/images/deletePro.png";
export class RowCartSection extends Component {
  render() {
    const idx = this.props.idx;
    const title = this.props.name;
    const price = this.props.price;
    return (
      <Row className="RowCartItem">
        <Col>{this.props.name}</Col>
        <Col>{this.props.price} Jd</Col>
        <Col>
          <Form.Control
            min="1"
            onChange={(e) => this.props.setQunValue(idx, title, price, e)}
            className="showQuantity"
            type="number"
            value={this.props.quantity}
          />
        </Col>
        <Col>{this.props.price*this.props.quantity} Jd</Col>
        <Col>
        <img src="https://img.icons8.com/material-rounded/24/000000/delete.png" onClick={() => this.props.deleteMyitem(idx)}alt="delete" style={{cursor:'pointer',color:'white'}}/>
        </Col>
      </Row>
    );
  }
}

export default RowCartSection;
