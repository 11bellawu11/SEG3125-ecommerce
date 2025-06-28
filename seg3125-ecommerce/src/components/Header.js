import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import React, { useState } from 'react';
import "./Header.css";

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
        <h1 className="logo">Buy Games</h1>
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
          <li><a href="/">Strategy</a></li>
          <li><a href="/">Shooters</a></li>
          <li><a href="/">Sports/Racing</a></li>
          <li><a href="/">Puzzle</a></li>
          <li><a href="/">Casual</a></li>
          <li><a href="/">Co-op</a></li>
        </ul>
      </nav>
    </aside>

    {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    
    </>
  );
};

export default Header;