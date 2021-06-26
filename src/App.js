import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
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
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
     
      </div>
    );
  }
}

export default App;
