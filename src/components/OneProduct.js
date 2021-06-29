import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Exercise from "./Exercise";
import AddToCartLogIn from "./AddToCartLogIn";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
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
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Card
          style={{
            display: "grid",
            gridTemplateColumns: "270px 1fr",
            marginTop: "30px",
            background: "#eee",
            color: "black",
            padding: "10px",
         
           
          }}
        >
          <Card.Body>
            <Card.Img style={{ width: "250px" , maxHeight:"250px" }} variant="top" src={this.props.image_url} alt={this.props.title} />
          </Card.Body>
          <Card.Body>
            <Card.Title style={{fontSize: "1.5rem"}}>{this.props.title.toUpperCase()}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text style={{color:"red"}}>{this.props.price}JD   <s>{parseInt(this.props.price) + 100} JD</s> </Card.Text>

            {isAuthenticated ? (
              this.props.isInCart ? (
                <p
                  style={{
                    display: "inline-block",
                    border: "2px solid white",
                    padding: "6px 10px",
                    borderRadius: "4px",
                  }}
                >
                  Already added
                </p>
              ) : (
                <Button onClick={() => this.props.setCart(this.props.title, this.props.price)} variant="danger" >
                  🛒 ADD TO CART
                </Button>
              )
            ) : (
              <AddToCartLogIn />
            )}
            <Button
              onClick={() => this.setShowExercise(this.props.id)}
              style={{ marginLeft: "25px" , color:"black " }}
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
            {this.state.exerciseData.map((value, index) => {
              return <Exercise name={value.name} desc={value.desc} image_url={value.image_url} key={index} />;
            })}
          </div>
        )}
      </>
    );
  }
}

export default withAuth0(OneProduct);
