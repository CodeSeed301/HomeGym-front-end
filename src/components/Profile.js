import React, { Component } from "react";
import CartSection from "./CartSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { withAuth0 } from "@auth0/auth0-react";
export class profile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userName: "",
  //     userEmail: "",
  //     userPicture: "",
  //   };
  // }
  // componentDidMount = () => {
  //   this.setState({
  //     userName: this.props.auth0.user.name,
  //     userEmail: this.props.auth0.user.email,
  //     userPicture: this.props.auth0.user.picture,
  //   });
  // };

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div className="cont">
        {isAuthenticated && (
          <>
            <Card className="text-center">
              <Card.Header className="cardHeaderProfilePage">Profile Information</Card.Header>
              <Card.Body className="profileInfoContainer">
                <Container fluid>
                  <Row>
                    <Col>
                      <img src={this.props.auth0.user.picture} alt="" className="profileInfoImg" />
                    </Col>
                    <Col>
                      <Row className="profileInfoText">
                        <div>
                          <h2>{this.props.auth0.user.name}</h2>
                          <h4>{this.props.auth0.user.email}</h4>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            <CartSection />
          </>
        )}
      </div>
    );
  }
}

export default withAuth0(profile);
