import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import CartAndPayment from './pages/cartandpayment';
import { CartProvider } from './components/cartupdates';
import React, { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <CartProvider>
      <Router>
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedGenres={selectedGenres}
          toggleGenre={toggleGenre}
        />
        <Routes>
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} selectedGenres={selectedGenres} />}
          />
          <Route path="/cart" element={<CartAndPayment />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
