import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../images/boxitLogo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black py-4 px-7 w-screen">
      <div className="flex items-center  md:w-auto md:mr-auto mt-2">
        <img src={Icon} alt="logo" className="h-8 mr-1 ml-8 md:h-8 md:mr-0 md:ml-20" />
      </div>

      <ul className="flex flex-wrap space-x-4 md:space-x-7 md:mr-20 mt-3">
        <li>
          <Link to="/about" className="text-lime-500 hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-lime-500 hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <button className="rounded-full bg-lime-300 text-black py-2 px-4 rounded hover:bg-gray-400">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
