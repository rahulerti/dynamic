import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import img from "./images/welcome.png";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);

        if (decoded.role !== 'user') {
          navigate('/user_login');
        }

        setProfile(decoded);
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
        navigate('/user_login');
      }
    } else {
      navigate('/user_login');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <img
        src={img}
        alt="Welcome"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg mb-6 object-cover border-4 border-white"
      />

      {profile ? (
        <div className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-8 border-l-8 border-green-500 transition duration-300 ease-in-out hover:shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome, {profile.username}
          </h3>
          <p className="text-gray-600 text-lg md:text-2xl mb-2">
            <span className="font-semibold">Username:</span> {profile.username}
          </p>
          <p className="text-gray-600 text-lg md:text-2xl mb-6">
            <span className="font-semibold">Role:</span> {profile.role}
          </p>

          <div className="flex gap-4 flex-wrap mb-6">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
            >
              Home
            </Link>
            <Link
              to="/todo"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
            >
              Todo List
            </Link>
            <Link
              to="/todoit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
            >
              Extra
            </Link>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg shadow-inner border-l-4 border-blue-400">
            <p className="text-gray-700 text-md md:text-lg leading-relaxed">
              ✨ <span className="font-semibold">Stay Organized & Boost Productivity!</span><br />
              Take control of your day with our simple and powerful <span className="font-medium text-blue-600">Todo List</span> — jot down tasks, 
              set goals, and track your progress effortlessly. Want more? Explore the 
              <span className="font-medium text-purple-600"> Extra Features</span> section for tools designed to make your experience smarter and more personalized. 
              <span className="font-semibold text-green-600"> Start now and make every moment count!</span> 💪✅
            </p>
          </div>
        </div>
      ) : (
        <p className="text-white text-xl font-semibold">Loading...</p>
      )}
    </div>
  );
}
