import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import './home.css';
import { Link } from 'react-router-dom';
import { games } from './GameList';
import Carousel from 'react-bootstrap/Carousel';
import { games as initialGames } from './GameList';
import GameRow from '../components/GameRow';
 import React, { useState } from 'react';

function Home() {
  const [games, setGames] = useState(initialGames);

  const handleAddToCart = (id) => {
    setGames(prevGames =>
      prevGames.map(game =>
        game.id === id ? { ...game, inCart: true } : game
      )
    );
  };

  const cartItems = games.filter(game => game.inCart);

  return (

    <div className="app-container">
      <Row>
        <Col>
          <Container>
            <h3>
              Action games
            </h3>
          </Container>
          <Carousel>
            <Carousel.Item>
              <img src={"./images/placeholder.jpg"} />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="" text="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <GameRow title="Action Games" games={games.filter(g => g.type === "Action")} onAddToCart={handleAddToCart} />
      <GameRow title="Adventure Games" games={games.filter(g => g.type === "Adventure")} onAddToCart={handleAddToCart} />
      <GameRow title="Simulation Games" games={games.filter(g => g.type === "Simulation")} onAddToCart={handleAddToCart} />
      <GameRow title="Horror Games" games={games.filter(g => g.type === "Horror")} onAddToCart={handleAddToCart} />
      <GameRow title="RPG Games" games={games.filter(g => g.type === "RPG")} onAddToCart={handleAddToCart} />

    </div>
  );
}

export default Home;