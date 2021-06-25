import React, { Component } from "react";
import video from "./assets/videos/gym-video.mp4"

// import Carousel from "react-bootstrap/Carousel"

export class Slider extends Component {
  render() {
    return (
      <div className='videoContainer' style={{maxHeight:'500px' , overflow:'hidden', opacity:'0.95'}}>
      <video width="100%" height="100%" loop autoPlay >
      <source src={video} type="video/mp4"/>
      </video>
      </div>
    );
  }
}

export default Slider;