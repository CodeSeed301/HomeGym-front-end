import React, { Component } from "react";
import CartSection from "./CartSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
export class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.auth0.user.name,
      userEmail: this.props.auth0.user.email,
      userPicture: this.props.auth0.user.picture,
      myCart: [
        { name: "osama", price: 50, quantity: 1 },
        { name: "aseel", price: 50, quantity: 1 },
        { name: "yaser", price: 50, quantity: 1 },
        { name: "mahmood", price: 50, quantity: 1 },
        { name: "ahmad", price: 50, quantity: 1 },
        { name: "leen", price: 50, quantity: 1 },
      ],
    };
  }

  /////////////////////////////////////
  ///////    get Data from mongo  /////
  ////////////////////////////////////

  componentDidMount = () => {
    const email = this.state.userEmail;
    axios
      .get(`URL/read?email=${email}`)
      .then((response) => {
        this.setState({
          myCart: response.data,
        });
      })
      .catch((error) => alert(error.message));
  };

  //////////////////////////
  ///////      Delete   /////
  //////////////////////////

  deleteMyitem = (index) => {
    axios
      .delete(`URL/equipment/${index}?email=${this.state.userEmail}`)
      .then((response) => {
        this.setState({
          myCart: response.data,
        });
      })
      .catch((error) => alert(error.message));
  };

  //////////////////////////
  ///////      update   /////
  //////////////////////////

  setQunValue = async (index, title, e) => {
    const reqBody = {
      index: index,
      title: title,
      quantity: Number(e.target.value),
      email: this.state.userEmail,
    };
    await axios
      .put(`URL/equipment/${index}`, reqBody)
      .then((response) => {
        this.setState({
          myCart: response.data,
        });
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div className="cont">
        <Card className="text-center">
          <Card.Header className="cardHeaderProfilePage"> Profile Information </Card.Header>
          <Card.Body className="profileInfoContainer">
            <Container fluid>
              <Row>
                <Col>
                  <img src={this.state.userPicture} alt="" className="profileInfoImg" />
                </Col>
                <Col>
                  <Row className="profileInfoText">
                    <div>
                      <h2> {this.state.userName} </h2> <h4> {this.state.userEmail} </h4>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        {this.state.myCart.length > 0 ? (
          <CartSection myCart={this.state.myCart} deleteMyitem={this.deleteMyitem} setQunValue={this.setQunValue} />
        ) : (
          <p> no item </p>
        )}
      </div>
    );
  }
}

export default withAuth0(profile);
