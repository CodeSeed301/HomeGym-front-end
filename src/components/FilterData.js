import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class FilterData extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <Form.Control
            type="text"
            value={this.props.searchedItem}
            onChange={this.props.dynamicSearchedItem}
            placeholder="Search for product"
          />
        </Col>
        <Col xs lg="4">
          <Form.Control as="select" onChange={(e) => this.props.filterResult(e.target.value)}>
            <option value="all">Show All</option>
            {this.props.productsData.map((product, index) => {
              return (
                <option key={index} value={product.name}>
                  {product.name}
                </option>
              );
            })}
          </Form.Control>
        </Col>
      </Row>
    );
  }
}

export default FilterData;
