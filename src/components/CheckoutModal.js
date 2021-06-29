import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import UserInformationForm from './UserInformationForm'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
export class CheckoutModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myCartData: this.props.myCartData
        }
    }

    render() {
        console.log(this.state.myCartData);
        let total = 0;
        return (
            <div>
                <>
                    <Modal size="lg" show={this.props.show} onHide={this.props.handleClose}>
                        <Modal.Header closeButton style={{ backgroundColor: 'rgb(34 34 34)', color: "#f88e05" }}>
                            <Modal.Title >Place Order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <UserInformationForm />
                                    </Col>
                                    <Col>

                                        <h5>Bill</h5>
                                        <Table striped bordered hover style={{textAlign:'center'}}>
                                            <thead>
                                                <tr >
                                                    <th>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            {this.state.myCartData.map(value => {
                                                total += value.quantity * value.price
                                                return (<tr>
                                                    <td>{value.title}</td>
                                                    <td>{value.quantity}</td>
                                                    <td>{value.quantity * value.price}</td>
                                                </tr>)

                                            })}
                                            <tr>
                                                <td></td>
                                                <td>Total : {total}</td>
                                            </tr>
                                        </Table>
                                        {
                                            console.log(total)
                                        }

                                    </Col>
                                </Row>

                            </Container>
                        </Modal.Body>
                        <Modal.Footer>

                            <button className="checkoutBtn" onClick=
                                {() => {
                                    this.props.handleClose();
                                    this.props.handlePlaceOrder();
                                }}
                            >
                                Place order
                            </button>
                        </Modal.Footer>
                    </Modal>


                </>
            </div>
        )
    }
}

export default CheckoutModal
