import React, { Component } from "react";
import CartSection from "./CartSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";


export class profile extends Component {
  render() {
    return (
      <div >
        <Card className="text-center" >
          <Card.Header className='cardHeaderProfilePage'  >Profile Information</Card.Header>
          <Card.Body className="profileInfoContainer">
            <Container fluid >
              <Row>

                <Col>
                  <img src="https://via.placeholder.com/1500x1500/000000" alt="" className='profileInfoImg'/>
                </Col>

                <Col>
                  <Row className="profileInfoText">
                    <div>
                      <h2>Yaser Al-Ananbeh</h2>
                      <h4>yaser.ananbeh74@gmail.com</h4>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>

          </Card.Body>

        </Card>

        <CartSection />

      </div>
    );
  }
}

export default profile;
