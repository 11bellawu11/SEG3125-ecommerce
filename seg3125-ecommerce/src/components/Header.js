import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from './cartupdates';

import React, { useState } from 'react';
import "./Header.css";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartAndPayment from '../pages/cartandpayment';

const Header = ({ searchTerm, setSearchTerm, selectedGenres, toggleGenre }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const genres = ['Action', 'Adventure', 'RPG', 'Simulation', 'Horror'];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const { cartItems } = useCart();

  return (
    <>
      <header className="header">
        <div className="col1">
          <div className="nav-left">
            <button className="menu-toggle" onClick={toggleSidebar}>☰</button>

            <nav className="nav-links">
               <Link to="/" className="nav-link">Home</Link>
               <Link to="/about-us" className="nav-link">About Us</Link>
            </nav>
          </div>
        </div>
        <div className="col2">
          <Link to="/" className="logo">Buy Games</Link>
        </div>
        <div className="col3">
          <div className="search-and-cart">
            <Form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <Button type="submit" className="search-button">Go</Button>
            </Form>

            <Link to="/cart" className="cart-icon">
              <FaShoppingCart size={22} />
              {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
            </Link>
          </div>
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <h5>
            Search filters
          </h5>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => toggleGenre(genre)}
                  />
                  {genre}
                </label>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <Link to="/cart" className="cart-button">
              <FaShoppingCart style={{ marginRight: "5%" }} />
              My Cart
            </Link>
            <Link to="/about-us" className="aboutUsBtn">
              About us
            </Link>
          </div>
        </nav>
      </aside>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;