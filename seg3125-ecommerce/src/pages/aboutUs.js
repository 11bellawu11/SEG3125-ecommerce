import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./aboutUs.css"

export default function AboutUs() {
  return (
    <Container className="body">
      {/* Header */}
      <Row className="mb-5 text-center">
        <Col>
          <h1>Welcome to GameHaven!</h1>
          <p className="lead">
            Your ultimate destination for digital games
          </p>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="mb-4">
        Here we offer a curated selection of top titles across all genres, from AAA hits to indie favorites. Whether you're a casual player or a hardcore fan, we're here to help you find your next adventure. GameHaven is your go-to destination for everything gaming.

      </Row>

      {/* Why Shop With Us */}
      <Row className="mb-5">
        <Col>
          <h3 className="mb-4">Why us?</h3>
          <Row>
            <Col md={4}>
              <Card className="mb-3 h-100 shadow-sm" style={{border:"none"}}>
                <Card.Body>
                  <Card.Title>Curated Selection</Card.Title>
                  <Card.Text>
                    From AAA titles to indie gems, we handpick games that players love.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3 h-100 shadow-sm" style={{border:"none"}}>
                <Card.Body>
                  <Card.Title>Fair Prices</Card.Title>
                  <Card.Text>
                    Competitive pricing and frequent sales on the games you actually want.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3 h-100 shadow-sm" style={{border:"none"}}>
                <Card.Body>
                  <Card.Title>Built by Gamers</Card.Title>
                  <Card.Text>
                    We know what matters — great games, fast access, and a smooth experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="text-center">
            <Col>
            <Button as={Link} to="/" variant="primary">
                Browse Games
            </Button>
            </Col>
      </Row>
    </Container>
  );
}
