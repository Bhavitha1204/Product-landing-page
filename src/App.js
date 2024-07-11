import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import ProductDetails from './Components/ProductDetals';
import FeedBack from './Components/FeedBack';
import Footer from './Components/Footer';
import './Styles/mystyle.css';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/feed-back" element={<FeedBack/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;