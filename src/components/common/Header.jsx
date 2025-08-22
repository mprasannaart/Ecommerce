// src/components/common/Header.jsx
import { Heart, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom style to approximate the motion blur effect on the logo
  const logoBlurStyle = {
    textShadow: '0.5px 0 1.5px rgba(255, 255, 255, 0.7)',
  };

  return (
    <header className="w-full bg-black px-4 sm:px-6 lg:px-12 py-3">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Left Section: Navigation */}
        <nav className="hidden lg:flex flex-1 justify-start  gap-x-7">
          <Link
            to="/"
            className="text-global-2 font-manrope cursor-pointer text-xs md:text-sm font-normal leading-[17px] underline-animate-2"
          >
            Home
          </Link>
          <Link
            to="/collection"
            className="text-global-2 font-manrope cursor-pointer text-xs md:text-sm font-normal leading-[17px] underline-animate-2"
          >
            Collection
          </Link>
          <Link
            to="/sale"
            className="text-global-2 font-manrope cursor-pointer text-xs md:text-sm font-normal leading-[17px] underline-animate-2"
          >
            Sale
          </Link>
        </nav>

        {/* Center Section: Logo */}
        <div className="flex-shrink-0">
  <Link
    to="/"
    className="flex items-center text-white no-underline"
    aria-label="Extreme Culture Home"
  >
    <img
      src="/images/logo.png"
      alt="Company Logo"
      className="w-8 h-8 mr-2 sm:mr-3" // adjust size & spacing
    />
    <span
      className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-wider"
      style={logoBlurStyle}
    >
      EXTREME
    </span>
    <span
      className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-wider ml-2 sm:ml-3"
      style={logoBlurStyle}
    >
      CULTURE
    </span>
  </Link>
</div>

        {/* Right Section: Actions & Icons */}
        <div className="flex flex-1 justify-end items-center">
          {/* Desktop Links & Icons */}
          <div className="hidden lg:flex items-center gap-x-5 xl:gap-x-7">
            <Link
              to="/support"
              className="text-global-2 font-manrope cursor-pointer text-xs md:text-sm font-normal leading-[17px] underline-animate-2"
            >
              Support
            </Link>
            <Link
              to="/login"
              className="text-global-2 font-manrope cursor-pointer text-xs md:text-sm font-normal leading-[17px] underline-animate-2"
            >
              Login / Sign up
            </Link>
            <div className="flex items-center gap-x-3 md:gap-x-4 ml-2">
              <div className="text-white cursor-pointer">
                <Search />
              </div>
              <Link to="/wishlist" className="text-white cursor-pointer">
                <Heart size={22} /> {/* 32px × 32px */}
              </Link>
              <Link to="/cart" className="text-white cursor-pointer">
                <i class="fi fi-rr-shopping-bag " size={23}></i>
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2 ml-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        className={`fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-95 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
        style={{ backdropFilter: 'blur(2px)' }}
      >
        <div className="flex flex-col items-start space-y-6 pt-24 px-8 h-full">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white font-normal text-lg w-full"
          >
            Home
          </Link>
          <Link
            to="/collection"
            onClick={() => setMenuOpen(false)}
            className="text-white font-normal text-lg w-full"
          >
            Collection
          </Link>
          <Link
            to="/sale"
            onClick={() => setMenuOpen(false)}
            className="text-white font-normal text-lg w-full"
          >
            Sale
          </Link>
          <Link
            to="/support"
            onClick={() => setMenuOpen(false)}
            className="text-white font-normal text-lg w-full pt-2 border-t border-gray-700"
          >
            Support
          </Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-white font-normal text-lg w-full"
          >
            Login / Sign up
          </Link>
          <div className="flex items-center gap-x-6 pt-6 border-t border-gray-700 w-full">
            <img
              src="/images/img_search.svg"
              alt="Search"
              className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity"
            />
            <Link to="/wishlist">
              <img
                src="/images/img_heart.svg"
                alt="Wishlist"
                className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity"
              />
            </Link>
            <Link to="/cart">
              <img
                src="/images/img_shopping_bag.svg"
                alt="Shopping Bag"
                className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </nav>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;