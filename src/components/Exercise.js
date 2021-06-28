import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Exercise extends Component {

  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src="https://image.freepik.com/free-vector/coming-soon-shop-announcement-vector_53876-57828.jpg" alt={this.props.name} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text style={{maxHeight:"20vh",overflowY:"scroll"}}>{this.props.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Exercise;
