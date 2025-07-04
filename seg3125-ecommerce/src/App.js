import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import CartAndPayment from './pages/cartandpayment';
import { CartProvider } from './components/cartupdates';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartAndPayment/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
