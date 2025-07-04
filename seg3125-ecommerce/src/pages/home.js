import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import { useCart } from "../components/cartupdates";
import GameRow from '../components/GameRow';

function Home() {
  const { games, addToCart } = useCart(); // ✅ use global state

  return (
    <div className="app-container">
      <Row>
        <Col>
          <Container>
            <h3>Action games</h3>
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src="./images/placeholder.jpg" alt="Slide 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/placeholder.jpg" alt="Slide 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/placeholder.jpg" alt="Slide 3" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <GameRow title="Action Games" games={games.filter(g => g.type === "Action")} onAddToCart={addToCart} />
      <GameRow title="Adventure Games" games={games.filter(g => g.type === "Adventure")} onAddToCart={addToCart} />
      <GameRow title="Simulation Games" games={games.filter(g => g.type === "Simulation")} onAddToCart={addToCart} />
      <GameRow title="Horror Games" games={games.filter(g => g.type === "Horror")} onAddToCart={addToCart} />
      <GameRow title="RPG Games" games={games.filter(g => g.type === "RPG")} onAddToCart={addToCart} />
    </div>
  );
}

export default Home;