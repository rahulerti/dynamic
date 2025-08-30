import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-8 w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Company Info</h2>
          <p>YourCompany is dedicated to providing quality products and services with exceptional customer support.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer">About</li>
            <li className="hover:text-cyan-400 cursor-pointer">Services</li>
            <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <ul className="space-y-2">
            <li className="hover:text-cyan-400 cursor-pointer">Facebook</li>
            <li className="hover:text-cyan-400 cursor-pointer">Twitter</li>
            <li className="hover:text-cyan-400 cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-xs">
        &copy; 2025 YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
}
