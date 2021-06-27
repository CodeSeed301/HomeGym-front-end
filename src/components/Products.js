import React, { Component } from "react";
import OneProduct from "./OneProduct";
import FilterData from "./FilterData";
import Data from "../assets/data/productsData.json";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: Data,
      filteredData: Data,
    };
  }

  filterResult = (value) => {
    if (value === "all") {
      this.setState({
        filteredData: this.state.productsData,
      });
    } else {
      let newFilteredData = this.state.productsData.filter((product) => product.title === value);
      this.setState({
        filteredData: newFilteredData,
      });
    }
  };

  render() {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <FilterData filterResult={this.filterResult} productsData={this.state.productsData} />
        {this.state.filteredData.map((product, index) => {
          return (
            <OneProduct
              title={product.title}
              image_url={product.image_url}
              description={product.description}
              key={index}
              addToCart={this.addToCart}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
