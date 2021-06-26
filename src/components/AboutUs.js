import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import ahmadImg from "../assets/imageAboutUs/ahmad.jpg"
import aseelImg from "../assets/imageAboutUs/aseel.jpg"
import osamaImg from "../assets/imageAboutUs/osama.jpeg"
import yaserImg from "../assets/imageAboutUs/yaser.jpg"
import leenImg from "../assets/imageAboutUs/leen.jpg"
import mahmoudImg from "../assets/imageAboutUs/mahmoud.jpg"

class AboutUs extends Component {
    render() {

        return (
            <div>
                <div>
                    <h2>
                        our store
                    </h2>
                    <p>
                        codeseed
                    </p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Title><i>Card Title</i></Card.Title>
                                <Card.Body>
                                    <Card.Img variant="top" src={ahmadImg} alt="ahmad" />
                                </Card.Body>
                            </Card>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                                        </svg>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>This is first tab body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </Col>

                 
              



                </Row>

                <Row xs={1} md={3} className="g-4">






                </Row>



                <div>
                    comment
                </div>


            </div>
            
        )
    }
}

export default AboutUs
