import React from 'react';
import './GameRow.css';

export default function GameRow({ title, games, onAddToCart }) {
  return (
    <div className="game-row">
      <h2>{title}</h2>
      <div className="scroll-container">
        {games.map(game => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.title} className="game-card-image" />
            <div className="game-card-overlay">
              <h4>{game.title}</h4>
              <p>${game.price}</p>
              {!game.inCart ? (
                <button onClick={() => onAddToCart(game.id)}>Add to Cart</button>
              ) : (
                <span className="in-cart-label">✓ In Cart</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
