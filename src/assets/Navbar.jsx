import React from 'react';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <img src="/images/icon.png" alt="Logo" className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold">Calculator</h1>
      </div>
      <div className="flex items-center">
        <Link to="/contact" className="mr-4">Contact</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/calculate">Calculate</Link>
      </div>
    </nav>
  );
};

export default Navbar;
