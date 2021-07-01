import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Exercise extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.name} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text style={{ maxHeight: "20vh", overflowY: "scroll" }}>{this.props.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Exercise;
