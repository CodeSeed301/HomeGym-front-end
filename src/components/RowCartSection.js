import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import deletePro from "../assets/images/deletePro.png";
export class RowCartSection extends Component {
  render() {
    const idx = this.props.idx;
    const title = this.props.name;
    const price= this.props.price;
    return (
      <>
        <Row style={{ border: "1px solid whitesmoke", padding: "5px", margin: "5px 0" }}>
          <Col>{this.props.name}</Col>
          <Col>{this.props.price}</Col>
          <Col>
            <Form.Control
              min="1"
              step="1"
              onChange={(e) => this.props.setQunValue(idx, title,price, e)}
              className="showQuantity"
              type="number"
              defaultValue={this.props.quantity}
            />
            
          </Col>
          <Col>
            <img src={deletePro} alt="delete" onClick={(idx) => this.props.deleteMyitem(idx)} />
          </Col>
        </Row>
      </>
    );
  }
}

export default RowCartSection;
