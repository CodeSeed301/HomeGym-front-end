import React, { Component } from "react";
import video from "./assets/videos/gym-video.mp4"

// import Carousel from "react-bootstrap/Carousel"

export class Slider extends Component {
  render() {
    return (
      <div className='videoContainer' >
        <div className='heroText'>
          <h1>
            HomeGym
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim doloribus quis repellendus eveniet itaque possimus beatae qui nulla alias deleniti odit, autem aspernatur quod eaque ex! Facilis itaque optio aperiam?</p>
        </div>
      <video width="100%"  loop autoPlay >
      <source src={video} type="video/mp4"/>
      Your browser does not support the video.
      </video>
      </div>
    );
  }
}

export default Slider;