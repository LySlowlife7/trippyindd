import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa el BrowserRouter
import Home from './pages/home';
import ProductDetail from './pages/product-detail';
import { CartProvider } from './context/cart-context';
import Cart from './pages/cart';
import Checkout from './pages/checkout';

function App() {
  return (
    <div>
      <Router> 
        <CartProvider>
          <Header logo="Trippy Ind" />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;