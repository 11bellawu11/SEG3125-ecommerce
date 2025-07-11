import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import { useCart } from "../components/cartupdates";
import GameRow from '../components/GameRow';

function Home({ searchTerm, selectedGenres }) {
  const { games, addToCart } = useCart();

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(game.type);
    return matchesSearch && matchesGenre;
  });

  const actionGames = filteredGames.filter(g => g.type === 'Action');
  const adventureGames = filteredGames.filter(g => g.type === 'Adventure');
  const simulationGames = filteredGames.filter(g => g.type === 'Simulation');
  const horrorGames = filteredGames.filter(g => g.type === 'Horror');
  const rpgGames = filteredGames.filter(g => g.type === 'RPG');

  return (
    <div className="app-container">
      

      <div className="promo-banner">
        <h2>🎮 Great Games, Better Prices</h2>
        <p>Discover second-hand gems at a fraction of the original price. Quality titles, budget-friendly.</p>
      </div>

      {filteredGames.length === 0 ? (
      <div className="no-results">
        <p>No games found. Try adjusting your filters or search term!</p>
      </div>
    ) : ( <>
      {actionGames.length > 0 && (
        <GameRow title="Action Games" games={actionGames} onAddToCart={addToCart} />
      )}

      {adventureGames.length > 0 && (
        <GameRow title="Adventure Games" games={adventureGames} onAddToCart={addToCart} />
      )}

      {simulationGames.length > 0 && (
        <GameRow title="Simulation Games" games={simulationGames} onAddToCart={addToCart} />
      )}

      {horrorGames.length > 0 && (
        <GameRow title="Horror Games" games={horrorGames} onAddToCart={addToCart} />
      )}

      {rpgGames.length > 0 && (
        <GameRow title="RPG Games" games={rpgGames} onAddToCart={addToCart} />
      )} </>
    )}
    </div>
  );
}


export default Home;