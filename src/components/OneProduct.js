import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Exercise from "./Exercise";
import AddToCartLogIn from "./AddToCartLogIn";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import AOS from "aos";
import "aos/dist/aos.css";
class OneProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExercise: false,
      exerciseData: [],
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000,
    });
  }
  setShowExercise = (id) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/exercises?equipmentId=${id}`).then((res) => {
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
          data-aos="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "270px 1fr",
            marginBottom: "30px",
            background: "#eee",
            color: "black",
            padding: "10px",
          }}
        >
          <Card.Body>
            <Card.Img
              style={{ width: "250px", maxHeight: "250px" }}
              variant="top"
              src={this.props.image_url}
              alt={this.props.title}
            />
          </Card.Body>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>{this.props.title.toUpperCase()}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text style={{ color: "red" }}>
              {this.props.price}JD <s>{parseInt(this.props.price) * 1.25} JD</s>
            </Card.Text>

            {isAuthenticated ? (
              this.props.isInCart ? (
                <p
                  style={{
                    display: "inline-block",
                    border: "2px solid black",
                    padding: "6px 10px",
                    borderRadius: "4px",
                  }}
                >
                  Already added
                </p>
              ) : (
                <Button onClick={() => this.props.setCart(this.props.title, this.props.price)} variant="warning">
                  🛒 ADD TO CART
                </Button>
              )
            ) : (
              <AddToCartLogIn />
            )}
            <Button
              onClick={() => this.setShowExercise(this.props.id)}
              style={{ marginLeft: "25px", color: "black " }}
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
