import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md transform"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <motion.img
          src={logo}
          alt="GardenConnect Logo"
          className="h-16 w-16 rounded-full border-2 border-purple-500"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }} and delay
        />
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }} and delay
        >
          Garden Connect
        </motion.h1>
      </div>
      <nav className="space-x-4">
        <Link
          to="/"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }} and delay
        >
          Home
        </Link>
        <Link
          to="/challenges"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }} and delay
        >
          Challenges
        </Link>
        <Link
          to="/garden-details"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }} and delay
        >
          Gardens
        </Link>
        <Link
          to="/garden-list"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }} and delay
        >
          List Your Garden
        </Link>
        <Link
          to="/leader-board"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }} and delay
        >
          Leaderboard
        </Link>
        <Link
          to="/social-feed"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }} and delay
        >
          Feed
        </Link>
        <Link
          to="/market-place"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }} and delay
        >
          Marketplace
        </Link>
        <Link
          to="/progress-tracker"
          className="text-gray-300 hover:text-white hover:underline transition duration-300"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }} and delay
        >
          Profile
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;
