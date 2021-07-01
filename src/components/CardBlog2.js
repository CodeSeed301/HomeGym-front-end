import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CardBlog2 extends Component {
  render() {
    return (
      <Link to="/blog2">
        <div className="homeCard">
          <img
            src="http://boomboomsportfitness.com/wp/wp-content/uploads/2020/09/54441044-hombre-atletico-mostrando-cuerpo-musculoso-y-haciendo-ejercicios-con-pesas-sobre-fondo-negro-blanco-y-.jpg"
            alt=""
          />
          <div className="cardText">
            <h5>Why Exercise Is Wise?</h5>
            <p>You've probably heard countless times how exercise is "good for you". But ...Read More</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default CardBlog2;
