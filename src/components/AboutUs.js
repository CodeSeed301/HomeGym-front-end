import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
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
import FeedBackMsg from "./FeedBackMsg";
import AOS from "aos"
import "aos/dist/aos.css"

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replaceArrow: false,
      showFeedBackMsg: false,
      userFirstName: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
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
            <h2 className="ourStory bi bi-book-half">OUR STORY <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg> </h2>
            <p style={{ color: "#252525", fontSize: "18px" }}>
              We are <span style={{ color: "#f88e05", fontSize: "22px", fontWeight: "bold" }}>CodeSeed</span> group, who met online and
              worked together to design, create<br></br> and produce this website that we are proud of.
            </p>
          </div>
          <h2 className="ourTeam">OUR TEAM <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/team-1561302-1322526.png" alt='ourteamImg'></img></h2>
          {/* <hr className="hr.style-four" /> */}


          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="personalCard" data-aos="flip-up" style={{ width: "18rem" }}>
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
                      
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" data-aos="flip-up" style={{ width: "18rem" }}>
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
                     
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" data-aos="flip-up" style={{ width: "18rem" }}>
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
                    
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="personalCard" data-aos="flip-up" style={{ width: "18rem" }}>
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
                    
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" data-aos="flip-up" style={{ width: "18rem" }}>
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
                    
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard" data-aos="flip-up" style={{ width: "18rem" }}>
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
                      {/* <a className="icon" href="www.instwww.instagram.comagram.com">
                        <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
                      </a> */}
                    </Card.Body>
                  </Accordion.Collapse>
                </Accordion>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="comments">
          <h2>We’d love to hear from you <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z" />
          </svg></h2>
          <p>
            Whether you have a question about features, pricing, need advice, or anything else,<br></br> our team is
            ready to answer all your questions
          </p>
          <div className="contactCont">
            <img className="emailImg" src="https://cdn.discordapp.com/attachments/858665752005705758/859402288651829258/ahmad.png" alt='email' />


            <Form onSubmit={this.changeFeedBackMsg} className="contactForm">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First name :
                </Form.Label>
                <Form.Control onChange={this.setFirstName} type="text" placeholder="First name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last name :</Form.Label>
                <Form.Control type="text" placeholder="Last name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address :</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message :  </Form.Label>
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
