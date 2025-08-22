import React from 'react';

const Footer = () => {
  return (
    <div className="w-full font-['Arial']">
      {/* Newsletter + Social */}
      <section className="w-full bg-black text-white py-16">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter */}
          <div className="flex flex-col justify-center -mt-6 sm:-mt-8">
            <h2 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[74px] font-bold leading-tight tracking-wide mb-8 sm:mb-12">
              Become Part of <br /> The Extreme Culture
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your E-mail"
                className="px-4 py-3 border border-gray-400 bg-white text-black text-[14px] w-full sm:w-[280px] md:w-[300px] h-[48px] focus:outline-none"
              />
              <button className="bg-gray-600 hover:bg-gray-500 transition px-6 py-3 h-[48px] font-mono text-[14px] tracking-wider w-full sm:w-[280px] md:w-[300px]">
                JOIN OUR NEWSLETTER
              </button>
            </div>
          </div>

          {/* Social Posts */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
            {/* Divider line (hidden on mobile, shows on large screens) */}
            <div className="hidden lg:block w-[2px] h-[400px] sm:h-[500px] lg:h-[550px] bg-white"></div>

            {/* Social Posts */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <h3 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-7xl mb-6 text-center lg:text-left tracking-wide">
                Our Social Post
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start">
                <div className="w-full sm:w-[260px] md:w-[300px] lg:w-[320px] h-[280px] sm:h-[340px] md:h-[370px] lg:h-[390px] bg-gray-300"></div>
                <div className="w-full sm:w-[260px] md:w-[300px] lg:w-[320px] h-[280px] sm:h-[340px] md:h-[370px] lg:h-[390px] bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-black text-white text-center border-t border-gray-700 py-3 text-[12px] sm:text-[14px] tracking-wide px-4">
        5+ Years of Experience &nbsp;&nbsp; 600+ Happy Customers &nbsp;&nbsp; 300+ Premium
        Collections
      </div>

      {/* Links */}
      <footer className="bg-black text-white py-10 border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-[12px] sm:text-[13px]">
          <div>
            <h4 className="font-semibold mb-4">SHOP NOW</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Men</li>
              <li>Tracks</li>
              <li>T-Shirt</li>
              <li>Shorts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Track My order</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SOCIAL</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Instagram</li>
              <li>Youtube</li>
              <li>X</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black text-white text-center border-t border-gray-700 py-3 text-[12px] sm:text-[14px] tracking-wide px-4">
          <p>
            Copyright ©2025 All rights reserved. Developed by{' '}
            <span className="text-blue-400">Arrow Thought</span>
            <hr />
          </p>
        </div>
      </footer>

      {/* Big Branding */}
      <div className="bg-black py-3 px-4 sm:px-8">
        {/* Desktop / Large Screens → One Line */}
        <h1 className="hidden lg:block text-[186px] font-bold text-gray-400 tracking-wide text-center whitespace-nowrap">
          EXTREME CULTURE
        </h1>

        {/* Mobile / Tablet → Two Lines */}
        <h1 className="block lg:hidden text-[48px] sm:text-[80px] md:text-[120px] font-bold text-gray-400 tracking-wide text-center leading-none">
          EXTREME <br /> CULTURE
        </h1>
      </div>
    </div>
  );
};

export default Footer;
