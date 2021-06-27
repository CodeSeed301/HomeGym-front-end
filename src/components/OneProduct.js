import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Exercise from "./Exercise";
import axios from "axios";

class OneProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExercise: false,
      exerciseData: [],
    };
  }

  setShowExercise = (id) => {
    axios.get(`http://localhost:8080/exercises?equipmentId=${id}`).then((res) => {
      this.setState({
        exerciseData: res.data,
        showExercise: !this.state.showExercise,
      });
    });
  };

  render() {
    return (
      <>
        <Card
          style={{
            display: "grid",
            gridTemplateColumns: "270px 1fr",
            marginTop: "30px",
            background: "#222222",
            color: "white",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Img style={{ width: "250px" }} variant="top" src={this.props.image_url} alt={this.props.title} />
          </Card.Body>
          <Card.Body>
            <Card.Title>{this.props.title.toUpperCase()}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.price}JD</Card.Text>
            <Button variant="warning">ADD TO CART</Button>
            <Button
              onClick={() => this.setShowExercise(this.props.id)}
              style={{ marginLeft: "25px" }}
              variant="outline-warning"
            >
              SHOW EXERCISE
            </Button>
          </Card.Body>
        </Card>
        {this.state.showExercise && (
          <div
            style={{
              width: "100%",
              padding: "10px",
              display: "grid",
              gridTemplateColumns: "repeat(4,4fr)",
              gap: "5px",
            }}
          >
            {this.state.exerciseData.map((value) => {
              return <Exercise name={value.name} desc={value.desc} />;
            })}
          </div>
        )}
      </>
    );
  }
}

export default OneProduct;
