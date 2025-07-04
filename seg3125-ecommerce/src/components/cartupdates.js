import { createContext, useContext, useState, useEffect } from "react";
import { games as initialGames } from "../pages/GameList";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  /*Load from localStorage (if present) or fall back to the import */
  const [games, setGames] = useState(() => {
    const stored = localStorage.getItem("games");
    return stored ? JSON.parse(stored) : initialGames;
  });

  /*Derived data: everything that’s in the cart */
  const cartItems = games.filter(g => g.inCart);

  const addToCart = id =>
    setGames(prev =>
      prev.map(g => (g.id === id ? { ...g, inCart: true } : g))
    );

  const removeFromCart = id =>
    setGames(prev =>
      prev.map(g => (g.id === id ? { ...g, inCart: false } : g))
    );

  const clearCart = () =>
    setGames(prev => prev.map(g => ({ ...g, inCart: false })));

  /*Persist to localStorage so the cart survives a refresh */
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  /*Expose state + actions */
  return (
    <CartContext.Provider
      value={{ games, cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};