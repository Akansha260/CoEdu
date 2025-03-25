import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Plus, Users, BookOpen, Code, Calculator, Microscope, Globe } from 'lucide-react';

export function Home() {
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [roomTitle, setRoomTitle] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    { name: 'Mathematics', icon: <Calculator className="w-6 h-6" /> },
    { name: 'Computer Science', icon: <Code className="w-6 h-6" /> },
    { name: 'Science', icon: <Microscope className="w-6 h-6" /> },
    { name: 'Languages', icon: <Globe className="w-6 h-6" /> },
  ];

  const activeRooms = [
    {
      id: 1,
      title: 'Calculus Study Group',
      subject: 'Mathematics',
      participants: 4,
    },
    {
      id: 2,
      title: 'Python Programming',
      subject: 'Computer Science',
      participants: 3,
    },
    {
      id: 3,
      title: 'Physics Lab Review',
      subject: 'Science',
      participants: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-purple-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <h1 className="text-3xl font-bold">Study Sessions</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateRoom(true)}
            className="px-4 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-500 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Room
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {subjects.map((subject) => (
            <motion.button
              key={subject.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSubject(subject.name)}
              className={`p-4 rounded-xl border ${
                selectedSubject === subject.name
                  ? 'bg-purple-600 border-purple-500'
                  : 'bg-purple-800/30 border-purple-700/50'
              } flex items-center gap-3`}
            >
              {subject.icon}
              <span className="font-semibold">{subject.name}</span>
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeRooms
            .filter((room) => !selectedSubject || room.subject === selectedSubject)
            .map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-700/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <span className="px-3 py-1 bg-purple-700/50 rounded-full text-sm">
                    {room.subject}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-purple-300 mb-4">
                  <Users className="w-5 h-5" />
                  <span>{room.participants} participants</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Join Session
                </motion.button>
              </motion.div>
            ))}
        </div>
      </div>

      {showCreateRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-700/50 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-6">Create Study Room</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-1">
                  Room Title
                </label>
                <input
                  type="text"
                  value={roomTitle}
                  onChange={(e) => setRoomTitle(e.target.value)}
                  className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600/50 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter room title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-1">
                  Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-2 bg-purple-900/50 border border-purple-600/50 rounded-lg focus:outline-none focus:border-purple-500"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject.name} value={subject.name}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCreateRoom(false)}
                  className="flex-1 py-2 bg-transparent border border-purple-600 rounded-lg font-semibold hover:bg-purple-600/20 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
                >
                  Create Room
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}