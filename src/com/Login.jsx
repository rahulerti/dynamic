import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';





export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // ✅ Auto-redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/login');
        }
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
      }
    }
  }, [navigate]);

  const onSubmit = async (formData) => {
    try {
      const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1];

      const response = await axios.post(
        'https://RahulDebnath.pythonanywhere.com/login/',
        {
          username: formData.username,
          password: formData.password,
        },
        {
          withCredentials: true,
         
        }
      );


      const token = response.data.token;
      localStorage.setItem('token', token); // ✅ Store token here

      alert('Login successful');
      console.log('Server Response:', response.data);
      reset();
      navigate('/addimg');
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Welcome Back!</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Log in to access your personalized dashboard, manage your profile, and stay connected.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            {...register('username', { required: true })}
            placeholder="Username"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/form" className="text-cyan-600 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
