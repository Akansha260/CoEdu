import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-purple-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-700/50 w-full max-w-md"
      >
        <div className="flex items-center justify-center mb-8">
          <UserPlus className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600/50 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600/50 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600/50 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-200 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600/50 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-purple-600 rounded-lg font-semibold text-white hover:bg-purple-500 transition-colors"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="mt-4 text-center text-purple-200">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-purple-400 hover:text-purple-300"
          >
            Log In
          </button>
        </p>
      </motion.div>
    </div>
  );
}