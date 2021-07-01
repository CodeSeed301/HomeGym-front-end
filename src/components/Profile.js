import React, { Component } from "react";
import CartSection from "./CartSection";
import Container from "react-bootstrap/Container";
import EmptyCart from "./EmptyCart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert'

import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
export class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.auth0.user.name,
      userEmail: this.props.auth0.user.email,
      userPicture: this.props.auth0.user.picture,
      myCart: [],
      alert: false,
      showLastModel:false
    };
  }
  handlePlaceOrder = () => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/product/100?email=${this.state.userEmail}`).then(
      this.setState({
        alert: true,
        myCart: [],
      },()=>{
        window.setTimeout(()=>{
          this.setState({alert:false})
        },5000)
      })
    ).catch(error=>alert(error.message));
    
  }

  /////////////////////////////////////
  ///////    get Data from mongo  /////
  ////////////////////////////////////

  componentDidMount = () => {
    const email = this.state.userEmail;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile?email=${email}`)
      .then((response) => {
        this.setState({
          myCart: response.data.equipment,
        });
      })
      .catch((error) => alert(error.message));
  };

  //////////////////////////
  ///////      Delete   /////
  //////////////////////////

  deleteMyitem = (index) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/product/${index}?email=${this.state.userEmail}`)
      .then((response) => {
        this.setState({
          myCart: response.data.equipment,
        });
      })
      .catch((error) => alert(error.message));
  };

  //////////////////////////
  ///////      update   /////
  //////////////////////////

  setQunValue = (index, title, price, e) => {
    const reqBody = {
      index: index,
      title: title,
      price: price,
      quantity: Number(e.target.value),
      email: this.state.userEmail,
    };

    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/product/${index}`, reqBody)
      .then((response) => {
        this.setState({
          myCart: response.data.equipment,
        });
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div className="cont">
        <Card className="text-center profileContainer">
          <Card.Header className="cardHeaderProfilePage"> Profile Information </Card.Header>
          <Card.Body className="profileInfoContainer">
            <Container fluid>
              <Row>
                <Col>
                  <img src={this.state.userPicture} alt="" className="profileInfoImg" />
                </Col>
                <Col className="profileInfoText">
                  <div>
                    <h2>{this.state.userName} </h2> <h4>{this.state.userEmail} </h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        {this.state.alert &&
          <Alert variant="success">
            Your Order has placed successfully 
          </Alert>
        }
        {/* {this.state.showLastModel &&
          <Alert variant="success">
            Your Order has placed successfully 
          </Alert>
        } */}
        {this.state.myCart.length > 0 ? (
          <CartSection myCart={this.state.myCart} deleteMyitem={this.deleteMyitem} setQunValue={this.setQunValue} handlePlaceOrder={this.handlePlaceOrder} />
        ) : (
          < EmptyCart />
        )}
        
      </div>
    );
  }
}

export default withAuth0(profile);
