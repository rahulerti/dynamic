import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/pol.png";

export default function Navh() {
  return (
    <nav className="bg-cyan-600 sticky top-0 z-50 shadow-md px-4 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={image} alt="logo" className="w-14 h-14 rounded-full shadow-lg" />
      </div>

      {/* Centered Title */}
      <div className="flex-1 text-center">
        <h1 className="text-4xl font-bold text-red-500 border-4 border-red-800 px-6 py-2 rounded-xl inline-block">
          GO SHOP
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6 text-white font-medium text-lg">
        <li>
          <Link to="/login" className="hover:text-yellow-200 transition">Admin</Link>
        </li>
        <li>
          <Link to="/user_login" className="hover:text-yellow-200 transition">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
