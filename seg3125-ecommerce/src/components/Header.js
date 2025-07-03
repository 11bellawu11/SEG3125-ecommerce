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

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // Add search logic here
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
    <header className="header">
      <Col className="col1">
      <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </Col>
      <Col className="col2">
        <Link to="/" className="logo">Buy Games</Link>
      </Col>
      <Col className="col3">
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
      </Col>
    </header>

    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <nav>
        <ul>
          <li><a href="/">All Games</a></li>
          <li><a href="/">Action</a></li>
          <li><a href="/">Adventure</a></li>
          <li><a href="/">RPG</a></li>
          <li><a href="/">Simulation</a></li>
          <li><a href="/">Horror</a></li>
      
        </ul>
        <div className="buttom-container">
          <Link to="/cart" className="cart-button">
            <FaShoppingCart style={{marginRight:"5%"}}/>
            My Cart
          </Link>
        </div>

      </nav>
    </aside>

    {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    
    </>
  );
};

export default Header;