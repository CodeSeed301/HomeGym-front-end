import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardBlog4 extends Component {
  render() {
    return (
      <Link to="/blog4">
        <div className="homeCard">
          <img
            src="https://image.freepik.com/free-photo/beautiful-woman-dark-background-is-engaged-fitness_2221-2276.jpg"
            alt=""
          />
          <div className="cardText">
            <h5>Bite-sized exercise breaks..</h5>
            <p>Exercise snacking differs from HIIT in both the duration of the activity ...Read More</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default CardBlog4;
