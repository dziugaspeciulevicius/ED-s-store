import React from 'react'
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className="justify-content-center top-navigation" >
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link className="nav-link-checkout">Sign In</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link className="nav-link--disabled" disabled >Sign In</Nav.Link>}
            </Nav.Item>           
            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link className="nav-link-checkout">Shipping</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link className="nav-link--disabled" disabled>Shipping</Nav.Link>}
            </Nav.Item>           
            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link className="nav-link-checkout">Payment</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link className="nav-link--disabled" disabled>Payment</Nav.Link>}
            </Nav.Item>           
            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link className="nav-link-checkout">Place Order</Nav.Link>
                    </LinkContainer>
                ) : <Nav.Link className="nav-link--disabled" disabled>Place Order</Nav.Link>}
            </Nav.Item>           
        </Nav>
    )
}

export default CheckoutSteps
