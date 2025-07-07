import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import React, { useState } from 'react';
import "./Footer.css";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartAndPayment from '../pages/cartandpayment';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>GameHaven</h5>
            <p className="mb-0">
              &copy; 2025 GameHaven. All rights reserved.
            </p>
            <p>
                Contact us:
                gamehavensupport@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}