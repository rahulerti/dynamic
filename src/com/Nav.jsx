import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/pol.png";

export default function Nav() {
    return (
        <nav className="bg-slate-600 text-white sticky top-0 shadow-md z-50">
            <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
                
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img src={image} alt="logo" className="w-14 h-14 rounded-full shadow-lg" />
                    <span className="text-2xl font-bold">Admin Dashboard</span>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-lg font-medium">
                    <li>
                        <Link to="/addimg" className="hover:text-cyan-300 transition">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/todo" className="hover:text-cyan-300 transition">Todo</Link>
                    </li>
                    <li>
                        <Link to="/todoit" className="hover:text-cyan-300 transition">Toggle</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
