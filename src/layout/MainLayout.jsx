import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render child routes */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
