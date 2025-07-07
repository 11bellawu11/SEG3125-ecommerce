import React, { useState } from "react";
import {Container, Row, Col, Form, Button, Card, ListGroup, Alert}
from "react-bootstrap";
import { useCart } from "../components/cartupdates";
import { useNavigate, Link } from "react-router-dom";
import "./cartandpayment.css"

const CartAndPayment = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const total = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return;

    // Simulate placing order
    clearCart();
    setOrderPlaced(true);

    // Optional redirect after 3s
    setTimeout(() => {
      navigate("/survey");
    }, 3000);
  };

  return (
    <Container className="form">
      <Row>
        {/* Checkout Form */}
        <Col md={7}>
          <h4 style={{color: "white"}}>Checkout</h4>

          {orderPlaced && (
            <Alert variant="success">
              🎉 Order placed successfully! Redirecting to survey...
            </Alert>
          )}
          {!orderPlaced && (
            <Alert variant="info">
              Please enter payment details to complete your order.
            </Alert>
          )}

          <Form onSubmit={handlePlaceOrder}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="billingAddress">
              <Form.Label>Billing Address</Form.Label>
              <Form.Control type="text" placeholder="123 Main St" required />
            </Form.Group>

            <Row>
              <Col md={8}>
                <Form.Group className="mb-3" controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="123" required />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col className="d-flex justify-content-between">
                <Button variant="secondary" onClick={() => navigate("/")}>
                  ← Continue Shopping
                </Button>

                <Button
                  variant="success"
                  type="submit"
                  disabled={cartItems.length === 0 || orderPlaced}
                >
                  Place Order
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>

        {/* Cart Summary */}
        <Col md={5}>
          <h4 style={{color: "white"}}>Cart Summary</h4>
          <Card>
            <ListGroup variant="flush">
              {cartItems.length === 0 ? (
                <ListGroup.Item>Your cart is empty.</ListGroup.Item>
              ) : (
                cartItems.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>{item.title}</strong>
                      <div>${item.price.toFixed(2)}</div>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </ListGroup.Item>
                ))
              )}
              {cartItems.length > 0 && (
                <ListGroup.Item>
                  <div className="d-flex justify-content-between">
                    <strong>Total</strong>
                    <strong>${total}</strong>
                  </div>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartAndPayment;