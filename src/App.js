import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Components/Products";

export class App extends Component {
  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}

export default App;
