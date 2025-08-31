import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';


export default function User_login() {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

// ✅ Auto-redirect if already logged in
useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.role === 'user') {
        navigate('/profile'); // Redirect to profile for user roles
      } else {
        navigate('/user_login'); // Redirect to addimg for non-user roles
      }
    } catch (err) {
      console.error('Invalid token:', err);
      localStorage.removeItem('token');
    }
  }
}, [navigate]);

      
    const onSubmit = async (Data) => {
        try {
            const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1];

            const response = await axios.post(
                'https://rahuldebnath.pythonanywhere.com/api/data/app_login/',
                {
                    username: Data.username,
                    password: Data.password,
                },
                {
                    withCredentials: true,
                    headers: {
                      'Content-Type': 'application/json',  // Explicitly set content-type
                        'X-CSRFToken': csrfToken, //Use CSRF tokens only for login or session-based endpoints that need it.
                    },
                }
            );

            const token = response.data.token;
            localStorage.setItem('token', token); // ✅ Store token here

            alert('Login successful');
            console.log('Server Response:', response.data);
            reset();
            navigate('/');
        } catch (error) {
            console.error('Error sending data:', error);
            alert('Login failed. Please check your credentials and try again.');
        }
    }
  return (
    <div className='min-h-screen bg-gradient-to-r from-lime-400 to-green-600 flex items-center justify-center p-4'>
        
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
        <input {...register("username")} type="text" placeholder="Username" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500" required />
        <input {...register("password")} type="password" placeholder="Password" className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500" required />
        <button type="submit" className="w-full bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600 transition duration-200">
          Login </button>
          <div className="text-center text-black mt-4 text-sm">
          don't have  account?{''}
          <a href="/user_sign" className="text-blue-600 mt-4 text-lg hover:underline">
            CREATE ACCOUNT</a>
          </div>
          </form>
         
    </div>
  )
}
