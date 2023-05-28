import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black py-4 px-7">
      <div className="flex items-center text-lime-green-500">
        <img src="../images/icon.png" alt="" className="h-8 mr-1" />
        
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link to="/about" className="text-lime-green-500 hover:text-lime-green-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lime-green-500 hover:text-lime-green-300">
            Contact
          </Link>
        </li>
        <li>
          <button  className=" rounded-full bg-lime-300 text-black -500 py-2 px-4 rounded hover:bg-lime-green-400">

           
                    Login
            </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
