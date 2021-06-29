import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export class UserInformationForm extends Component {
    render() {
        return (
            <div>
                <Form>
                <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="07--------" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Type your Location" />
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}

                </Form>
            </div>
        )
    }
}

export default UserInformationForm
