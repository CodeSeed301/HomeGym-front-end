import React, { Component } from "react";
import video from "../assets/videos/gym-video.mp4"

// import Carousel from "react-bootstrap/Carousel"

export class Slider extends Component {
  render() {
    return (
      <div className='videoContainer' >
        <div className='heroText'>
          <h1>
            work harder, get stronger
          </h1>
          <p>Believe in yourself and all that you are. Know that there is something inside of you that is greater than any obstacle.</p>
        </div>
        <video width="100%" loop autoPlay >
          <source src={video} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>
    );
  }
}

export default Slider;