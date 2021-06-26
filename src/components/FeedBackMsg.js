import React, { Component } from "react";
import "../style/AboutUsStyle.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class FeedBackMsg extends Component {
  render() {
    return (
      <Modal className="feedbackModal" show={this.props.show}>
        <Modal.Header className="headerModal">
          <Modal.Title>THANK YOU {this.props.userFirstName.toUpperCase()} 🖤</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          We received your message, we will contact you as soon as possible.
        </Modal.Body>
        <Modal.Footer className="footerModal">
          <Button className="closeButton" on variant="secondary" onClick={this.props.changeFeedBackMsg}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FeedBackMsg;
