import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Users, Shield, Zap } from 'lucide-react';

export function About() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Study Sessions",
      description: "Join interactive study rooms with real-time video collaboration"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Subject-Based Groups",
      description: "Find study partners based on your academic interests"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Environment",
      description: "Safe and moderated study spaces for focused learning"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Join",
      description: "Quick access to ongoing study sessions in various subjects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">Study Together</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Join our virtual study rooms and connect with fellow students worldwide.
            Collaborate, learn, and achieve your academic goals together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/signup')}
            className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-500 transition-colors"
          >
            Sign Up
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-transparent border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-600/20 transition-colors"
          >
            Log In
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}