// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Collection from './pages/Collection';
import LoginPage from './pages/Loginpage';



const AppRoutes = () => {
  return (
    <Router>
      <div className="w-full bg-global-3 flex flex-col items-center overflow-hidden">
        <Header />
        <Routes>
         
         <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Add other routes as needed */}
          <Route path="/collection" element={<div>Collection Page</div>} />
          <Route path="/sale" element={<div>Sale Page</div>} />
          <Route path="/support" element={<div>Support Page</div>} />
          <Route path="/wishlist" element={<div>Wishlist Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;