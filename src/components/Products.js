import React, { Component } from "react";
import OneProduct from "./OneProduct";
import FilterData from "./FilterData";
import axios from "axios"

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      filteredData: [],
    };
  }
  componentDidMount=()=>{
    axios.get('http://localhost:8080/equipments').then(response=>{
      this.setState({
        productsData:response.data,
        filteredData: response.data
      })
      
    }).catch((error)=>alert(error.message))
  }

  filterResult = (value) => {
    if (value === "all") {
      this.setState({
        filteredData: this.state.productsData,
      });
    } else {
      let newFilteredData = this.state.productsData.filter((product) => product.name === value);
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
              title={product.name}
              image_url={product.image_url}
              description={product.description}
              price={product.price}
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
