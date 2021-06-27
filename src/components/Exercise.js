import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Exercise extends Component {
  // let regex = /0/g;
  // let newString = string.replace(regex, "zero");
  // return newString;

  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="holder.js/100px180" alt={this.props.name} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Exercise;
