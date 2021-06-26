import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../style/AboutUsStyle.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import ahmadImg from "../assets/imageAboutUs/ahmad.jpg";
import aseelImg from "../assets/imageAboutUs/aseel.jpg";
import yaserImg from "../assets/imageAboutUs/yaser.jpg";
import leenImg from "../assets/imageAboutUs/leen.jpg";
import mahmoodImg from "../assets/imageAboutUs/mahmood.jpg";
import osamaImg from "../assets/imageAboutUs/osama.jpg";
import emailImg from "../assets/imageAboutUs/email.png";
import FeedBackMsg from "./FeedBackMsg";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replaceArrow: false,
      showFeedBackMsg: false,
      userFirstName: "",
    };
  }

  changeArrow = () => {
    this.setState({
      replaceArrow: !this.state.replaceArrow,
    });
  };
  changeFeedBackMsg = (e) => {
    e.preventDefault();
    this.setState({
      showFeedBackMsg: !this.state.showFeedBackMsg,
    });
    // axios method to store the message in the data base
  };

  setFirstName = (e) => {
    this.setState({
      userFirstName: e.target.value,
    });
  };

  render() {
    return (
      <div className="allContent">
        <div className="aboutUs">
          <div>
            <h2 className="ourStory">OUR STORY ..</h2>
            <p style={{ color: "#252525", fontSize: "18px" }}>
              We are <span style={{ color: "#f88e05", fontWeight: "bold" }}>CodeSeed</span> group, who met online and
              worked together to design, create<br></br> and produce this website that we are proud of.
            </p>
          </div>
          <h2 className="ourTeam">OUR TEAM ..</h2>
          {/* <hr className="hr.style-four" /> */}

          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="personalCard" style={{ width: "18rem" }}>
                <Card.Title>Ahmad Abu Dames</Card.Title>
                <Card.Img className="personalImg" variant="top" src={ahmadImg} alt="ahmad" />
                <Accordion>
                  <Accordion.Toggle onClick={this.changeArrow} className="cardHead" as={Card.Header} eventKey="0">
                    {this.state.replaceArrow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-up-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Full-Stack Developer
                      <br></br>
                      <a className="icon" href="https://github.com/ahmadabudames">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                      </a>
                      <a className="icon" href="https://www.linkedin.com/in/ahmad-abudames-b1645720a/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                      </a>
                      <a className="icon" href="www.instagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" style={{ width: "18rem" }}>
                <Card.Title>Yaser Al-Ananbeh</Card.Title>
                <Card.Img className="personalImg" variant="top" src={yaserImg} alt="Yaser" />
                <Accordion>
                  <Accordion.Toggle onClick={this.changeArrow} className="cardHead" as={Card.Header} eventKey="0">
                    {this.state.replaceArrow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-up-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Full-Stack Developer
                      <br></br>
                      <a className="icon" href="https://github.com/yaserananbeh">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                      </a>
                      <a className="icon" href="https://www.linkedin.com/in/yaser-al-ananbeh/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                      </a>
                      <a className="icon" href="www.instagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" style={{ width: "18rem" }}>
                <Card.Title>Leen hazaimeh</Card.Title>
                <Card.Img className="personalImg" variant="top" src={leenImg} alt="Leen" />
                <Accordion>
                  <Accordion.Toggle onClick={this.changeArrow} className="cardHead" as={Card.Header} eventKey="0">
                    {this.state.replaceArrow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-up-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Full-Stack Developer
                      <br></br>
                      <a className="icon" href="https://github.com/leenhazaimeh">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                      </a>
                      <a className="icon" href="https://www.linkedin.com/in/leenhazaimeh/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                      </a>
                      <a className="icon" href="www.instagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="personalCard" style={{ width: "18rem" }}>
                <Card.Title>Mahmood Dinah</Card.Title>
                <Card.Img className="personalImg" variant="top" src={mahmoodImg} alt="Mahmood" />
                <Accordion>
                  <Accordion.Toggle onClick={this.changeArrow} className="cardHead" as={Card.Header} eventKey="0">
                    {this.state.replaceArrow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-up-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Full-Stack Developer
                      <br></br>
                      <a className="icon" href="https://github.com/Mahmoud-Dinah">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                      </a>
                      <a className="icon" href="https://www.linkedin.com/in/mahmoudaldinah">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                      </a>
                      <a className="icon" href="www.instagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" style={{ width: "18rem" }}>
                <Card.Title>Osama Alali</Card.Title>
                <Card.Img className="personalImg" variant="top" src={osamaImg} alt="Osama" />
                <Accordion>
                  <Accordion.Toggle onClick={this.changeArrow} className="cardHead" as={Card.Header} eventKey="0">
                    {this.state.replaceArrow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-up-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Full-Stack Developer
                      <br></br>
                      <a className="icon" href="https://github.com/yaserananbeh">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                      </a>
                      <a className="icon" href="https://www.linkedin.com/in/yaser-al-ananbeh/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                      </a>
                      <a className="icon" href="www.instagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" style={{ width: "18rem" }}>
                <Card.Title>Aseel Dweedar</Card.Title>
                <Card.Img className="personalImg" variant="top" src={aseelImg} alt="Aseel" />
                <Accordion>
                  <Accordion.Toggle onClick={this.changeArrow} className="cardHead" as={Card.Header} eventKey="0">
                    {this.state.replaceArrow ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-up-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                      </svg>
                    )}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Full-Stack Developer
                      <br></br>
                      <a className="icon" href="https://github.com/Aseel-Dweedar">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
                      </a>
                      <a className="icon" href="https://www.linkedin.com/in/aseel-dweedar/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                      </a>
                      <a className="icon" href="www.instwww.instagram.comagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="comments">
          <h2>We’d love to hear from you</h2>
          <p>
            Whether you have a question about features, pricing, need advice, or anything else,<br></br> our team is
            ready to answer all your questions
          </p>
          <div className="contactCont">
            <img className="emailImg" src={emailImg} alt='email' />
            <Form onSubmit={this.changeFeedBackMsg} className="contactForm">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First name</Form.Label>
                <Form.Control onChange={this.setFirstName} type="text" placeholder="First name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
              <Button type="submit" className="submitButton" variant="light">
                Send a message
              </Button>
            </Form>
          </div>
        </div>
        {this.state.showFeedBackMsg && (
          <FeedBackMsg
            show={this.state.showFeedBackMsg}
            changeFeedBackMsg={this.changeFeedBackMsg}
            userFirstName={this.state.userFirstName}
          />
        )}
      </div>
    );
  }
}

export default AboutUs;
