import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../assets/images/homeSec1.png";

export class HomeSections extends Component {
  render() {
    return (
      <div>
        <Container className='cardsContainer' fluid>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <div className='homeCard'>
                <img src='https://images01.nicepage.com/a7/74/a7748786bf152269c29724fc922de7de.png' alt='' />
                <div className='cardText'>
                  <h3>title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe unde nulla esse.</p>
                </div>
              </div>
            </Col>

            <Col xs lg="4">
              <div className='homeCard'>
                <img src='https://images01.nicepage.com/49/9b/499bff19780c9550d3d77ee83694eb0c.png' alt='' />
                <div className='cardText'>
                  <h3>title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe unde nulla esse.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <div className='homeCard'>
                <img src='https://images01.nicepage.com/15/e0/15e03f0cf3690350333de385012e581a.png' alt='' />
                <div className='cardText'>
                  <h3>title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe unde nulla esse.</p>
                </div>
              </div>
            </Col>

            <Col xs lg="4">
              <div className='homeCard'>
                <img src='https://images01.nicepage.com/a7/74/a7748786bf152269c29724fc922de7de.png' alt='' />
                <div className='cardText'>
                  <h3>title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe unde nulla esse.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className='sectionContainer'>
          <Row className='sectionContainerRow'>
            <Col>
              <img src={image1} alt="random" />
            </Col>

            <Col className='sectionContainerTextCol'>
              <h2>Equipments</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
                molestiae voluptatem. Facere eum quaerat voluptate! Quisquam, id
                suscipit eius maxime perspiciatis consectetur recusandae rem
                eligendi quia necessitatibus est reiciendis.
              </p>
            </Col>
          </Row>
          <Row className='sectionContainerRow'>
            <Col className='sectionContainerTextCol'>
              <h2>Exercises</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
                molestiae voluptatem. Facere eum quaerat voluptate! Quisquam, id
                suscipit eius maxime perspiciatis consectetur recusandae rem
                eligendi quia necessitatibus est reiciendis.
              </p>
            </Col>

            <Col>
              <img src="https://www.mensjournal.com/wp-content/uploads/2018/02/home-workout.jpg?quality=86&strip=all" alt="random" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeSections;
