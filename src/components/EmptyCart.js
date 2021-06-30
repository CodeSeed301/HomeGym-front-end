import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
export class EmptyCart extends Component {
    render() {
        return (
            <>

                <Card className="text-center">
                    <Card.Header className="cardHeaderProfilePage">Checkout Cart</Card.Header>
                    <Card.Body className="cartContainerBody">
                        <Container className="cartMainContainer emptyCartContainer">
                            <div className="opacityIgnoreCart demo-wrap" >
                                <img src='https://www.pngkey.com/png/full/365-3654131_cart-empty-image-your-cart-is-empty.png' alt="" className="demo-bg" />
                                <div className="emptyCartContent">
                                    <h2>Your Cart Is Empty</h2>
                                    <Link className="emptyCartBtn" to='/products'>{`Continue Shopping >>>`} </Link>
                                </div>
                            </div>
                        </Container>
                    </Card.Body>
                </Card>
            </>
        )

    }
}

export default EmptyCart
