import React, { Component } from "react";
import OneProduct from "./OneProduct";
import FilterData from "./FilterData";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      cart: [],
      filteredData: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:8080/equipments")
      .then(async (response) => {
        let cart = [];
        if (this.props.auth0.user) {
          let res2 = await axios.get(`http://localhost:8080/profile?email=${this.props.auth0.user.email}`);
          cart = res2.data.equipment;
        }
        this.setState({
          productsData: response.data,
          cart,
          filteredData: response.data,
        });
      })
      .catch((error) => alert(error.message));
  };

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
  setCart = (productName, price) => {
    const reqBody = {
      email: this.props.auth0.user.email,
      title: productName,
      quantity: 1,
      price: price,
    };
    axios
      .post("http://localhost:8080/product", reqBody)
      .then((respsnon) => {
        this.setState({
          cart: respsnon.data.equipment,
        });
      })
      .catch((error) => alert(error.message));
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
              id={product.id}
              key={index}
              setCart={this.setCart}
              isInCart={this.state.cart.find((cartItem) => cartItem.title === product.name)}
            />
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Products);
