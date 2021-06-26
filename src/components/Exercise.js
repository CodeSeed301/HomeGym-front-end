import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Exercise extends Component {
  render() {
    return (
      <Card
        style={{ width: "100%", padding: "10px", display: "grid", gridTemplateColumns: "repeat(4,4fr)", gap: "5px" }}
      >
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    );
  }
}

export default Exercise;
