import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Components/Products";
import Home from './Home'

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Products />
         <Home/>
      </div>
    );
  }
}

export default App;
