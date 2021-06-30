import React, { Component } from "react";
import OneProduct from "./OneProduct";
import FilterData from "./FilterData";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import AddItemModal from "./AddItemModal";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      cart: [],
      filteredData: [],
      showAddItemModal:false,
      searchedItem: "",
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
    // this.setState({
      
    // })
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
          showAddItemModal:true
        }
        ,()=>{
          window.setTimeout(()=>{
            this.setState({showAddItemModal:false})
          },1000)
        });
      })
      .catch((error) => alert(error.message));
  };

  dynamicSearchedItem = (e) => {
    let newFilteredData = this.state.productsData.filter((itemName) =>
      itemName.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredData: newFilteredData,
      searchedItem: e.target.value,
    });
  };

  render() {
    return (

      <div style={{ width: "80%", margin: "auto", minHeight: "65vh" }}>
      {
          this.state.showAddItemModal&& <AddItemModal showAddItemModal={this.state.showAddItemModal}/>
        }
        <FilterData
          filterResult={this.filterResult}
          productsData={this.state.productsData}
          searchedItem={this.state.searchedItem}
          dynamicSearchedItem={this.dynamicSearchedItem}
        />

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
