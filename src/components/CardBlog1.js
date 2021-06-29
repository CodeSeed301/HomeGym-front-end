import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardBlog1 extends Component {
  render() {
    return (
      <Link to="/blog1">
        <div className="homeCard">
          <img src="https://images01.nicepage.com/a7/74/a7748786bf152269c29724fc922de7de.png" alt="CardBlog1" />
          <div className="cardText">
            <h5>Fitness Advice That Doesn't Work?!!</h5>
            <p>Ignore bad fitness advice to make the most out of your time.... Read More</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default CardBlog1;
