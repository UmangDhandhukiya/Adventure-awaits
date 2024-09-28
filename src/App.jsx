import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import AuthPage from './pages/AuthPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes without MainLayout */}
        <Route path="/" element={<AuthPage />} />
        
        {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
