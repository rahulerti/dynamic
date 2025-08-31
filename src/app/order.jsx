import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const navigate = useNavigate();

  // State variables to hold input data
  const [name, setName] = useState('');
  const [productName, setProductName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Prepare data to send, In this case, you don’t need to use the append method because you're sending the data as only JSON object in the request body. 
    const orderData = {
      name,
      productName,
      address,
      phone,
      quantity,
    };

    // API request to submit the order using Axios
    try {
      const response = await axios.post('https://rahuldebnath.pythonanywhere.com/api/data/order/', orderData);
      
      if (response.status === 200) {
        alert('Order placed successfully!');
        console.log(response.data); // Log the API response
        navigate('/');
      }
       else {
        alert('Failed to place order');
      }
      
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Fill Order Details</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Quantity"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
