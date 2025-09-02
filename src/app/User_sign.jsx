import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function User_sign() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('https://RahulDebnath.pythonanywhere.com/app_signup/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert('Sign up successful');
      console.log('Server Response:', response.data);
      reset();
      navigate('/user_login');
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Sign up failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-lime-400 to-green-600 flex items-center justify-center p-4'>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5  bg-white p-10 rounded-xl shadow-lg max-w-xl w-full">
        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
          required
        />
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
          required
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
