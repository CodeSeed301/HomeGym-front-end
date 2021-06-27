import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Exercise from "./Exercise";

class OneProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExercise: false,
    };
  }

  setShowExercise = () => {
    this.setState({
      showExercise: !this.state.showExercise,
    });
  };

  render() {
    return (
      <>
        <Card style={{ display: "grid", gridTemplateColumns: "270px 1fr", marginTop: "30px",background:'#222222',color:"whitesmoke",padding:"10px" }}>
          <Card.Img style={{ width: "250px" }} variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title.toUpperCase()}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="warning">ADD TO CART</Button>
            <Button onClick={this.setShowExercise} style={{ marginLeft: "25px" }} variant="outline-warning">
              SHOW EXERCISE
            </Button>
          </Card.Body>
        </Card>

        {this.state.showExercise && <Exercise title={this.props.title} />}
      </>
    );
  }
}

export default OneProduct;
