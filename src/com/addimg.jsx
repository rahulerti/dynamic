import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage

        const response = await axios.get('https://rahuldebnath.pythonanywhere.com/get-orders/', {
          headers: {
            Authorization: token,  // Pass the JWT token here and (remember Use JWT token in Authorization header for all subsequent protected API calls after login.)
          },
        });
        setOrders(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 text-lg mt-10">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg mt-10">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Customer Orders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map(order => (
          <div key={order._id} className="bg-white shadow-md border-l-4 border-green-500 rounded-lg p-5 transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{order.name}</h3>
            <p className="text-gray-700"><span className="font-semibold">Product:</span> {order.product}</p>
            <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {order.quantity}</p>
            <p className="text-gray-700"><span className="font-semibold">Phone:</span> {order.phone}</p>
            <p className="text-gray-700"><span className="font-semibold">Address:</span> {order.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
