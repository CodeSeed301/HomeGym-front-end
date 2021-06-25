import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FilterData extends Component {
  render() {
    return (
      <div>
        <Form.Control as="select" onChange={(e) => this.props.filterResult(e.target.value)}>
          <option value="all">Show All</option>
          {this.props.productsData.map((product, index) => {
            return (
              <option key={index} value={product.title}>
                {product.title}
              </option>
            );
          })}
        </Form.Control>
      </div>
    );
  }
}

export default FilterData;
