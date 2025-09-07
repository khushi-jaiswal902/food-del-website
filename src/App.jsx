import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-b-lg">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-gray-800">Tomato.</span>
        <span className="text-sm text-gray-500">Admin Panel</span>
      </div>
      <div className="flex space-x-4">
        <button onClick={() => setShowLogin(true)} className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">Login</button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Your cart is empty. Start adding some delicious items!</p>
      </div>
    </div>
  );
};

const PlaceOrder = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Place Your Order</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">This is the order placement page. Fill out your details to complete the purchase.</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Welcome to Tomato!</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Explore our wide range of delicious food items and place your order easily.</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-auto rounded-t-lg">
      <div className="text-center">
        <p>© 2025 Tomato. All rights reserved.</p>
      </div>
    </footer>
  );
};

const LoginPopup = ({ setShowLogin }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm relative">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">Enter your details to log in.</p>
        <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const MyOrders = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">You have no past orders.</p>
      </div>
    </div>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myOrders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
