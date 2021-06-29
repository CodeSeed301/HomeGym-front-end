import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardBlog3 extends Component {
  render() {
    return (
      <div>
        <Link to="/blog3">
          <div className="homeCard">
            <img src="https://images01.nicepage.com/15/e0/15e03f0cf3690350333de385012e581a.png" alt="" />
            <div className="cardText">
              <h5>The Mental Health Benefits of Exercise</h5>
              <p>You already know that exercise is good for your body. But did you know ...Read More</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CardBlog3;
