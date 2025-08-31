import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await axios.post('https://rahuldebnath.pythonanywhere.com/api/data/signup/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert('Data sent successfully');
      reset();
      navigate('/login');
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Data not sent');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-400 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register('username', { required: true })}
              placeholder="Name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
