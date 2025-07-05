import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaShoppingCart } from "react-icons/fa";

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

  return (
    <>
      <header className="header">
        <div className="col1">
          <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
        </div>
        <div className="col2">
          <Link to="/" className="logo">Buy Games</Link>
        </div>
        <div className="col3">
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
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav>
          <h3>
            Search filters
          </h3>
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