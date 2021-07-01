import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Profile from "./components/Profile";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import Blog4 from "./components/Blog4";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
            <Route exact path="/blog1">
              <Blog1 />
            </Route>
            <Route exact path="/blog2">
              <Blog2 />
            </Route>
            <Route exact path="/blog3">
              <Blog3 />
            </Route>
            <Route exact path="/blog4">
              <Blog4 />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
