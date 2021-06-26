import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import Home from './components/Home';
import AboutUs from './components/AboutUs';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer';
import './style/App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
          </Switch>
          <Footer />
        </Router>
        {/* <Home />
        <Products /> */}
      </div>
    );
  }
}

export default App;
