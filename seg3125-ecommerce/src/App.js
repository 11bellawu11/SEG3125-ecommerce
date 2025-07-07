import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import CartAndPayment from './pages/cartandpayment';
import AboutUs from './pages/aboutUs';
import { CartProvider } from './components/cartupdates';
import React, { useState } from 'react';
import Review from './pages/review';
import Footer from "./components/Footer";


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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/survey" element={<Review />} />
        </Routes>
      </Router>
      <Footer />
    </CartProvider>

  );
}

export default App;
