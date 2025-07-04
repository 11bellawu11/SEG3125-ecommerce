import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useCart } from "../components/cartupdates";

const CartAndPayment = () => {
  const { cartItems } = useCart();

  const total = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  return (
    <Container className="my-5">
      <Row>
        {/* Checkout Form */}
        <Col md={7}>
          <h3>Checkout</h3>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" placeholder="123 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="card">
              <Form.Label>Card Details</Form.Label>
              <Form.Control type="text" placeholder="Card Number" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Place Order
            </Button>
          </Form>
        </Col>

        {/* Cart Summary */}
        <Col md={5}>
          <h4>Cart Summary</h4>
          <Card>
            <ListGroup variant="flush">
              {cartItems.length === 0 ? (
                <ListGroup.Item>Your cart is empty.</ListGroup.Item>
              ) : (
                cartItems.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <div className="d-flex justify-content-between">
                      <span>{item.title}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  </ListGroup.Item>
                ))
              )}
              <ListGroup.Item>
                <div className="d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>${total}</strong>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartAndPayment;